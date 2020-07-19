from django.db import models

class project(models.Model):
    name=models.CharField(max_length=10)
    img=models.ImageField(upload_to="lol/images")
    n=models.IntegerField()
    url=models.URLField(blank=True)
    def __str__(self):
        return self.name