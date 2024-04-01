from rest_framework import serializers 
from . models import *
  
class WorkingPaperSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = WorkingPapers
        fields = '__all__'

class MoviesSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = MoviesModel
        fields = '__all__'