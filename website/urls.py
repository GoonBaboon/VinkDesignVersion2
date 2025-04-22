from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),  # Admin panel
    path("ckeditor/", include("ckeditor_uploader.urls")),  # CKEditor file upload URLs
    path('',include('home.urls')),
    path('blog/',include('blog.urls')),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)