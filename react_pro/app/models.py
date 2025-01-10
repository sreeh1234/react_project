from django.db import models

# Create your models here.

class Student(models.Model):
    roll_no=models.IntegerField()
    name=models.TextField()
    course=models.TextField()
    email=models.EmailField()
