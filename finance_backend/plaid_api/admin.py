from django.contrib import admin
from .models import WorkingPapers,MoviesModel, PodcastsModel

# Register your models here.
admin.site.register(WorkingPapers)
admin.site.register(MoviesModel)
admin.site.register(PodcastsModel)