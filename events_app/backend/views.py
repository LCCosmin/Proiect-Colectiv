import re
from django.http.response import Http404
from django.shortcuts import render
from rest_framework.parsers import JSONParser
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *

from .models import *
from rest_framework import status

# Create your views here.


class UserInfoList(APIView):
    serializer_class = UserInfoSerializer

    def get(self, request):
        usersinfo = UserInfo.objects.all()
        serializer = UserInfoSerializer(usersinfo, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserInfoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserInfoDetail(APIView):
    serializer_class = UserInfoSerializer

    def get_object(self, pk):
        try:
            return UserInfo.objects.get(id=pk)
        except UserInfo.DoesNotExist:
            return Http404
    
    def get(self, request, pk, format=None):
        userinfo = self.get_object(pk)
        serializer = UserInfoSerializer(userinfo)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        userinfo = self.get_object(pk)
        serializer = UserInfoSerializer(userinfo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        userinfo = self.get_object(pk)
        userinfo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    
class RoleList(APIView):
    serializer_class = RoleSerializer

    def get(self, request):
        roles = Role.objects.all()
        serializer = RoleSerializer(roles, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RoleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RoleDetail(APIView):
    serializer_class = RoleSerializer

    def get_object(self, pk):
        try:
            return Role.objects.get(id=pk)
        except Role.DoesNotExist:
            return Http404
    
    def get(self, request, pk, format=None):
        role = self.get_object(pk)
        serializer = RoleSerializer(role)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        role = self.get_object(pk)
        serializer = RoleSerializer(role, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        role = self.get_object(pk)
        role.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class UserList(APIView):
    serializer_class = UserSerializer

    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserDetail(APIView):
    serializer_class = UserSerializer

    def get_object(self, pk):
        try:
            return User.objects.get(id=pk)
        except User.DoesNotExist:
            return Http404
    
    def get(self, request, pk, format=None):
        user = self.get_object(pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        user = self.get_object(pk)
        serializer = RoleSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        user = self.get_object(pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class EventTypeList(APIView):
    serializer_class = EventTypeSerializer

    def get(self, request):
        eventTypes = EventType.objects.all()
        serializer = EventTypeSerializer(eventTypes, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EventTypeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EventTypeDetail(APIView):
    serializer_class = EventTypeSerializer

    def get_object(self, pk):
        try:
            return EventType.objects.get(id=pk)
        except EventType.DoesNotExist:
            return Http404
    
    def get(self, request, pk, format=None):
        eventType = self.get_object(pk)
        serializer = EventTypeSerializer(eventType)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        eventType = self.get_object(pk)
        serializer = EventTypeSerializer(eventType, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        eventType = self.get_object(pk)
        eventType.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class EventList(APIView):
    serializer_class = EventSerializer

    def get(self, request):
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EventDetail(APIView):
    serializer_class = EventSerializer

    def get_object(self, pk):
        try:
            return Event.objects.get(id=pk)
        except Event.DoesNotExist:
            return Http404
    
    def get(self, request, pk, format=None):
        event = self.get_object(pk)
        serializer = EventSerializer(event)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        event = self.get_object(pk)
        serializer = EventTypeSerializer(event, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        event = self.get_object(pk)
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# class UserChatList(APIView):
#     serializer_class = EventSerializer

#     def get(self, request):
#         events = Event.objects.all()
#         serializer = EventSerializer(events, many=True)
#         return Response(serializer.data)

#     def post(self, request):
#         serializer = EventSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class UserChatDetail(APIView):
#     serializer_class = UserChatSerializer

#     def get_object(self, pk):
#         try:
#             return UserChat.objects.get(id=pk)
#         except UserChat.DoesNotExist:
#             return Http404
    
#     def get(self, request, pk, format=None):
#         userchat = self.get_object(pk)
#         serializer = UserChatSerializer(userchat)
#         return Response(serializer.data)

#     def put(self, request, pk, format=None):
#         userchat = self.get_object(pk)
#         serializer = UserChatSerializer(userchat, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, pk):
#         userchat = self.get_object(pk)
#         userchat.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

class FavoriteListList(APIView):
    serializer_class = FavoriteListSerializer

    def get(self, request):
        favlist = FavoriteList.objects.all()
        serializer = FavoriteListSerializer(favlist, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = FavoriteListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FavoriteListDetail(APIView):
    serializer_class = FavoriteListSerializer

    def get_object(self, pk):
        try:
            return FavoriteList.objects.get(id=pk)
        except FavoriteList.DoesNotExist:
            return Http404
    
    def get(self, request, pk, format=None):
        favlist = self.get_object(pk)
        serializer = FavoriteListSerializer(favlist)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        favlist = self.get_object(pk)
        serializer = FavoriteListSerializer(favlist, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        favlist = self.get_object(pk)
        favlist.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class UserToEventList(APIView):
    serializer_class = UserToEventSerializer

    def get(self, request):
        usertoevent = UserToEvent.objects.all()
        serializer = UserToEventSerializer(usertoevent, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserToEventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserToEventDetail(APIView):
    serializer_class = UserToEventSerializer

    def get_object(self, pk):
        try:
            return UserToEvent.objects.get(id=pk)
        except UserToEvent.DoesNotExist:
            return Http404
    
    def get(self, request, pk, format=None):
        usertoevent = self.get_object(pk)
        serializer = UserToEventSerializer(usertoevent)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        usertoevent = self.get_object(pk)
        serializer = UserToEventSerializer(usertoevent, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        usertoevent = self.get_object(pk)
        usertoevent.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)