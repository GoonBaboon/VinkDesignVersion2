from django.shortcuts import render
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


def category_view(request, category_name):
    category = get_object_or_404(Category, category=category_name)
    categories = Category.objects.all()
    blogs = Blog.objects.filter(category=category)
    recent_posts = Blog.objects.order_by('-published')[:15]  # Get latest 15 posts (adjust as needed)
    slides = [recent_posts[i:i+3] for i in range(0, len(recent_posts), 3)] 
    tags = Tags.objects.all()  # Assuming you have a Tags model
    
    paginator = Paginator(blogs, 2)  # 2 blogs per page

    page_number = request.GET.get('page')  # get ?page=2
    page_obj = paginator.get_page(page_number)

    for cat in categories:
        cat.post_count = cat.blog_set.count()

    context = {
        'category': category,
        'blogs': blogs,
        'categories': categories,
        'recent_post_slides': slides,
        'tags': tags,
        'page_obj': page_obj,
    }
    return render(request, 'blog/blog_category.html', context)



def blog(request):
    blog_list = Blog.objects.all()
    paginator = Paginator(blog_list, 2)  # 2 blogs per page

    page_number = request.GET.get('page')  # get ?page=2
    page_obj = paginator.get_page(page_number)

    tags = Tags.objects.all()
    categories = Category.objects.all()
    recent_posts = Blog.objects.order_by('-published')[:15]
    slides = [recent_posts[i:i+3] for i in range(0, len(recent_posts), 3)] 

    for category in categories:
        category.post_count = category.blog_set.count()

    context = {
        'page_obj': page_obj,
        'categories': categories,
        'recent_post_slides': slides,
        'tags': tags,
    }
    return render(request, 'blog/blog_list.html', context)




def blog_detail(request, slug):
    tags = Tags.objects.all()
    categories = Category.objects.all()
    blog = Blog.objects.get(slug=slug)
    comments = blog.comments.filter(active=True).order_by('-created_at')[:4]
    count = blog.comments.filter(active=True)
    new_comment = None
    
        # Count posts per category
    for category in categories:
        category.post_count = category.blog_set.count()
    
    recent_posts = Blog.objects.order_by('-published')[:15]  # Get latest 15 posts (adjust as needed)
    slides = [recent_posts[i:i+3] for i in range(0, len(recent_posts), 3)] 

    if request.method == 'POST':
        comment_form = CommentForm(data=request.POST)
        if comment_form.is_valid():
            new_comment = comment_form.save(commit=False)
            new_comment.blog = blog
            new_comment.save()
    else:
        comment_form = CommentForm()

    context = {
        'blog':blog,
        'count':count,
        'comments': comments,
        'new_comment': new_comment,
        'comment_form': comment_form,
        'recent_post_slides': slides,
        'categories': categories,
        'tags': tags,
    }
    return render(request, 'blog/blog-single-post.html', context)





def blog_by_tag(request, tag_slug):
    # Fetch the tag using the tag_name
    tag = get_object_or_404(Tags, tags=tag_slug)
    
    # Filter blogs by the tag
    blog_list = Blog.objects.filter(tag__tags=tag)  # Using double underscore for ManyToManyField
    
    # Paginate the results
    paginator = Paginator(blog_list, 2)  # 2 blogs per page

    page_number = request.GET.get('page')  # get ?page=2
    page_obj = paginator.get_page(page_number)
    
    # Get categories and tags for sidebar
    categories = Category.objects.all()
    tags = Tags.objects.all()  # Assuming you have a Tags model
    
            # Count posts per category
    for category in categories:
        category.post_count = category.blog_set.count()
    
    # Recent posts (optional)
    recent_posts = Blog.objects.order_by('-published')[:5]  # Get 5 most recent posts
    
    context = {
        'blogs': page_obj,
        'tag': tag,
        'page_obj': page_obj,
        'categories': categories,
        'tags': tags,
        'recent_post_slides': [recent_posts[i:i+3] for i in range(0, len(recent_posts), 3)],  # Divide recent posts into slides
    }
    
    return render(request, 'blog/blog_by_tag.html', context)





class BlogSearchView(ListView):
    template_name = 'blog/blog_search_results.html'
    context_object_name = 'results'
    paginate_by = 10

    def get_queryset(self):
        query = self.request.GET.get('q')
        if query:
            return Blog.objects.filter(
                Q(title__icontains=query) | 
                Q(content__icontains=query)
            ).distinct()
        return Blog.objects.none()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['query'] = self.request.GET.get('q', '')
        return context

def live_search(request):
    query = request.GET.get('term', '')
    if query:
        results = Blog.objects.filter(
            Q(title__icontains=query) | 
            Q(content__icontains=query)
        ).values('title', 'slug')[:5]
        
        # Add absolute URLs to the results
        results_list = list(results)
        for item in results_list:
            item['url'] = reverse('home:blog-single-post', args=[item['slug']])
        
        return JsonResponse(results_list, safe=False)
    return JsonResponse([], safe=False)




