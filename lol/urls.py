from django.urls import path 
from . import views
app_name='lol'
urlpatterns=[
    path('',views.home,name="home")
]