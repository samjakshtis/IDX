# Generated by Django 4.1.3 on 2024-03-23 15:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plaid_api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='WorkingPapers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Title', models.CharField(max_length=50)),
                ('Authors', models.CharField(max_length=500)),
                ('Abstract', models.CharField(max_length=1000)),
            ],
        ),
        migrations.DeleteModel(
            name='PlaidItem',
        ),
    ]
