from .models import Question, Response, Profile
from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email')

'''
class AccountSerializer(serializers.ModelSerializer):

    class RegisterSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            exclude=['username','totalScore','correctly_solved','attempted','latest_ac_time']

    profile = RegisterSerializer()

    class Meta:
        model=User
        exclude = ['last_login', 'is_superuser', 'is_staff', 'date_joined', 'is_active', 'groups', 'user_permissions']
        # extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        print("validated data:\n",validated_data)
        profile_data = validated_data.pop("profile")
        useri = User.objects.create_user(**validated_data)
        User.objects.create(username=useri,**profile_data)
        return useri
'''


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = [
            'title', 'description'
        ]


class ResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Response
        fields = '__all__'
