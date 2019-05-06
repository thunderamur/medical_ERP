from django.core.management.base import BaseCommand
from mixer.backend.django import mixer
from django.contrib.auth import get_user_model
import random
import datetime

from main.models import Record, Staff, Patient, Post


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

DOCTORS = [
    'Терапевт',
    'Ортопед',
    'Хирург',
]

doc_gen = (doc for doc in DOCTORS)
DOC_POSTS = mixer.cycle(len(DOCTORS)).blend(Post, name=doc_gen, is_doctor=True)


class Command(BaseCommand):
    def handle(self, *args, **options):
        doctors = mixer.cycle(3).blend(Staff,
                                       name=lambda: random.choice(NAMES),
                                       surname=lambda: random.choice(SURNAMES),
                                       patronymic=lambda: random.choice(PATRONYMICS),
                                       post=lambda: random.choice(DOC_POSTS),
                                       )
        patients = mixer.cycle(5).blend(Patient,
                                        name=lambda: random.choice(NAMES),
                                        surname=lambda: random.choice(SURNAMES),
                                        patronymic=lambda: random.choice(PATRONYMICS),
                                        )

        mixer.cycle(10).blend(Record,
                              doctor=lambda: random.choice(doctors),
                              patient=lambda: random.choice(patients),
                              date=datetime.datetime.now(),
                              )

        mixer.cycle(3).blend(Staff,
                             name=lambda: random.choice(NAMES),
                             surname=lambda: random.choice(SURNAMES),
                             patronymic=lambda: random.choice(PATRONYMICS),
                             post=mixer.blend(Post, name='Ассистент'),
                             )
