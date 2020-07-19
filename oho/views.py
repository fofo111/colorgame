from django.shortcuts import render,get_object_or_404
from django.http import HttpResponse
from .models import lol3
def blogs(request,pk):
    p=lol3.objects.all()
    j=pk
    t=get_object_or_404(lol3,id=j)
    c={'p':p,'j':j,'t':t} 
    return render(request,'oho/blogs1.html',c)
