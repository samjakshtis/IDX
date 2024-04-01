from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import WorkingPapers, MoviesModel
from .serializers import WorkingPaperSerializer, MoviesSerializer

class WorkingPaper(APIView):

    serializer_class = WorkingPaperSerializer
  
    def get(self, request): 
        details = WorkingPapers.objects.all()
        serializer = self.serializer_class(details, many=True)
        return Response(serializer.data) 
  
    def post(self, request): 
        serializer = self.serializer_class(data=request.data) 
        if serializer.is_valid(raise_exception=True): 
            serializer.save() 
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Movies(APIView):

    serializer_class = MoviesSerializer
  
    def get(self, request): 
        details = MoviesModel.objects.all()
        serializer = self.serializer_class(details, many=True)
        return Response(serializer.data) 
  
    def post(self, request): 
        serializer = self.serializer_class(data=request.data) 
        if serializer.is_valid(raise_exception=True): 
            serializer.save() 
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)