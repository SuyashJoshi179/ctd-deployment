from rest_framework import permissions, generics, mixins
from django.contrib.auth import login
from django.shortcuts import render, redirect, HttpResponse
from rest_framework.authentication import BasicAuthentication
from django.contrib.auth.models import User, auth
from datetime import datetime
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView
from rest_framework import permissions
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from . models import Response as Response_user
from . models import Profile as profile_model
from . models import Question as question_model
from knox.models import AuthToken
from rest_framework.views import APIView
from .serializers import QuestionSerializer, ResponseSerializer, ProfileSerializer
import random
import json

class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    #authentication_classes = [BasicAuthentication,]

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        profile = profile_model.objects.filter(user=user).first()
        if profile == None:
            profile = profile_model(user=user)
            profile.save()
            login(request, user)
            return super(LoginAPI, self).post(request, format=None)
        else:
            return Response({'attempted': 1})


class Profile(mixins.ListModelMixin, generics.GenericAPIView):
    permission_classes = (permissions.AllowAny,)
    # authentication_classes = [BasicAuthentication,]
    serializer_class = ProfileSerializer
    queryset = profile_model.objects.all()

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class Question(APIView):
    permission_classes = [IsAuthenticated]

    #authentication_classes = [BasicAuthentication,]
    #serializer_class = QuestionSerializer
    #queryset = question_model.objects.all().order_by('?')

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            username = request.user.username
            user = User.objects.get(username=username)
            profile = profile_model.objects.filter(user=request.user).first()
            ques_attempted = profile.question_attempted.split(" ")
            """print("Time remaining :: "+str(30 - ((datetime.now().hour*3600 + datetime.now().minute*60 + datetime.now().second) -
                    (profile.latest_que_time.hour*3600 + profile.latest_que_time.minute*60 + profile.latest_que_time.second))))"""
            if len(ques_attempted)-1 >= 30 and profile.last_attempted == 1:
                return HttpResponse('logout')
            if (profile.last_attempted == 0 and len(ques_attempted) >= 1) and ((datetime.now().hour*3600 + datetime.now().minute*60 + datetime.now().second) -
                    (profile.latest_que_time.hour*3600 + profile.latest_que_time.minute*60 + profile.latest_que_time.second)) < 30:
                response = Response_user.objects.filter(profile=profile).last()
                question = question_model.objects.filter(id=int(ques_attempted[-1])).first()
                profile.time_rem = 30 - ((datetime.now().hour*3600 + datetime.now().minute*60 + datetime.now().second) -
                    (profile.latest_que_time.hour*3600 + profile.latest_que_time.minute*60 + profile.latest_que_time.second))
                response.time_rem = profile.time_rem
                profile.save(update_fields=["time_rem"])
                response.save(update_fields=["time_rem"])
            else:
                different = 0
                que_id = 0
                while different == 0:
                    que_id = random.randint(1, 95)
                    if str(que_id) not in ques_attempted:
                        different = 1
                ques_attempted.append(que_id)
                profile.question_attempted = " ".join(map(str, ques_attempted))
                profile.latest_que_time = datetime.now()
                profile.last_attempted = 0
                profile.time_rem = 30
                profile.number_of_question_solved = len(ques_attempted) - 1
                profile.save(update_fields=["question_attempted", "latest_que_time", "last_attempted", "time_rem", "number_of_question_solved"])
                question = question_model.objects.filter(id=que_id).first()

                Response_user(profile=profile, question_id=question, number_of_question_solved=len(ques_attempted) - 1,
                              time_rem=profile.time_rem, description=question.description).save()

            response = Response_user.objects.filter(profile=profile).last()
            response_return = ResponseSerializer(response)
            return Response({'data': response_return.data}, status=200)

class ResponseModel(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = ResponseSerializer
    queryset = Response_user.objects.all()

    """def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            profile = profile_model.objects.filter(user=request.user).first()
            response = Response_user.objects.filter(profile=profile).last()
            response_return = ResponseSerializer(response)
            return Response({'data': response_return.data}, status=200)"""

    def post(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            username = request.user.username
            user = User.objects.get(username=username)
            profile = profile_model.objects.filter(user=request.user).first()
            response = Response_user.objects.filter(profile=profile).last()
            ques_attempted = profile.question_attempted.split(" ")
            # attempt concatenation block
            # answer = request.POST.get("answer")
            answerdict = json.loads(request.body.decode("utf-8"))
            response.attempt = answerdict["answer"]
            answer = answerdict["answer"]
            answer = answer.split(" ")
            answer = [each_string.lower() for each_string in answer]
            separator = ""
            answer = separator.join(answer)
            # print(answer)
            # correct answer concatenation block
            correct_ans = question_model.objects.get(id=int(ques_attempted[-1])).correct_ans
            correct_ans = correct_ans.split(" ")
            correct_ans = [each_string.lower() for each_string in correct_ans]
            separator = ""
            correct_ans = separator.join(correct_ans)
            # print(correct_ans)
            if answer == correct_ans:
                profile.score += 1
            profile.last_attempted = 1
            response.save(update_fields=["attempt"])
            profile.save(update_fields=["score", "last_attempted"])
            return redirect('question')