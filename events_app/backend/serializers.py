from rest_framework import serializers
from . models import *

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInfo
        fields = '__all__'

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class EventTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventType
        fields = '__all__'

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

# class UserChatSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserChat
#         fields = '__all__'

class FavoriteListSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteList
        fields = '__all__'

class UserToEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserToEvent
        fields = '__all__'