from django.contrib import admin
from .models import Profile, Question
from .models import Response as Response_model

admin.site.register(Question)
admin.site.register(Profile)
admin.site.register(Response_model)
