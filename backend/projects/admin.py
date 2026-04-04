from django.contrib import admin
from .models import Tech,Project,ProjectImage,ProjectFeature
# Register your models here.

admin.site.register(Project)
admin.site.register(ProjectImage)
admin.site.register(Tech)
admin.site.register(ProjectFeature)