from django.shortcuts import render
from django.http import HttpResponse
from .models import project
# Create your views here.
def home(request):
    return render(request,'lol/base.html')
def lol1(request):
    p=project.objects.all()
    c={'p':p}
    return render(request,'lol/home.html',c)
