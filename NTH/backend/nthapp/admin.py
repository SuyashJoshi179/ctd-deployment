from django.contrib import admin
from .models import PlayMe, Question
from django.contrib.auth.models import Group


class PlayMeWrapper(admin.ModelAdmin):
    list_display = ['username', 'fullname', 'email', 'college', 'mobile_number']
    search_fields = ['username', 'fullname']
    list_per_page = 10
    date_hierarchy = 'date_joined'
    ordering = ('-date_joined',)


class QuestionWrapper(admin.ModelAdmin):
    list_display = ['question', 'answer', 'level']
    search_fields = ['question', 'level']
    list_per_page = 5
    ordering = ('level',)


admin.site.register(PlayMe, PlayMeWrapper)
admin.site.register(Question, QuestionWrapper)
admin.site.unregister(Group)
