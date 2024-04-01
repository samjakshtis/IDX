from django.urls import path

from .views import *

urlpatterns = [
    path('working-paper', WorkingPaper.as_view(), name='working-paper'),
    path('movies', Movies.as_view(), name='movies'),
    ]