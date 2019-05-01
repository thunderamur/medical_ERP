from django.core.management.base import BaseCommand
from mixer.backend.django import mixer
from django.contrib.auth import get_user_model
import random

from main.models import Record, Staff, Patient


User = get_user_model()


class Command(BaseCommand):
    def handle(self, *args, **options):
        user_data = {
            'surname': 'Ivanov',
            'name': 'Ivan',
            'patronymic': 'Ivanovich',
        }
        Patient.objects.create(**user_data)
