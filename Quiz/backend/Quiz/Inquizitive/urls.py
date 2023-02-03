"""Inquizitive URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from knox import views as knox_views
from django.urls import path, re_path
from quiz.views import LoginAPI
from django.conf.urls import include, url
from django.shortcuts import render

def render_react(request):
    return render(request, "index.html")


urlpatterns = [
    path('admin/', admin.site.urls),
    path('apiv1/quiz/', include('quiz.urls')),
    #path('api/register/', RegisterAPI.as_view(), name='register'),
    path('apiv1/api/login/', LoginAPI.as_view(), name='login'),
    path('apiv1/api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    #path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    re_path(r"^$", render_react),
    re_path(r"^(?:.*)/?$", render_react),

]
