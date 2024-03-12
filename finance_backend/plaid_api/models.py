from django.db import models
from django.contrib.auth.models import User

class PlaidItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    access_token = models.CharField(max_length=255)
    item_id = models.CharField(max_length=255)
    institution_id = models.CharField(max_length=255)
    # Add more fields as needed

    def __str__(self):
        return self.item_id
