from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'login', 'password', 'username', 'email', 'date', 'beneficiary', 'benefit', 'benefitDate' )

class tourOperatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = tourOperator
        fields = ('id', 'city', 'client')

class managerSerializer(serializers.ModelSerializer):
    class Meta:
        model = manager
        fields = ('id', 'hotelName', 'tourop')

class adminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ('id', 'hotelName', 'quantityFree')