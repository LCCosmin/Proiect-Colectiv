from django.urls import path, include
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework import routers
from . import views


urlpatterns = [
	path('api/login', views.login),
	path('api/addevent', views.addevent),
	path('api/getevents', views.getevents),
	path('api/getorganisers', views.getorganisers),
	path('api/uploadimage', views.uploadimage),
	path('api/geteventtypes', views.geteventtypes),
	path('api/manageButtonsOrganizers', views.manageButtonsOrganizers),
	path('api/manageButtonsEvents', views.manageButtonsEvents),
	path('api/geteventspending', views.geteventspending),
	path('api/geteventsaccepted', views.geteventsaccepted),
	path('api/signin', views.signin),
	path('api/geteventdetails', views.geteventdetails),
	path('api/updatepersonaldata', views.updatepersonaldata),
	path('api/getpersonaldata', views.getpersonaldata),
	path('api/usergoingtoevent', views.usergoingtoevent),
	path('api/usersinterested', views.usersinterested),
	path('api/getparticipantslist', views.getparticipantslist),
	path('api/getuserinfo', views.getuserinfo),

]
