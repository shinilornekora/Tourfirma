from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from database import views


# /api/users -- Пользователи, админы манагеры, туроператоры и админы
# /api/tourop -- Заявки клиентов по городу туроператору
# /api/manager -- Заявки туроператора менеджеру гостиницы
# /api/admin -- Гостиницы, добавление редактирование и удаление делает туроператор

router = routers.DefaultRouter()
router.register(r'users', views.UserView, 'database')
router.register(r'tourop', views.tourOperatorView, 'database')
router.register(r'manager', views.managerView, 'database')
router.register(r'admin', views.adminView, 'database')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
