from django.urls import include, path

from rest_framework import routers

from .views import UserViewSet, GroupViewSet, RecordViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'records', RecordViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
