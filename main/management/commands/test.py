from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

from main.models import Patient


User = get_user_model()


class Command(BaseCommand):
    def handle(self, *args, **options):
        user_data = {
            'surname': 'Ivanov',
            'name': 'Ivan',
            'patronymic': 'Ivanovich',
        }
        Patient.objects.create(**user_data)
