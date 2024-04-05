from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone 


class WorkingPapers(models.Model):
    title = models.CharField(max_length=500)
    authors = models.CharField(max_length=500)
    abstract = models.CharField(max_length=10000)
    paper_url = models.URLField()  # Store the URL of the working paper
    date_entered = models.DateField(default=timezone.now)

    def __str__(self):
        return self.title

class MoviesModel(models.Model):
    title = models.CharField(max_length=500)
    rating = models.FloatField()
    movie_url = models.URLField()
    date_entered = models.DateField(default=timezone.now)

    def __str__(self):
        return self.title

class PodcastsModel(models.Model):
    title = models.CharField(max_length=500)
    About = models.CharField(max_length=500)
    podcast_url = models.URLField()

    def __str__(self):
        return self.title
    

