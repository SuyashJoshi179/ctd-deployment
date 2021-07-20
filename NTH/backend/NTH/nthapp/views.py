# django imports
import datetime
import re
from .models import PlayMe, Question
from .serializer import PlayMeGetSerializer, PlayMeSetSerializer, QuestionSetSerializer, QuestionNonSetSerializer

# rest framework imports
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework import renderers

ErrorDictionary = {
    'status': 'Kindly Login to Play the Game'
}

WrongDict = {
    'status': 'WA',
}

error_report = {
    'username' : {'status':'Username Field is Empty / Put a Valid Username'},
    'email' : {'status': 'Email Field is Empty / Put a Valid Email'},
    'mobile_number' : {'status': 'Mobile number Field is Empty / Put a Valid Mobile Number'},
    'fullname' : {'status': 'Fullname Field is Empty / Put a Valid Full Name (Alpabetical)'},
    'password' : {'status': 'Password Field is Empty'},
    'college' : {'status': 'College Field is Empty'}
}


def checkFullname(fullName):
    setbool = True
    for name in fullName.split():
        if(not name.isalpha()):
            setbool = False
            break
    return setbool

class UserView(APIView):
    renderer_classes = [renderers.JSONRenderer]
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
    renderer_classes = [renderers.JSONRenderer]
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        qs = self.get_queryset()
        # serializer = PlayMeGetSerializer(qs, many=True)
        # print(serializer.data)
        return Response(qs)

    def post(self, request, *args, **kwargs):
        
        regexusername = "^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$"
        regexemail = "^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$"
        formData = request.data
        if(not formData['username'] or not re.search(regexusername, formData.get('username'))):
            return Response(error_report.get('username'))
        if(not formData.get('fullname') or not checkFullname(str(formData.get('fullname')))):
             return Response(error_report.get('fullname'))
        if(not formData.get('email') or not re.search(regexemail, formData.get('email'))):
             return Response(error_report.get('email'))
        if(not formData.get('mobile_number') or not str(formData.get('mobile_number')).isnumeric()):
             return Response(error_report.get('mobile_number'))
        if(not formData.get('college')):
             return Response(error_report.get('college')) 
        if(not formData.get('password')):
             return Response(error_report.get('password'))
        serializer = PlayMeSetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            status_report = {
                'status': "Information Received is Valid and User is Registered Successfully",
                'registered': True
            }
            return Response(status_report, status=200)
        return Response(serializer.errors)

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
    renderer_classes = [renderers.JSONRenderer]
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
    renderer_classes = [renderers.JSONRenderer]
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
