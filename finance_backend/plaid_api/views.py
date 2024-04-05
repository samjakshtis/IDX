from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import WorkingPapers, MoviesModel, PodcastsModel
from .serializers import WorkingPaperSerializer, MoviesSerializer, PodcastSerializer
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.views.generic import View
from django.http import JsonResponse

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

class Podcasts(APIView):

    serializer_class = PodcastSerializer
  
    def get(self, request): 
        details = PodcastsModel.objects.all()
        serializer = self.serializer_class(details, many=True)
        return Response(serializer.data) 
  
    def post(self, request): 
        serializer = self.serializer_class(data=request.data) 
        if serializer.is_valid(raise_exception=True): 
            serializer.save() 
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def contact_form_view(request):
    try:
        # Try loading JSON data
        data = json.loads(request.body)

        # Validate required fields
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        if not all([name, email, message]):
            return JsonResponse({'error': 'Missing required fields'}, status=400)

        # Send email (assuming email configuration is valid)
        send_mail(
            subject='New Contact Form Submission',
            message=f'Name: {name}\nEmail: {email}\nMessage: {message}',
            from_email='sam.jakshtis@gmail.com',  # Replace with your email
            recipient_list=['sam.jakshtis@gmail.com'],  # Replace with your email
            fail_silently=False,
        )

        # Success response
        return JsonResponse({'message': 'Form submitted successfully!'})

    except (json.JSONDecodeError, KeyError) as e:
        # Handle potential JSON parsing errors or missing keys
        print(f'Error processing form data: {e}')
        return JsonResponse({'error': 'Invalid form data'}, status=400)

    except Exception as e:
        # Catch other unexpected errors
        print(f'Unexpected error processing form: {e}')
        return JsonResponse({'error': 'Internal server error'}, status=500)