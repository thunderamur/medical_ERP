from django.urls import include, path

from rest_framework import routers
from rest_framework.authtoken import views

from .views import UserViewSet, GroupViewSet, RecordViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'records', RecordViewSet)

urlpatterns = [
    path('token-auth/', views.obtain_auth_token),
    path('session-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('', include(router.urls)),
]
