from django.urls import path, include
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'tasks',views.UserView, 'task')

urlpatterns = [
	path('usersinfo/', views.UserInfoList.as_view()),
	path('usersinfo/<int:pk>/', views.UserInfoDetail.as_view()),

	path('roles/', views.RoleList.as_view()),
	path('roles/<int:pk>/', views.RoleDetail.as_view()),

	path('users/', views.UserList.as_view()),
	path('users/<int:pk>/', views.UserDetail.as_view()),

	path('eventtypes/', views.EventTypeList.as_view()),
	path('eventypes/<int:pk>/', views.EventTypeDetail.as_view()),
	
	path('events/', views.EventList.as_view()),
	path('events/<int:pk>/', views.EventDetail.as_view()),

	path('api/', include(router.urls)),
	path('api/login', views.login),
	path('api/addevent', views.addevent),

    # path('userchat/', views.UserChatList.as_view()),
    # path('userchat/<int:pk>/', views.UserChatDetail.as_view()),

	path('favoritelists/', views.FavoriteListList.as_view()),
	path('favoritelists/<int:pk>/', views.FavoriteListDetail.as_view()),

	path('usertoevents/', views.UserToEventList.as_view()),
	path('usertoevents/<int:pk>/', views.UserToEventDetail.as_view()),
]
