from . import views
from django.urls import path
from .views import Question,  Profile
from .views import ResponseModel

urlpatterns = [
    path('question/', Question.as_view(), name='question'),
    path('response/', ResponseModel.as_view(), name='response'),
    path('profile/', Profile.as_view(), name='profile'),
    
]