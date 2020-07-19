from django.db import models

class lol3(models.Model):
    name=models.CharField(max_length=20)
    des=models.TextField()
    data=models.DateField()
    def __str__(self):
        return self.name