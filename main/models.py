from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class CreatedUpdated(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Person(models.Model):
    user = models.OneToOneField(get_user_model(), verbose_name='Пользователь', on_delete=models.CASCADE)
    name = models.CharField('Имя', max_length=30)
    surname = models.CharField('Фамилия', max_length=30)
    patronymic = models.CharField('Отчество', max_length=30)
    birth_day = models.DateTimeField('Дата рождения')
    mobile_phone = models.CharField('Мобильный телефон', max_length=20)
    address = models.CharField('Адрес', max_length=50)

    class Meta:
        abstract = True
        ordering = ['surname']

    def get_full_name(self):
        return '{} {} {}'.format(self.name, self.surname, self.patronymic)

    def get_short_name(self):
        return '{} {}.{}.'.format(self.name, self.surname[:1], self.patronymic[:1])


class Doctor(Person, CreatedUpdated):
    work_phone = models.CharField('Рабочий телефон', max_length=20)

    class Meta:
        verbose_name = 'Сотрудник'
        verbose_name_plural = 'Сотрудники'


class Patient(Person, CreatedUpdated):
    class Meta:
        verbose_name = 'Пациент'
        verbose_name_plural = 'Пациенты'


class Service(CreatedUpdated):
    name = models.CharField('Услуга', max_length=50)
    color = models.CharField('Цвет', max_length=10)

    class Meta:
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'
        ordering = ['name']


class Record(CreatedUpdated):
    date = models.DateField('Дата')
    time_start = models.TimeField('Время начала')
    time_finish = models.TimeField('Время завершения')
    doctor = models.ForeignKey(Doctor, verbose_name='Врач', on_delete=models.CASCADE)
    patient = models.ForeignKey(Patient, verbose_name='Пациент', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Запись на прием'
        verbose_name_plural = 'Записи на прием'
        ordering = ['datetime', 'time_start']

    def __str__(self):
        return '{date} {time_start} {doctor}'.format(date=self.date, time_start=self.time_start, doctor=self.doctor)
