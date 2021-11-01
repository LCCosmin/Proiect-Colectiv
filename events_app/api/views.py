from django.shortcuts import render
from rest_framework import generics, serializers

from .models import UserData
from .serializers import UserDataSerializer

# Create your views here.

class UserDataView(generics.ListAPIView):
    queryset = UserData.objects.all()
    serializer_class = UserDataSerializer
