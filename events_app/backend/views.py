from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializers import *
# Create your views here.
  
class UserDataView(APIView):
    
    serializer_class = UserDataSerializer
  
    def get(self, request):
        detail = [ {"first_name": detail.first_name, "last_name": detail.last_name, "username": detail.username, "email": detail.email} 
        for detail in UserData.objects.all()]
        return Response(detail)
  
    def post(self, request):
        serializer = UserDataSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)