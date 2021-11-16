from django.contrib import admin
from django.contrib.auth.models import User
from .models import *

# Register your models here.

admin.site.register(UserInfo)
admin.site.register(Role)
admin.site.register(User)
admin.site.register(EventType)
admin.site.register(Event)
# admin.site.register(UserChat)
admin.site.register(FavoriteList)
admin.site.register(UserToEvent)