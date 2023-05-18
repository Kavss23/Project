from django.contrib import admin
from django.urls import path
from application import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('userDetails/',views.usersDetail),
    path('canteenDetail/',views.canteenDetail),
    path('categoriesDetail/',views.categoriesDetail),
    path('viewProfile/',views.viewProfileDetail),
    path('cntnOwnerDetail/',views.cntnOwnersDetail),
    path('route/',views.post),
    path('feedback/',views.feedbackDetail),
    path('categoriesUpdated/',views.categoriesUpdatedDetail),
    path('trackId/',views.trackIdDetail),
     path('im/',views.SliderImageAdmin),
    # path('restaurants/',views.restaurantsDetails)
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)