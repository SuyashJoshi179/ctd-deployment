from rest_framework import serializers
from .models import PlayMe, Question
import datetime


class PlayMeGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayMe
        ordering = ['-level']
        fields = ['username', 'level']


class PlayMeSetSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        return PlayMe.objects.create_user(**validated_data)
    class Meta:
        model = PlayMe
        ordering = ['-last_level_update_time', '-level', ]
        fields = ['username', 'fullname', 'email', 'password', 'college', 'mobile_number']


class QuestionSetSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question
        ordering = ['level']
        fields = ['question','answer', 'level', 'tips','image1','image2','image3','image4']


class QuestionNonSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        ordering = ['level']
        fields = ['question', 'level', 'tips','image1','image2','image3','image4']