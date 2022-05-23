from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter()
router.register('api/news', views.NewsViewSet, basename='news')
router.register('api/customer', views.CustomerViewSet, basename='customer')
router.register('auth/register', views.RegisterViewSet)
urlpatterns = [
    path(r'', include(router.urls))
]
