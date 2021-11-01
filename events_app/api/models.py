from django.db import models

# Create your models here.
class UserData(models.Model):
    first_name = models.CharField(max_length=50, default='')
    last_name = models.CharField(max_length=50, default='')
    username = models.CharField(max_length=50, default='')
    email = models.CharField(max_length=100, default='')
