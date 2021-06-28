from django.db import models
from django.contrib.auth.models import User, auth
from datetime import datetime
from django.utils.translation import gettext_lazy as _


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    score = models.IntegerField(default=0)
    latest_que_time = models.TimeField(auto_now=False, auto_now_add=False, default=datetime.now())
    last_attempted = models.IntegerField(default=0)
    question_attempted = models.TextField(default="")
    number_of_question_solved = models.IntegerField(default=0)
    time_rem = models.IntegerField(default=30)

    def __str__(self):
        return self.user.username


class Question(models.Model):
    class Meta:
        verbose_name = _("Question")
        verbose_name_plural = _("Questions")
    title = models.CharField(max_length=255)
    description = models.TextField()
    correct_ans = models.CharField(max_length=100, default="")
    
    def __str__(self):
        return self.title


class Response(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE)
    attempt = models.CharField(max_length=100)
    description = models.TextField()
    number_of_question_solved = models.IntegerField(default=0)
    time_rem = models.IntegerField(default=30)

    def __str__(self):
        return self.profile.user.username