# django imports
import datetime

from .models import PlayMe, Question
from .serializer import PlayMeGetSerializer, PlayMeSetSerializer, QuestionSetSerializer, QuestionNonSetSerializer

# rest framework imports
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication

ErrorDictionary = {
    'status': 'Kindly Login to Play the Game'
}

WrongDict = {
    'status': 'WA',
}


class UserView(APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication]

    def get(self, request, *args, **kwargs):
        user = PlayMe.objects.all().order_by('-level', "last_level_update_time").filter(
            username=request.user.username).first()
        question = Question.objects.filter(level=user.level).first()
        returnDict = {
            'username': user.username,
            'level': user.level,
            'hints': question.tips,
        }
        return Response(returnDict)


class RegisterView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        qs = self.get_queryset()
        # serializer = PlayMeGetSerializer(qs, many=True)
        # print(serializer.data)
        return Response(qs)

    def post(self, request, *args, **kwargs):
        serializer = PlayMeSetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            status_report = {
                'status': "information received is valid and user is registered",
                'registered': True,
            }
            return Response(status_report, status=200)
        return Response(serializer.errors, status=500)

    def get_queryset(self):
        qs = PlayMe.objects.all().order_by('-level', "last_level_update_time")
        returnlst = []
        for user in qs:
            returnDict = {}
            returnDict['username'] = str(user.username)
            returnDict['level'] = str(user.level)
            returnlst.append(returnDict)
        return {'result_data': returnlst[:min(10, qs.count())]}


class QuestionView(APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]

    def get(self, request, *args, **kwargs):
        user = request.user
        if not user:
            status_report = {'status': "user is not available in database. Kindly make a new one"}
            return Response(status_report)
        qs = Question.objects.filter(level=user.level)
        question_serializer = QuestionNonSetSerializer(qs.first())
        return Response(question_serializer.data)

    def get(self, request, user_ans=""):
        try:
            if request.user.is_authenticated:
                user = request.user
                qs = Question.objects.filter(level=user.level)
                question = qs.first()
                question_serializer = QuestionNonSetSerializer(qs.first())
                if str(user_ans) == question.answer:
                    user.level += 1
                    user.last_level_update_time = datetime.datetime.now()
                    user.save()
                    next_question_qs = Question.objects.filter(level=user.level)
                    question_serializer = QuestionNonSetSerializer(next_question_qs.first())
                    return Response(question_serializer.data)
                return Response(question_serializer.data)
        except Exception as e:
            return Response(ErrorDictionary)


class QuestionAdminSetterView(APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]

    def post(self, request, *args, **kwargs):
        question_serializer = QuestionSetSerializer(data=request.data)
        if question_serializer.is_valid():
            question_serializer.save()
            status_report = {'status': "Question Successfully saved"}
            return Response(status_report)
        return Response(question_serializer.errors)

    def get(self, request, *args, **kwargs):
        qs = self.get_queryset()
        serializer = QuestionSetSerializer(qs, many=True)
        return Response(serializer.data)

    def get_queryset(self):
        return Question.objects.all().order_by("level")
