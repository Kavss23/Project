from rest_framework import serializers
from .models import RegisteredUsers
from .models import Canteen
from .models import Categories
from .models import ViewProfile
from .models import RegisteredCntnOwners
from django.contrib.auth.password_validation import validate_password
from django.core import validators
from . models import TrackCanteenId
from .models import Feedback
from . models import CategoriesUpdated
from . models import SliderImage

class RegisteredUsersSerializers(serializers.Serializer):
    username=serializers.CharField(max_length=100)
    email=serializers.EmailField(max_length=100)
    pwd=serializers.CharField(max_length=100)
    cpwd=serializers.CharField(max_length=100)

    def create(self,validate_data):
        print("Create Method Called")
        return RegisteredUsers.objects.create(**validate_data)
    
    def validate_username(self,value):
        print(value)
        if RegisteredUsers.objects.filter(username=value).exists():
             raise serializers.ValidationError("Username already Exists")
        return value

class SliderImageSerializers(serializers.Serializer):
    im = serializers.ImageField()

    def create(self,validate_data):
        return SliderImage.objects.create(**validate_data)

class RegisteredCntnOwnersSerializers(serializers.Serializer):
    username=serializers.CharField(max_length=100)
    c_id=serializers.IntegerField()
    email=serializers.EmailField(max_length=100)
    pwd=serializers.CharField(max_length=100)
    cpwd=serializers.CharField(max_length=100)

    def create(self,validate_data):
        print("Create Method Called")
        return RegisteredCntnOwners.objects.create(**validate_data)    

class CanteenSerializers(serializers.Serializer):
    c_id=serializers.CharField(max_length=12)
    c_email=serializers.EmailField(max_length=100)
    c_name=serializers.CharField(max_length=100)
    c_address=serializers.CharField(max_length=100)
    c_phoneNo=serializers.CharField(max_length=10)


    def create(Self,validate_data):
        return Canteen.objects.create(**validate_data)

class CategoriesSerializers(serializers.Serializer):
    c_id=serializers.CharField(max_length=12)
    item_name=serializers.CharField(max_length=100)
    item_price=serializers.FloatField()

    def create(Self,validate_data):
        return Categories.objects.create(**validate_data)
    
class CategoriesUpdatedSerializers(serializers.Serializer):
    c_id=serializers.CharField(max_length=12)
    item_name=serializers.CharField(max_length=100)
    item_price=serializers.FloatField()
    item_status=serializers.CharField(max_length=10)

    def create(Self,validate_data):
        return CategoriesUpdated.objects.create(**validate_data)

class ViewProfileSerializers(serializers.Serializer):
    username=serializers.CharField(max_length=100)
    email=serializers.EmailField(max_length=100)

    def create(self,validate_data):
        return ViewProfile.objects.create(**validate_data)
    
class TrackCanteenIdSerializer(serializers.Serializer):
    c_id=serializers.IntegerField()

    def create(self,validate_data):
        return TrackCanteenId.objects.create(**validate_data)
    
class FeedbackSerializers(serializers.Serializer):
    email=serializers.EmailField(max_length=100)
    rating=serializers.CharField(max_length=5)

    def create(self,validate_data):
        return Feedback.objects.create(**validate_data)