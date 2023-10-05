from django.urls import path
from . import views

app_name = 'exemplo'

urlpatterns = [
    path('',views.ClienteList.as_view(), name='cliente_list')
]
