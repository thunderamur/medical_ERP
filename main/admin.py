from django.contrib import admin

from .models import Record, Passport, Post, Staff, Patient, Service


@admin.register(Record)
class RecordAdmin(admin.ModelAdmin):
    pass


@admin.register(Passport)
class RecordAdmin(admin.ModelAdmin):
    pass


@admin.register(Post)
class RecordAdmin(admin.ModelAdmin):
    pass


@admin.register(Staff)
class RecordAdmin(admin.ModelAdmin):
    pass


@admin.register(Patient)
class RecordAdmin(admin.ModelAdmin):
    pass


@admin.register(Service)
class RecordAdmin(admin.ModelAdmin):
    pass
