from django.contrib.auth.models import User, Group

from rest_framework.serializers import HyperlinkedModelSerializer

from main.models import Record


class UserSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class RecordSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Record
        fields = ('url', 'datetime', 'doctor', 'patient', 'created', 'updated')

