from django.db import models
from django.utils.text import slugify

class ProjectImage(models.Model):
    image = models.ImageField(upload_to="projects/gallery/")
    alt_text = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.alt_text or self.image.name

class Tech(models.Model):
    name = models.CharField(max_length=50)
    icon_svg = models.TextField(blank=True, null=True) 
    category = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.name

class ProjectFeature(models.Model):
    project = models.ForeignKey('Project', on_delete=models.CASCADE, related_name='key_features')
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title

class Project(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)  
    short_description = models.CharField(max_length=200)
    long_description = models.TextField()  

    thumbnail = models.ImageField(upload_to="projects/thumbnails/")  
    banner = models.ImageField(upload_to="projects/banners/", blank=True, null=True)  
    gallery = models.ManyToManyField(ProjectImage, blank=True)  

    github_url = models.URLField(blank=True, null=True)
    live_url = models.URLField(blank=True, null=True)

    category = models.CharField(max_length=50, blank=True)
    tech_stack = models.ManyToManyField(Tech, blank=True)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    is_featured = models.BooleanField(default=False)

    problem = models.TextField(blank=True, null=True)
    solution = models.TextField(blank=True, null=True)
    outcome = models.TextField(blank=True, null=True)

    class Meta:
        ordering = ['-date_created']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
    