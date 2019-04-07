from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class Record(models.Model):
    datetime = models.DateTimeField('Дата и время')
    doctor = models.ForeignKey(User, related_name='doctors', verbose_name='Врач', on_delete=models.CASCADE)
    patient = models.ForeignKey(User, related_name='patients', verbose_name='Пациент', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Запись на прием'
        verbose_name_plural = 'Записи на прием'
        ordering = ['-datetime']

    def __str__(self):
        return '{datetime} {doctor}'.format(datetime=self.datetime, doctor=self.doctor)
