from django.db import models
from simplejson import *
# Create your models here.


class User(models.Model):
	login = models.CharField(max_length=120)
	password = models.CharField(max_length=120)
	username = models.CharField(max_length=120)
	email = models.EmailField(max_length=120)
	date = models.DateTimeField(max_length=6)
	beneficiary = models.CharField(max_length=120)
	benefit = models.CharField(max_length=120)
	benefitDate = models.DateTimeField(max_length=6)
	role = models.CharField(max_length=6)

	def __str__(self):
		return self.username


class tourOperator(models.Model):
	city = models.CharField(max_length=120)
	client = models.CharField(max_length=120)

	def __str__(self):
		return self.login


class manager(models.Model):
	hotelName = models.CharField(max_length=120)
	tourop = models.CharField(max_length=120)

	def __str__(self):
		return self.login


class Admin(models.Model):
	hotelName = models.CharField(max_length=120)
	quantityFree = models.CharField(max_length=120)

	def __str__(self):
		return self.login