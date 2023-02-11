from django.shortcuts import render
from rest_framework import viewsets
from .serializers import * 
from .models import * 

# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class tourOperatorView(viewsets.ModelViewSet):
    serializer_class = tourOperatorSerializer
    queryset = tourOperator.objects.all()


class managerView(viewsets.ModelViewSet):
    serializer_class = managerSerializer
    queryset = manager.objects.all()


class adminView(viewsets.ModelViewSet):
    serializer_class = adminSerializer
    queryset = Admin.objects.all()