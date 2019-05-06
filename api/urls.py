from django.urls import include, path

from rest_framework import routers
from rest_framework.authtoken import views

from .views import UserViewSet, GroupViewSet, RecordViewSet, PostViewSet, StaffViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'records/(?P<date>[0-9]{4}-[0-9]{2}-[0-9]{2})', RecordViewSet)
router.register(r'records', RecordViewSet)
router.register(r'posts', PostViewSet)
router.register(r'staffs', StaffViewSet)

urlpatterns = [
    path('token-auth/', views.obtain_auth_token),
    path('session-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('', include(router.urls)),
]
