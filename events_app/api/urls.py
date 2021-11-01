from django.urls import path
from .views import UserDataView

urlpatterns = [
    path('home', UserDataView.as_view()),
]