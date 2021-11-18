from typing import cast
from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.
class UserInfo(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    dob = models.DateField()
    about = models.TextField()
    class Meta:
        db_table="users_info"
    def __str__(self):
        return self.first_name + ' ' + self.last_name

class Role(models.Model):
    name = models.CharField(max_length=50)
    class Meta:
        db_table="roles"
    def __str__(self):
        return self.name

class User(models.Model):
    username = models.CharField(max_length=50, null=True)
    password = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    role = models.ForeignKey(Role, on_delete=CASCADE, null=True)
    user_info = models.ForeignKey(UserInfo, on_delete=CASCADE, null=True)
    id_rating = models.IntegerField(null=True)
    notifications = models.IntegerField(null=True)
    class Meta:
        db_table="users"
    def __str__(self):
        return self.username

class EventType(models.Model):
    name = models.CharField(max_length=100)
    class Meta:
        db_table="event_types"
    def __str__(self):
        return self.name

class Event(models.Model):
    name = models.TextField()
    organizer = models.ForeignKey(User, on_delete=CASCADE)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    location = models.TextField()
    type = models.ForeignKey(EventType, on_delete=CASCADE)
    class Meta:
        db_table="events"
    def __str__(self):
        return self.name

# class UserChat(models.Model):
#     id_user1 = models.ForeignKey(User, on_delete=CASCADE)
#     id_user2 = models.ForeignKey(User, on_delete=CASCADE)
#     message = models.TextField()
#     id_sender = models.ForeignKey(User, on_delete=CASCADE)
#     class Meta:
#         db_table="users_chat"
#     def __str__(self):
#         return

class FavoriteList(models.Model):
    user = models.ForeignKey(User, on_delete=CASCADE)
    event = models.ForeignKey(Event, on_delete=CASCADE)
    class Meta:
        db_table="favorite_lists"
    def __str__(self):
        return

class UserToEvent(models.Model):
    user = models.ForeignKey(User, on_delete=CASCADE)
    event = models.ForeignKey(Event, on_delete=CASCADE)
    stars = models.FloatField()
    description = models.TextField()
    class Meta:
        db_table="users_to_events"
    def __str__(self):
        return