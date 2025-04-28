from .import views
from django.urls import path

app_name = 'blog'

urlpatterns = [

    path('',views.blog,name='blog'),
    path('<str:slug>/', views.blog_detail, name='blog-single-post'),
    # path('tag/<slug:tag_slug>/', views.blog_by_tag, name='blog_by_tag'),
    # path('search/', views.BlogSearchView.as_view(), name='search'),
    # path('live-search/', views.live_search, name='live_search'),
    path('category/<str:category_name>/', views.category_view, name='blog_category'),
    path('tag/<str:tag_name>/', views.blog_by_tag, name='blog_by_tag'),
    
]
