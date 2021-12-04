from django.urls import path, include
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework import routers
from . import views


urlpatterns = [
	path('api/login', views.login),
	path('api/addevent', views.addevent),
	path('api/getevents', views.getevents),
]
