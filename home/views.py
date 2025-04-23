from django.shortcuts import render,redirect,get_object_or_404
from django.contrib import messages
from itertools import zip_longest
from django.db.models import Q
from django.core.paginator import Paginator
from django.http import JsonResponse
from django.urls import reverse
from django.views.generic import ListView
from home.models import *
from blog.models import *

from .forms import *



# Create your views here.
# HELPER FUNCTIONS

def chunked(iterable, n):
    args = [iter(iterable)] * n
    return zip_longest(*args)
def chunk_testimonials(testimonials, chunk_size):
    return [testimonials[i:i + chunk_size] for i in range(0, len(testimonials), chunk_size)]

def chunk_items(items, chunk_size):
    return [items[i:i + chunk_size] for i in range(0, len(items), chunk_size)]

# END HELPER FUNCTIONS

def index(request):
    testimonials = Testimonial.objects.all()


    context = {
        'testimonials':testimonials,

    }
    return render(request,'index.html',context)

def about(request):
    blogs = Blog.objects.all()

    testimonials = Testimonial.objects.all()
    grouped = list(chunked(testimonials, 3))  # Group every 3 testimonials
    context={
        'testimonial_groups':grouped,

        'blogs':blogs
    }
    return render(request,'aboutus.html',context)



def portfolio(request):
    return render(request,'portfolio-two-columns.html',{})



# def category_view(request, category_name):
    # category = get_object_or_404(Category, category=category_name)
    # categories = Category.objects.all()
    # blogs = Blog.objects.filter(category=category)
    # recent_posts = Blog.objects.order_by('-published')[:15]  # Get latest 15 posts (adjust as needed)
    # slides = [recent_posts[i:i+3] for i in range(0, len(recent_posts), 3)] 
    # tags = Tags.objects.all()  # Assuming you have a Tags model
    
    # paginator = Paginator(blogs, 2)  # 2 blogs per page

    # page_number = request.GET.get('page')  # get ?page=2
    # page_obj = paginator.get_page(page_number)

    # for cat in categories:
    #     cat.post_count = cat.blog_set.count()

    # context = {
    #     'category': category,
    #     'blogs': blogs,
    #     'categories': categories,
    #     'recent_post_slides': slides,
    #     'tags': tags,
    #     'page_obj': page_obj,
    # }
    # return render(request, 'blog_category.html', context)



# def blog(request):
#     blog_list = Blog.objects.all()
#     paginator = Paginator(blog_list, 2)  # 2 blogs per page

#     page_number = request.GET.get('page')  # get ?page=2
#     page_obj = paginator.get_page(page_number)

#     tags = Tags.objects.all()
#     categories = Category.objects.all()
#     recent_posts = Blog.objects.order_by('-published')[:15]
#     slides = [recent_posts[i:i+3] for i in range(0, len(recent_posts), 3)] 

#     for category in categories:
#         category.post_count = category.blog_set.count()

#     context = {
#         'page_obj': page_obj,
#         'categories': categories,
#         'recent_post_slides': slides,
#         'tags': tags,
#     }
#     return render(request, 'blog_list.html', context)


def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your data is sent successfully.')
            return redirect(request.META.get('HTTP_REFERER', 'redirect_if_referer_not_found'))
        else:
            messages.error(request, "Your query is not sent! Try Again")
            print(form.errors)
            return redirect(request.META.get('HTTP_REFERER', 'redirect_if_referer_not_found')) 
    context = {

    }
    return render(request, 'contact.html',context)



def service_list(request):
    services = Services.objects.all()
    all_testimonials = Testimonial.objects.all().order_by('-date_added')  # Optional: Latest first
    grouped_testimonials = chunk_testimonials(list(all_testimonials), 3)
    
    paginator = Paginator(services, 2)  # 2 blogs per page
    page_number = request.GET.get('page')  # get ?page=2
    page_obj = paginator.get_page(page_number)
    
    recent_posts = Blog.objects.order_by('-published')[:15]  # Get latest 15 posts
    slides = [recent_posts[i:i+3] for i in range(0, len(recent_posts), 3)] 
    
    # ✅ Missing lines added
    categories = Category.objects.all()
    tags = Tags.objects.all()

    context = {
        'page_obj': page_obj,
        'services': services,
        'testimonial_groups': grouped_testimonials,
        'categories': categories,
        'recent_post_slides': slides,
        'tags': tags,
    }
    return render(request, 'service_list.html', context)



def service_detail(request, slug):
    services = Services.objects.all()
    all_testimonials = Testimonial.objects.all().order_by('-date_added')  # Optional: Latest first
    grouped_testimonials = chunk_testimonials(list(all_testimonials), 3)
    
    paginator = Paginator(services, 2)  # 2 blogs per page
    page_number = request.GET.get('page')  # get ?page=2
    page_obj = paginator.get_page(page_number)
    
    recent_posts = Blog.objects.order_by('-published')[:15]  # Get latest 15 posts
    slides = [recent_posts[i:i+3] for i in range(0, len(recent_posts), 3)] 
    
    # ✅ Missing lines added
    categories = Category.objects.all()
    tags = Tags.objects.all()
    
    data = Services.objects.get(slug=slug)
    

    context = {
        'data':data,
        'page_obj': page_obj,
        'services': services,
        'testimonial_groups': grouped_testimonials,
        'categories': categories,
        'recent_post_slides': slides,
        'tags': tags,
    }
    return render(request, 'service_detail.html', context)




def testimonial(request):
    
    if request.method == 'POST':
        form = TestimonialForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('testimonials_list')  # Redirect to the list of testimonials
    else:
        form = TestimonialForm()
    return render(request, 'testimonial.html', {'form': form})

def newsletter(request):
    if request.method == 'POST':
        form = NewsLetterForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Your email is stored successfully")
            return redirect(request.META.get('HTTP_REFERER', 'redirect_if_referer_not_found'))
        else:
            messages.error(request, "Your email is not stored! Try Again")
            return redirect(request.META.get('HTTP_REFERER', 'redirect_if_referer_not_found')) 
    context = {
    }
    return render(request, 'index.html', context)