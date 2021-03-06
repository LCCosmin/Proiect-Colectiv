import re
from rest_framework import viewsets
from django.http.response import Http404
from django.shortcuts import render
from rest_framework.parsers import JSONParser
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *

from django.contrib.auth.hashers import check_password, make_password

from .models import *
from rest_framework import status
import json
# import datetime
import os
import uuid
import pathlib
from datetime import datetime
from django.db import connection
pathlib.Path('images').mkdir(parents=True, exist_ok=True) 



# Create your views here.

@api_view(['PUT'])
def manageButtonsOrganizers(request):
    if request.method == 'PUT':
        data = JSONParser().parse(request)
        org = User.objects.all()
        orgToUpdate = 0
        for orga in org:
            if orga.id == data['id']:
                orgToUpdate = orga
        serializer = UserSerializer(orgToUpdate,data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':True})
        else:
            return Response({'data':False})
    # Should never come here
    print("Never here na!")
    return Response({'data': False})

@api_view(['PUT'])
def manageButtonsEvents(request):
    if request.method == 'PUT':
        data = JSONParser().parse(request)
        events = Event.objects.all()
        eventToUpdate = 0
        for event in events:
            if event.id == data['id']:
                eventToUpdate = event
        serializer = EventSerializer(eventToUpdate,data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':True})
        else:
            return Response({'data':False})
    # Should never come here
    print("Never here na!")
    return Response({'data': False})

@api_view(['POST'])
def signin(request):
    if request.method == 'POST':
        data =  JSONParser().parse(request)
        try:
            user = User.objects.get(email = data["email"])
            return Response({'exists':False})
        except User.DoesNotExist:
            data['password'] = make_password(data['password']) 
            serializer = UserSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response({'exists':True})
            else:
                return Response({'exists':False})

@api_view(['POST'])
def login(request):
    data =  JSONParser().parse(request)
    if request.method == "POST":
        try:
            user = User.objects.get(email = data["email"])
            if(check_password(data['password'], user.password)):
                a = str(getattr(user, 'id_role'))
                try:
                    user_info = UserInfo.objects.get(id_user = getattr(user, 'id'))
                    return Response({'role': int(a[13]), 'id': getattr(user, 'id'), 'user_info': True})
                except UserInfo.DoesNotExist:
                    return Response({'role': int(a[13]), 'id': getattr(user, 'id'), 'user_info': False})
            else:
                return Response({'role':0, 'id':0})
        except User.DoesNotExist:
            return Response({'role':0, 'id':0})

@api_view(['POST'])
def addevent(request):
    if request.method == "POST":
        start_date = request.data['start_date']
        date = datetime.strptime(start_date, '%Y-%m-%dT%H:%M')
        timestamp = int(datetime.timestamp(date))
        request.data['start_date'] = timestamp

        end_date = request.data['end_date']
        date = datetime.strptime(end_date, '%Y-%m-%dT%H:%M')
        timestamp = int(datetime.timestamp(date))
        request.data['end_date'] = timestamp
        serializer = EventSerializer(data=request.data)
        data = request.data
        if serializer.is_valid():
            serializer.save()
            return Response({'added':request.data['img_name']}, status=status.HTTP_201_CREATED)
        else:
            print(serializer.initial_data)
            print(serializer.errors)
            return Response({'added':False}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def updatepersonaldata(request):
    if request.method == "POST":
        try:
            user_info = UserInfo.objects.get(id_user=request.data['id_user'])
            user_info.first_name = request.data['first_name']
            user_info.last_name = request.data['last_name']
            user_info.about = request.data['about']
            user_info.dob = request.data['dob']
            user_info.img_name = request.data['img_name']
            user_info.facebook = request.data['facebook']
            user_info.instagram = request.data['instagram']
            extension = '.' + user_info.img_name;
            user_info.img_name = str(uuid.uuid4()) + extension
            user_info.save()
            return Response({'updated':user_info.img_name})
        except UserInfo.DoesNotExist:
            extension = '.' + request.data['img_name']
            request.data['img_name'] = str(uuid.uuid4()) + extension
            serializer = UserInfoSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'updated':request.data['img_name']}, status=status.HTTP_201_CREATED)
            else:
                print(serializer.initial_data)
                print(serializer.errors)
                return Response({'updated':False}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def getpersonaldata(request):
    data = JSONParser().parse(request)
    if request.method == "POST":
        try:
            userinfo = UserInfo.objects.get(id_user = data["id_user"])
            return Response({"exists": True, "first_name":getattr(userinfo, 'first_name'), "last_name": getattr(userinfo, 'last_name'), "dob": getattr(userinfo, 'dob'), "about": getattr(userinfo, 'about'), "img_name": getattr(userinfo, 'img_name'), "facebook": getattr(userinfo, 'facebook'), "instagram": getattr(userinfo, 'instagram')})
        except UserInfo.DoesNotExist:
            return Response({"exists":False})

@api_view(['POST'])
def usergoingtoevent(request):
    if request.method == "POST":
        serializer = UserToEventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'ok':True, 'id': request.data['id_event']}, status=status.HTTP_201_CREATED)
        else:
            return Response({'ok':False}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def usersinterested(request):
    data = JSONParser().parse(request)
    if request.method == "POST":
        count = UserToEvent.objects.filter(id_event=data['id']).count()
        return Response({'no_users': count})



@api_view(['GET'])
def getevents(request):
    if request.method == "GET":
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def geteventsaccepted(request):
    if request.method == "GET":
        events = Event.objects.all().filter(status = "accepted")
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def geteventspending(request):
    if request.method == "GET":
        events = Event.objects.all().filter(status = "pending")
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def getorganisers(request):
    if request.method == "GET":
        organisers = User.objects.all().filter(id_role = 2, status = "pending")
        serializer = UserSerializer(organisers, many=True)
        return Response(serializer.data)

@api_view(['POST'])
def geteventdetails(request):
    if request.method == "POST":
        data =  JSONParser().parse(request)
        event = Event.objects.get(pk= data['id'])
        response = {'name': event.name, 'price': event.price, 'location': event.location, 'description': event.description, 'img': event.img_name};
        datetime_obj = datetime.fromtimestamp(event.start_date)
        response['date'] = datetime_obj.strftime('%d/%m/%Y')
        response['time'] = datetime_obj.strftime('%H:%M');
        return Response(response)

@api_view(['POST'])
def uploadimage(request):
    data = {"success": False}
    if request.method == "POST":
        if request.FILES.get("image", None) is not None:
            #So this would be the logic
            img = request.FILES["image"]
            print(img)
            img_extension = os.path.splitext(img.name)[1]
            #print(os.path.splitext(img.name)[0])
            # This will generate random folder for saving your image using UUID
            save_path = "frontend/public/images"
            # if not os.path.exists(save_path):
            #     # This will ensure that the path is created properly and will raise exception if the directory already exists
            #     print(os.makedirs(os.path.dirname(save_path), exist_ok=True))

            # Create image save path with title
            img_save_path = "%s/%s%s" % (save_path, os.path.splitext(img.name)[0], '')
            #print(img_save_path)
            with open(img_save_path, "wb+") as f:
                for chunk in img.chunks():
                    f.write(chunk)
            data = {"success": True}
        else:
            return JsonResponse(data)
    return JsonResponse(data)

@api_view(['GET'])
def geteventtypes(request):
    if request.method == "GET":
        events = EventType.objects.all()
        serializer = EventTypeSerializer(events, many=True)
        return Response(serializer.data)


@api_view(['POST'])
def getparticipantslist(request):
    data = JSONParser().parse(request)
    if request.method == "POST":
        cursor = connection.cursor()
        cursor.execute("select * from users2events inner join users_info on users_info.id_user = users2events.id_user where id_event = " + data['id'])
        results = cursor.fetchall()
        participants = []
        for r in results:
            p = {}
            p['id'] = r[1];
            p['first_name'] = r[4]
            p['last_name'] = r[5]
            p['img_name'] = r[9];
            p['about'] = r[7];
            participants.append(p)
        return Response({'participants': participants})

@api_view(['POST'])
def getusersofevent(request):
    data = JSONParser().parse(request)
    if request.method == "POST":
        cursor = connection.cursor()
        cursor.execute("select * from events inner join users2events on events.id = users2events.id_event where id_user =" + data['id'])
        results = cursor.fetchall()
        events = []
        for r in results:
            e = {}
            e['id'] = r[0];
            e['name'] = r[1]
            e['description'] = r[7]
            e['img_name'] = r[10]
            events.append(e)
        return Response({'events': events})

@api_view(['POST'])
def getuserinfo(request):
    data = JSONParser().parse(request)
    if request.method == "POST":
        user = UserInfo.objects.get(id_user = data['id'])
        serializer = UserInfoSerializer(user)
        return Response(serializer.data)

# @api_view(['POST'])
# def stopgoingtoevent(request):
#     data = JSONParser().parse(request)
#     if request.method == "POST":
#         print(data)
#         UserToEvent.objects.filter(id_event=data['id_event'], id_user=data['id_user']).delete()
#         return Response({'ok': True})