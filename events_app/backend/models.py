from typing import cast
from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.

class Role(models.Model):
    name = models.CharField(max_length=50)
    class Meta:
        db_table="roles"

class User(models.Model):
    password = models.TextField(null=True)
    email = models.CharField(max_length=50, null=True)
    id_role = models.ForeignKey(Role, on_delete=CASCADE, db_column='id_role', null=True)
    id_rating = models.IntegerField(null=True)
    notifications = models.IntegerField(null=True)
    status = models.CharField(max_length = 20, null=True)
    class Meta:
        db_table="users"

class UserInfo(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    dob = models.DateField()
    about = models.TextField()
    id_user = models.ForeignKey(User, on_delete=CASCADE, db_column='id_user', null=True)
    img_name = models.TextField(null=True)
    facebook = models.TextField(null=True)
    instagram = models.TextField(null=True)
    class Meta:
        db_table="users_info"

class EventType(models.Model):
    name = models.CharField(max_length=100)
    class Meta:
        db_table="event_types"

class Event(models.Model):
    name = models.TextField()
    price = models.FloatField()
    id_organizer = models.ForeignKey(User, on_delete=CASCADE, db_column='id_organizer')
    start_date = models.BigIntegerField()
    end_date = models.BigIntegerField()
    location = models.TextField()
    description = models.TextField()
    id_type = models.ForeignKey(EventType, on_delete=CASCADE, db_column='id_type')
    status = models.CharField(max_length = 50)
    img_name = models.TextField()
    class Meta:
        db_table="events"

# class UserChat(models.Model):
#     id_user1 = models.ForeignKey(User, on_delete=CASCADE)
#     id_user2 = models.ForeignKey(User, on_delete=CASCADE)
#     message = models.TextField()
#     id_sender = models.ForeignKey(User, on_delete=CASCADE)
#     class Meta:
#         db_table="users_chat"

class FavoriteList(models.Model):
    id_user = models.ForeignKey(User, on_delete=CASCADE, db_column='id_user')
    id_event = models.ForeignKey(Event, on_delete=CASCADE, db_column='id_event')
    class Meta:
        db_table="favorite_lists"

class UserToEvent(models.Model):
    id_user = models.ForeignKey(User, on_delete=CASCADE, db_column='id_user')
    id_event = models.ForeignKey(Event, on_delete=CASCADE, db_column='id_event')
    class Meta:
        db_table="users2events"