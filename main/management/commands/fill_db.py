from django.core.management.base import BaseCommand
from mixer.backend.django import mixer
from django.contrib.auth import get_user_model
from datetime import datetime, timedelta
import random

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

today = datetime.now().strftime('%Y-%m-%d')
today = datetime.strptime(today, '%Y-%m-%d')
day_start = today + timedelta(hours=9)
start = [day_start + timedelta(hours=i) for i in range(7)]
finish_delta = [timedelta(minutes=30), timedelta(minutes=45), timedelta(hours=1), timedelta(hours=2)]


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

        for _ in range(10):
            time_start = random.choice(start)
            time_finish = time_start + random.choice(finish_delta)
            mixer.blend(Record,
                        doctor=lambda: random.choice(doctors),
                        patient=lambda: random.choice(patients),
                        date=today,
                        time_start=time_start,
                        time_finish=time_finish,
                        )

        mixer.cycle(3).blend(Staff,
                             name=lambda: random.choice(NAMES),
                             surname=lambda: random.choice(SURNAMES),
                             patronymic=lambda: random.choice(PATRONYMICS),
                             post=mixer.blend(Post, name='Ассистент'),
                             )
