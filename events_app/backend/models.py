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
    id_role = models.ForeignKey(Role, on_delete=CASCADE, db_column='id_role')
    id_user_info = models.ForeignKey(UserInfo, on_delete=CASCADE, db_column='id_user_info')
    id_rating = models.IntegerField(null=True)
    notifications = models.IntegerField(null=True)
    class Meta:
        db_table="users"
    def __str__(self):
        return self.email

class EventType(models.Model):
    name = models.CharField(max_length=100)
    class Meta:
        db_table="event_types"
    def __str__(self):
        return self.name

class Event(models.Model):
    name = models.TextField()
    id_organizer = models.ForeignKey(User, on_delete=CASCADE, db_column='id_organizer')
    start_date = models.BigIntegerField()
    end_date = models.BigIntegerField()
    location = models.TextField()
    description = models.TextField()
    id_type = models.ForeignKey(EventType, on_delete=CASCADE, db_column='id_type')
    status = models.CharField(max_length = 50)
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
    id_user = models.ForeignKey(User, on_delete=CASCADE, db_column='id_user')
    id_event = models.ForeignKey(Event, on_delete=CASCADE, db_column='id_event')
    class Meta:
        db_table="favorite_lists"
    def __str__(self):
        return str(self.id_user)

class UserToEvent(models.Model):
    id_user = models.ForeignKey(User, on_delete=CASCADE, db_column='id_user')
    id_event = models.ForeignKey(Event, on_delete=CASCADE, db_column='id_event')
    stars = models.FloatField()
    description = models.TextField()
    class Meta:
        db_table="users2events"
    def __str__(self):
        return str(self.id_user)