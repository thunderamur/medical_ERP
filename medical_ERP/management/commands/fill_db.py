from django.core.management.base import BaseCommand
from mixer.backend.django import mixer

from main.models import Record


class Command(BaseCommand):
    def handle(self, *args, **options):
        mixer.cycle(5).blend(Record)
