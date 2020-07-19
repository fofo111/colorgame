from django.urls import path 
from . import views 
app_name='oho'
urlpatterns=[
    path('<int:pk>',views.blogs,name="blogs")
]