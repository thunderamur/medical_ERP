from django.contrib.auth.models import User, Group

from rest_framework.serializers import ModelSerializer

from main.models import Record, Passport, Post, Staff, Patient, Service


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class GroupSerializer(ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'


class RecordSerializer(ModelSerializer):
    class Meta:
        model = Record
        fields = '__all__'
        depth = 3


class PassportSerializer(ModelSerializer):
    class Meta:
        model = Passport
        fields = '__all__'


class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class StaffSerializer(ModelSerializer):
    class Meta:
        model = Staff
        fields = '__all__'
        depth = 2


class PatientSerializer(ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'
        depth = 2


class ServiceSerializer(ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'
