




from django.shortcuts import render
from . models import RegisteredUsers
from .serializers import RegisteredUsersSerializers
from . models import Canteen
from . models import RegisteredCntnOwners
from . serializers import CanteenSerializers
from . models import Categories
from . serializers import CategoriesSerializers
from . models import ViewProfile
from . serializers import ViewProfileSerializers
from . models import Feedback
from . serializers import FeedbackSerializers
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse
import io
from . models import SliderImage
from . serializers import SliderImageSerializers
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
import json
from . serializers import RegisteredCntnOwnersSerializers
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
import googlemaps
# # Create your views here.
from . models import TrackCanteenId
from . serializers import TrackCanteenIdSerializer
from django.shortcuts import render
from . models import RegisteredUsers
from .serializers import RegisteredUsersSerializers
from . models import Canteen
from . models import RegisteredCntnOwners
from . serializers import CanteenSerializers
from . models import Categories
from . serializers import CategoriesSerializers
from . models import CategoriesUpdated
from . serializers import CategoriesUpdatedSerializers
from . models import ViewProfile
from . serializers import ViewProfileSerializers
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse
import io
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
import json
from . serializers import RegisteredCntnOwnersSerializers
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

@csrf_exempt
def usersDetail(request):
    many=True
    if request.method=='GET':
        regusers=RegisteredUsers.objects.all()
        serializer=RegisteredUsersSerializers(regusers,many=True)
        json_data=JSONRenderer().render(serializer.data)
        return HttpResponse(json_data,content_type='application/json')
        
    if request.method=='POST':
        jsonData=JSONParser().parse(request)
        serializer=RegisteredUsersSerializers(data=jsonData)
        # print(jsonData)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        else:
            return JsonResponse(serializer.errors)

@csrf_exempt
def cntnOwnersDetail(request):
    many=True
    if request.method=='GET':
        regowners=RegisteredCntnOwners.objects.all()
        serializer=RegisteredCntnOwnersSerializers(regowners,many=True)
        json_data=JSONRenderer().render(serializer.data)
        return HttpResponse(json_data,content_type='application/json')
        
    if request.method=='POST':
        jsonData=JSONParser().parse(request)
        serializer=RegisteredCntnOwnersSerializers(data=jsonData)
        # print(jsonData)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        else:
            return JsonResponse(serializer.errors)
        
def post(request):
    # current_location = request.data.get('current_location')
    # destination = request.data.get('destination')
    current_location='ShantaPuri'
    destination='Shanus'  
        # Initialize the Google Maps client
    gmaps = googlemaps.Client(key=settings.GOOGLE_MAPS_API_KEY)
        
        # Get the route between the two points
    directions_result = gmaps.directions(current_location, destination, mode="driving")
        
        # Parse the route information and return it as JSON
    route = []
    for leg in directions_result[0]['legs']:
        for step in leg['steps']:
            route.append(step['html_instructions'])
    return Response({'route': route})

@csrf_exempt
def canteenDetail(request):
    many=True
    if request.method=='GET':
        can=Canteen.objects.all()
        serializer=CanteenSerializers(can,many=True)
        json_data=JSONRenderer().render(serializer.data)
        return HttpResponse(json_data,content_type='application/json')

    if request.method=='POST':
        jsonData=JSONParser().parse(request)
        serializer=CanteenSerializers(data=jsonData)
        # print(jsonData)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        else:
            return JsonResponse(serializer.errors)

def SliderImageAdmin(request):
    many=True
    if request.method=='GET':
        catDetail=SliderImage.objects.all()
        serializer=SliderImageSerializers(catDetail,many=True)
        x={'data':serializer.data}
        json_data=JSONRenderer().render(serializer.data)
        return HttpResponse(json_data,content_type='application/json')

@csrf_exempt
def categoriesDetail(request):
    many=True
    if request.method=='GET':
        catDetail=Categories.objects.all()
        serializer=CategoriesSerializers(catDetail,many=True)
        x={'data':serializer.data}
        return JsonResponse(x)
        # json_data=JSONRenderer().render(serializer.data)
        # return HttpResponse(json_data,content_type='application/json')
        # return (json_data,content_type='application/json')


    if request.method=='POST':
        jsonData=JSONParser().parse(request)
        serializer=CategoriesSerializers(data=jsonData)
        catDetail=Categories.objects.all()
        serial=CategoriesSerializers(catDetail,many=True)
        if serializer.is_valid():
            serializer.save()
            x={'data':serial.data}
            return JsonResponse(x)
        else:
            return JsonResponse(serializer.errors)
        
        
    if request.method=='DELETE':
        received_json_data=json.loads(request.body)
        # c_id=received_json_data['c_id']
        item_name=received_json_data['item_name']
        print(item_name)
        catDetail=Categories.objects.filter(item_name=item_name)
        serializer=CategoriesSerializers(catDetail,many=True)
        
        catDetail.delete()
        json_data=JSONRenderer().render(serializer.data)
        return HttpResponse(json_data,content_type='application/json')
        
    
    if request.method=='PUT':
        #  catDetail=Categories.objects.get(id)
        received_json_data=json.loads(request.body)
        
        item_price=received_json_data['item_price']
        item_name=received_json_data['item_name']
        
        catDetail=Categories.objects.filter(item_name=item_name).update(item_price=item_price)

        
        serializer=CategoriesSerializers(data=catDetail)
        if serializer.is_valid():
            serializer.save()
            
            return JsonResponse(serializer.errors)
            # return JsonResponse(serializer.errors)
        # catDetail=Categories.objects.all()
        # serial=CategoriesSerializers(catDetail,many=True)
        # x={'data':serial.data}
        json_data=JSONRenderer().render(serializer.data)
        return HttpResponse(json_data,content_type='application/json')
      


@csrf_exempt
def categoriesUpdatedDetail(request):
    many=True
    if request.method=='GET':
        catDetail=CategoriesUpdated.objects.all()
        serializer=CategoriesUpdatedSerializers(catDetail,many=True)
        x={'data':serializer.data}
        return JsonResponse(x)


    if request.method=='POST':
        jsonData=JSONParser().parse(request)
        serializer=CategoriesUpdatedSerializers(data=jsonData)
        catDetail=CategoriesUpdated.objects.all()
        serial=CategoriesUpdatedSerializers(catDetail,many=True)
        if serializer.is_valid():
            serializer.save()
            x={'data':serial.data}
            return JsonResponse(x)
        else:
            return JsonResponse(serializer.errors)
        
        
    if request.method=='DELETE':
        received_json_data=json.loads(request.body)
        item_name=received_json_data['item_name']
        c_id=received_json_data['c_id']
        print(c_id)
        print(item_name)
        # catDetail=CategoriesUpdated.objects.filter(item_name=item_name)
        catDetail=CategoriesUpdated.objects.filter(item_name=item_name,c_id=c_id) 
        serializer=CategoriesUpdatedSerializers(catDetail,many=True)
        
        catDetail.delete()
        json_data=JSONRenderer().render(serializer.data)
        return HttpResponse(json_data,content_type='application/json')
        
    
    if request.method=='PUT':
        #  catDetail=Categories.objects.get(id)
        received_json_data=json.loads(request.body)
        
        item_price=received_json_data['item_price']
        item_name=received_json_data['item_name']
        item_status=received_json_data['item_status']
        catDetail=CategoriesUpdated.objects.filter(item_name=item_name).update(item_price=item_price,item_status=item_status)

        
        serializer=CategoriesUpdatedSerializers(data=catDetail)
        if serializer.is_valid():
            serializer.save()
            
            return JsonResponse(serializer.errors)
        json_data=JSONRenderer().render(serializer.data)
        return HttpResponse(json_data,content_type='application/json')

@csrf_exempt       
def viewProfileDetail(request):
    many=True
    if request.method=='GET':
        vpDetail=ViewProfile.objects.all()
        serializer=ViewProfileSerializers(vpDetail,many=True)
        json_data=JSONRenderer().render(serializer.data)
        return HttpResponse(json_data,content_type='application/json')
        
    if request.method=='POST':
        jsonData=JSONParser().parse(request)
        serializer=ViewProfileSerializers(data=jsonData)
        # print(jsonData)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        else:
            return JsonResponse(serializer.errors)

@csrf_exempt       
def trackIdDetail(request):
    many=True
    if request.method=='GET':
        vpDetail=TrackCanteenId.objects.all()
        serializer=TrackCanteenIdSerializer(vpDetail,many=True)
        json_data=JSONRenderer().render(serializer.data)
        return HttpResponse(json_data,content_type='application/json')
        
    if request.method=='POST':
        jsonData=JSONParser().parse(request)
        serializer=TrackCanteenIdSerializer(data=jsonData)
        # print(jsonData)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        else:
            return JsonResponse(serializer.errors)


# @csrf_exempt
# def usersDetail(request):
#     many=True
#     if request.method=='GET':
#         regusers=RegisteredUsers.objects.all()
#         serializer=RegisteredUsersSerializers(regusers,many=True)
#         json_data=JSONRenderer().render(serializer.data)
#         return HttpResponse(json_data,content_type='application/json')
        
#     if request.method=='POST':
#         jsonData=JSONParser().parse(request)
#         serializer=RegisteredUsersSerializers(data=jsonData)
#         # print(jsonData)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data)
#         else:
#             return JsonResponse(serializer.errors)

# @csrf_exempt
# def cntnOwnersDetail(request):
#     many=True
#     if request.method=='GET':
#         regowners=RegisteredCntnOwners.objects.all()
#         serializer=RegisteredCntnOwnersSerializers(regowners,many=True)
#         json_data=JSONRenderer().render(serializer.data)
#         return HttpResponse(json_data,content_type='application/json')
        
#     if request.method=='POST':
#         jsonData=JSONParser().parse(request)
#         serializer=RegisteredCntnOwnersSerializers(data=jsonData)
#         # print(jsonData)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data)
#         else:
#             return JsonResponse(serializer.errors)
        
# def post(request):
#     # current_location = request.data.get('current_location')
#     # destination = request.data.get('destination')
#     current_location='ShantaPuri'
#     destination='Shanus'  
#         # Initialize the Google Maps client
#     gmaps = googlemaps.Client(key=settings.GOOGLE_MAPS_API_KEY)
        
#         # Get the route between the two points
#     directions_result = gmaps.directions(current_location, destination, mode="driving")
        
#         # Parse the route information and return it as JSON
#     route = []
#     for leg in directions_result[0]['legs']:
#         for step in leg['steps']:
#             route.append(step['html_instructions'])
#     return Response({'route': route})

# def canteenDetail(request):
#     many=True
#     if request.method=='GET':
#         can=Canteen.objects.all()
#         serializer=CanteenSerializers(can,many=True)
#         json_data=JSONRenderer().render(serializer.data)
#         return HttpResponse(json_data,content_type='application/json')

#     if request.method=='POST':
#         jsonData=JSONParser().parse(request)
#         serializer=CanteenSerializers(data=jsonData)
#         if serializer.is_valid():
#             serializer.save()
#             return JSONRenderer(serializer.data)
#         else:
#             return JSONRenderer(serializer.errors)

# @csrf_exempt
# def categoriesDetail(request):
#     many=True
#     if request.method=='GET':
#         catDetail=Categories.objects.all()
#         serializer=CategoriesSerializers(catDetail,many=True)
#         x={'data':serializer.data}
#         return JsonResponse(x)
#         # json_data=JSONRenderer().render(serializer.data)
#         # return HttpResponse(json_data,content_type='application/json')
#         # return (json_data,content_type='application/json')


#     if request.method=='POST':
#         jsonData=JSONParser().parse(request)
#         serializer=CategoriesSerializers(data=jsonData)
#         catDetail=Categories.objects.all()
#         serial=CategoriesSerializers(catDetail,many=True)
#         if serializer.is_valid():
#             serializer.save()
#             x={'data':serial.data}
#             return JsonResponse(x)
#         else:
#             return JsonResponse(serializer.errors)
        
        
#     if request.method=='DELETE':
#         received_json_data=json.loads(request.body)
#         # c_id=received_json_data['c_id']
#         item_name=received_json_data['item_name']
#         print(item_name)
#         catDetail=Categories.objects.filter(item_name=item_name)
#         serializer=CategoriesSerializers(catDetail,many=True)
        
#         catDetail.delete()
#         json_data=JSONRenderer().render(serializer.data)
#         return HttpResponse(json_data,content_type='application/json')
        
    
#     if request.method=='PUT':
#         #  catDetail=Categories.objects.get(id)
#         received_json_data=json.loads(request.body)
        
#         item_price=received_json_data['item_price']
#         item_name=received_json_data['item_name']
        
#         catDetail=Categories.objects.filter(item_name=item_name).update(item_price=item_price)

        
#         serializer=CategoriesSerializers(data=catDetail)
#         if serializer.is_valid():
#             serializer.save()
            
#             return JsonResponse(serializer.errors)
#             # return JsonResponse(serializer.errors)
#         # catDetail=Categories.objects.all()
#         # serial=CategoriesSerializers(catDetail,many=True)
#         # x={'data':serial.data}
#         json_data=JSONRenderer().render(serializer.data)
#         return HttpResponse(json_data,content_type='application/json')
      


# # @csrf_exempt
# # def categoriesDetail(request):
# #     many=True
# #     if request.method=='GET':
# #         catDetail=Categories.objects.all()
# #         serializer=CategoriesSerializers(catDetail,many=True)
# #         json_data=JSONRenderer().render(serializer.data)
# #         return HttpResponse(json_data,content_type='application/json')

# #     if request.method=='POST':
# #         jsonData=JSONParser().parse(request)
# #         serializer=CategoriesSerializers(data=jsonData)
# #         if serializer.is_valid():
# #             serializer.save()
# #             return JsonResponse(serializer.data)
# #         else:
# #             return JsonResponse(serializer.errors)
        
# #     if request.method=='DELETE':
# #         print(request)
# #         canDetail=Categories.objects.all()
# #         serializer=CategoriesSerializers(canDetail,many=True)
# #         canDetail.delete()
# #     json_data=JSONRenderer().render(serializer.data)
# #     return HttpResponse(json_data,content_type='application/json')
    
#     # def delete(self,request,c_id):
#     #     catDetail = Categories.objects.get(c_id)
#     #     serializer=CategoriesSerializers(catDetail,many=True)
#     #     catDetail.delete()
#     # json_data=JSONRenderer().render(serializer.data)
#     # return HttpResponse(json_data,content_type='application/json')

# @csrf_exempt       
# def viewProfileDetail(request):
#     many=True
#     if request.method=='GET':
#         vpDetail=ViewProfile.objects.all()
#         serializer=ViewProfileSerializers(vpDetail,many=True)
#         json_data=JSONRenderer().render(serializer.data)
#         return HttpResponse(json_data,content_type='application/json')
        
#     if request.method=='POST':
#         jsonData=JSONParser().parse(request)
#         serializer=ViewProfileSerializers(data=jsonData)
#         # print(jsonData)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data)
#         else:
#             return JsonResponse(serializer.errors)
        
@csrf_exempt
def feedbackDetail(request):
    many=True
    if request.method=='GET':
        feedDetail=Feedback.objects.all()
        serializer=FeedbackSerializers(feedDetail,many=True)
        json_data=JSONRenderer().render(serializer.data)
        return HttpResponse(json_data,content_type='application/json')

    if request.method=='POST':
        jsonData=JSONParser().parse(request)
        serializer=FeedbackSerializers(data=jsonData)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        else:
            return JsonResponse(serializer.errors)

