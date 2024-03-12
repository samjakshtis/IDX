from django.urls import path

from . import views

urlpatterns = [
    path('', views.plaid_link_view, name='plaid_link'),
    path('create_link_token/', views.plaid_link_token_create, name='create_link_token'),
]