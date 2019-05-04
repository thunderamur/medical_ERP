from django.core.management.base import BaseCommand
from mixer.backend.django import mixer
from django.contrib.auth import get_user_model
import random

from main.models import Record, Staff, Patient


User = get_user_model()


NAMES = [
    'Иван',
    'Антон',
    'Владимир',
    'Андрей',
    'Петр',
]

SURNAMES = [
    'Иванов',
    'Петров',
    'Сидоров',
    'Назаборногузадирищенко',
]

PATRONYMICS = [
    'Авраамович',
    'Германович',
    'Израилович',
    'Поликарпович',
]


class Command(BaseCommand):
    def handle(self, *args, **options):
        doctors = mixer.cycle(2).blend(Staff,
                                       name=lambda: random.choice(NAMES),
                                       surname=lambda: random.choice(SURNAMES),
                                       patronymic=lambda: random.choice(PATRONYMICS),
                                       )
        patients = mixer.cycle(3).blend(Patient,
                                        name=lambda: random.choice(NAMES),
                                        surname=lambda: random.choice(SURNAMES),
                                        patronymic=lambda: random.choice(PATRONYMICS),
                                        )

        mixer.cycle(10).blend(Record, doctor=lambda: random.choice(doctors), patient=lambda: random.choice(patients))
