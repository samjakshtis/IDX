from rest_framework import serializers 
from . models import *
  
class WorkingPaperSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = WorkingPapers
        fields = '__all__'