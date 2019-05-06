# Generated by Django 2.2 on 2019-05-06 02:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Passport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('series', models.CharField(max_length=10, verbose_name='Серия')),
                ('number', models.CharField(max_length=10, verbose_name='Номер')),
                ('state_granted', models.CharField(max_length=50, verbose_name='Кем выдан')),
                ('when_granted', models.DateField(verbose_name='Когда выдан')),
            ],
            options={
                'verbose_name': 'Паспорт',
                'verbose_name_plural': 'Паспорта',
            },
        ),
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=30, verbose_name='Имя')),
                ('surname', models.CharField(max_length=30, verbose_name='Фамилия')),
                ('patronymic', models.CharField(max_length=30, verbose_name='Отчество')),
                ('birth_day', models.DateTimeField(null=True, verbose_name='Дата рождения')),
                ('mobile_phone', models.CharField(max_length=20, null=True, verbose_name='Мобильный телефон')),
                ('address', models.CharField(max_length=50, null=True, verbose_name='Адрес')),
                ('passport', models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.Passport', verbose_name='Паспорт')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
            options={
                'verbose_name': 'Пациент',
                'verbose_name_plural': 'Пациенты',
            },
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=30, verbose_name='Имя')),
                ('is_doctor', models.BooleanField(default=False, verbose_name='Врач')),
            ],
            options={
                'verbose_name': 'Должность',
                'verbose_name_plural': 'Должности',
            },
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=50, verbose_name='Услуга')),
                ('color', models.CharField(max_length=10, verbose_name='Цвет')),
            ],
            options={
                'verbose_name': 'Услуга',
                'verbose_name_plural': 'Услуги',
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Staff',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=30, verbose_name='Имя')),
                ('surname', models.CharField(max_length=30, verbose_name='Фамилия')),
                ('patronymic', models.CharField(max_length=30, verbose_name='Отчество')),
                ('birth_day', models.DateTimeField(null=True, verbose_name='Дата рождения')),
                ('mobile_phone', models.CharField(max_length=20, null=True, verbose_name='Мобильный телефон')),
                ('address', models.CharField(max_length=50, null=True, verbose_name='Адрес')),
                ('work_phone', models.CharField(max_length=20, verbose_name='Рабочий телефон')),
                ('passport', models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.Passport', verbose_name='Паспорт')),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='main.Post', verbose_name='Должность')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
            options={
                'verbose_name': 'Сотрудник',
                'verbose_name_plural': 'Сотрудники',
            },
        ),
        migrations.CreateModel(
            name='Record',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('date', models.DateField(verbose_name='Дата')),
                ('time_start', models.TimeField(verbose_name='Время начала')),
                ('time_finish', models.TimeField(verbose_name='Время завершения')),
                ('doctor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.Staff', verbose_name='Врач')),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.Patient', verbose_name='Пациент')),
            ],
            options={
                'verbose_name': 'Запись на прием',
                'verbose_name_plural': 'Записи на прием',
                'ordering': ['date', 'time_start'],
            },
        ),
    ]
