from django.db import models

class RegisteredUsers(models.Model):
    username=models.CharField(max_length=100)
    email=models.EmailField(max_length=100)
    pwd=models.CharField(max_length=100)
    cpwd=models.CharField(max_length=100)

class RegisteredCntnOwners(models.Model):
    username=models.CharField(max_length=100)
    c_id=models.IntegerField()
    email=models.EmailField(max_length=100)
    pwd=models.CharField(max_length=100)
    cpwd=models.CharField(max_length=100)

class Canteen(models.Model):
    c_id=models.CharField(max_length=12)
    c_email=models.EmailField(max_length=100)
    c_name=models.CharField(max_length=100)
    c_address=models.CharField(max_length=100)
    c_phoneNo=models.CharField(max_length=10)
   

class Categories(models.Model):
    c_id=models.CharField(max_length=12)
    item_name=models.CharField(max_length=100)
    item_price=models.FloatField(max_length=5)

class CategoriesUpdated(models.Model):
    c_id=models.CharField(max_length=12)
    item_name=models.CharField(max_length=100)
    item_price=models.FloatField(max_length=5)
    item_status=models.CharField(max_length=10)

class ViewProfile(models.Model):
    username=models.CharField(max_length=100)
    email=models.EmailField(max_length=100)

class TrackCanteenId(models.Model):
    c_id=models.IntegerField()

class Feedback(models.Model):
    email=models.EmailField(max_length=100)
    rating=models.CharField(max_length=5)

class SliderImage(models.Model):
    im = models.ImageField(null=True,blank=True,upload_to="images/")