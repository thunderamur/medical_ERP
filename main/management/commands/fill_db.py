from django.core.management.base import BaseCommand
from mixer.backend.django import mixer
from django.contrib.auth import get_user_model
import random

from main.models import Record


User = get_user_model()


class Command(BaseCommand):
    def handle(self, *args, **options):
        doctors = mixer.cycle(2).blend(User)
        patients = mixer.cycle(3).blend(User)
        mixer.cycle(10).blend(Record, doctor=lambda: random.choice(doctors), patient=lambda: random.choice(patients))
