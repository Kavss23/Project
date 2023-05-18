from django.contrib import admin
from .models import RegisteredUsers
from .models import Canteen
from .models import Categories
from .models import ViewProfile
from .models import RegisteredCntnOwners
from .serializers import RegisteredUsersSerializers
from .models import Feedback
from . models import CategoriesUpdated
from . models import TrackCanteenId
from . models import SliderImage
from . serializers import SliderImageSerializers

@admin.register(RegisteredUsers)
class RegisteredUsersAdmin(admin.ModelAdmin):
    list_display=['username','email','pwd','cpwd']

    def clean(self):
        cleaned_data = super().clean()
        title = cleaned_data.get('title')
        if title == 'test':
            raise RegisteredUsersSerializers.ValidationError('invalid!')
        return cleaned_data


@admin.register(RegisteredCntnOwners)
class RegisteredCntnOwnersAdmin(admin.ModelAdmin):
    list_display=['username','c_id','email','pwd','cpwd']

@admin.register(Canteen)
class CanteenAdmin(admin.ModelAdmin):
    list_display=['c_id','c_email','c_name','c_address','c_phoneNo']

@admin.register(Categories)
class CategoriesAdmin(admin.ModelAdmin):
    list_display=['c_id','item_name','item_price']

@admin.register(CategoriesUpdated)
class CategoriesUpdatedAdmin(admin.ModelAdmin):
    list_display=['c_id','item_name','item_price','item_status']

@admin.register(ViewProfile)
class ViewProfileAdmin(admin.ModelAdmin):
    list_display=['username','email']

@admin.register(TrackCanteenId)
class TrackCanteenIdAdmin(admin.ModelAdmin):
    list_display=['c_id']

@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display=['email','rating']

@admin.register(SliderImage)
class SliderImageAdmin(admin.ModelAdmin):
    list_display=['im']