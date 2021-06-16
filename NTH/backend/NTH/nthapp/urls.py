from django.urls import path
from .views import *
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path("", RegisterView.as_view(), name="register_page"),
    path("questions/level1/", QuestionView.as_view(), name="Question_page_null"),
    path("questions/<str:user_ans>", QuestionView.as_view(), name="Question_page"),
    path("setQuestion/", QuestionAdminSetterView.as_view(), name="set_question"),
    path("getUserInfo/",UserView.as_view(), name="user_info"),
    path("get_token/", obtain_auth_token, name="get_token"),
]
