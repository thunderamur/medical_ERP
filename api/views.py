from django.contrib.auth.models import User, Group

from rest_framework import viewsets
from rest_framework.decorators import action

from .serializers import UserSerializer, GroupSerializer, RecordSerializer
from main.models import Record


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class RecordViewSet(viewsets.ModelViewSet):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer

    @action(detail=False)
    def day(self, request, *args, **kwargs):
        date = kwargs.get('date', None)
        self.queryset = Record.objects.filter(date=date)
        return super(RecordViewSet, self).list(request, *args, **kwargs)
