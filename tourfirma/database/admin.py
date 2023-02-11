from django.contrib import admin
from .models import Admin

class databaseAdmin(admin.ModelAdmin):
    list_display = ('id', 'hotelName', 'quantityFree')

# Register your models here.

admin.site.register(Admin, databaseAdmin)
