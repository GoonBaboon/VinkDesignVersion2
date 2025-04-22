from .import views
from django.urls import path, include

app_name = 'home'

urlpatterns = [
    path('',views.index,name='index'),
    path('about/',views.about,name='about'),
    path('contact/',views.contact,name='contact'),
    path('portfolio/',views.portfolio,name='portfolio'),
    path('service/<slug:slug>/', views.service_detail, name='service_detail'),
    path('service_list/',views.service_list,name='service_list'),
    path('newsletter/', views.newsletter, name = 'newsletter'),
]
