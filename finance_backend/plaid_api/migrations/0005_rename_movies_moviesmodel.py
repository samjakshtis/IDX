# Generated by Django 4.1.3 on 2024-04-01 19:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('plaid_api', '0004_movies_alter_workingpapers_abstract_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Movies',
            new_name='MoviesModel',
        ),
    ]