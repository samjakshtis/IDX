from django.db import models
from django.contrib.auth.models import User

class WorkingPapers(models.Model):
    Title = models.CharField(max_length=50) 
    Authors = models.CharField(max_length=500)
    Abstract = models.CharField(max_length=1000)
