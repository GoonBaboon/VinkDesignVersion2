from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField
from django.utils import timezone

# Create your models here.
class Clients(models.Model):
    
    image = models.ImageField()
    name = models.CharField(max_length=400)

    def __str__(self):
        return str(self.name)
    
# class Category(models.Model):
#     category = models.CharField(max_length = 156)
#     def __str__(self):
#         return self.category
    

# class Tags(models.Model):
#     tags = models.CharField(max_length = 156)
#     def __str__(self):
#         return self.tags   


# class Author(models.Model):
#     description = RichTextUploadingField()
#     name = models.CharField(max_length = 156)
#     position = models.CharField(max_length = 156)
#     fb =models.CharField(max_length = 156,blank=True, null=True)
#     insta = models.CharField(max_length = 156, blank=True, null=True)
#     linkedin = models.CharField(max_length = 156, blank=True, null=True)
#     image  = models.ImageField(upload_to="SEO")
    
#     def __str__(self):
#         return self.name 
        
# class Blog(models.Model):
#     status  = models.BooleanField(default=True)
    
#     h1  = models.CharField(max_length = 156)
#     slug =models.CharField(max_length = 1256,blank=True, null=True, unique=True)
#     page_name = models.CharField(max_length = 1256,blank=True, null=True)
#     keyword = models.CharField(max_length = 156)
#     description = models.CharField(max_length = 900)
#     title = models.CharField(max_length = 156)
#     breadcrumb = models.CharField(max_length = 156)
#     canonical = models.CharField(max_length = 900, default="https://.com/")
#     og_type =models.CharField(max_length = 156)
#     og_card = models.CharField(max_length = 156)
#     og_site = models.CharField(max_length = 156)
#     image  = models.ImageField(upload_to="SEO")
    
#     category = models.ManyToManyField(Category)
#     tag  = models.ManyToManyField(Tags)
#     updated  = models.DateField(auto_now=True)
    

#     author = models.ForeignKey(Author, on_delete=models.CASCADE, null=True) 
    
#     published  = models.DateField()
#     content = RichTextUploadingField()
#     active = True
#     edits = RichTextUploadingField( blank=True, null=True)
#     schema = models.TextField(blank=True, null=True)
    
#     class Meta:
#         ordering = ['-published']
        
#     def __str__(self):
#         return self.h1 

# class Comment(models.Model):
#     blog = models.ForeignKey(Blog, related_name='comments', on_delete=models.CASCADE)
#     name = models.CharField(max_length=100)
#     email = models.EmailField()
#     body = models.TextField()
#     created_at = models.DateTimeField(default=timezone.now)
#     active = models.BooleanField(default=True)

#     def __str__(self):
#         return f'Comment by {self.name} on {self.blog}'

class Services(models.Model):
    status  = models.BooleanField(default=True)
    sol  = models.BooleanField(default=True)
    sl_no = models.IntegerField(blank=True, null=True)
    h1  = models.CharField(max_length = 156)
    slug =models.CharField(max_length = 1256,blank=True, null=True)
    page_name = models.CharField(max_length = 1256,blank=True, null=True)
    keyword = models.CharField(max_length = 156)
    fa_icons = models.CharField(max_length=100,default="fa fa-code")
    description = models.CharField(max_length = 900)
    mini_description = models.CharField(max_length = 100,default="LOL")
    title = models.CharField(max_length = 156)
    breadcrumb = models.CharField(max_length = 156)
    canonical = models.CharField(max_length = 900, default="https://thegrandindianroute.com/",null=True,blank=True)
    og_type =models.CharField(max_length = 156)
    og_card = models.CharField(max_length = 156)
    og_site = models.CharField(max_length = 156)
    bar_value = models.FloatField(default=0)
    image  = models.ImageField(upload_to="SEO",default='default/nopic.webp')
    icon   = models.ImageField(upload_to="SEO", blank=True, null=True,default='default/nopic.webp')

    updated  = models.DateField(auto_now=True)
    

    blog_banner_lg = models.ImageField(upload_to="data", blank=True, null=True)
    
    published  = models.DateField()
    content = RichTextUploadingField()
    active = True
    edits = RichTextUploadingField( blank=True, null=True)
    schema = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return self.h1

        
    
class Contact(models.Model):   
    name = models.CharField(max_length = 1156)
    email = models.CharField(max_length = 1156)
    subject = models.CharField(max_length = 1156)
    # phone = models.CharField(max_length = 115,null=True, blank=True)
    message  = models.TextField()
    date  = models.DateTimeField(auto_now_add=True)
    responsded  = models.BooleanField(default=False)
    # feedback  = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name
    

        
class Testimonial(models.Model):
    name = models.CharField(max_length=100, help_text="Name of the person giving the testimonial.")
    role = models.CharField(max_length=50,help_text='Role of the person giving testimonial',default='Author')
    testimonial = models.TextField(help_text="The testimonial text.")
    date_added = models.DateField(auto_now_add=True, help_text="The date when the testimonial was added.")
    image = models.ImageField(upload_to='data',default='default/nopic.webp', blank=True, null=True, help_text="Image for the testimonial.")

    def __str__(self):
        return f"Testimonial by {self.name}"


class Newsletter(models.Model):   
    
    email = models.CharField(max_length = 150)
    
    def __str__(self):
        return self.email 
    

class Team(models.Model):
    name = models.CharField(max_length=100, help_text="The name of the team.")
    description = models.TextField(help_text="A short description of the team.")
    image = models.ImageField(upload_to='data', blank=True, null=True, help_text="An image representing the team.")
    
    def __str__(self):
        return self.name

class Faq(models.Model):
    question = models.CharField(max_length=100, help_text="Question")
    answer = models.TextField(help_text="Answer of the question.")
    number= models.IntegerField(default=1)
    def __str__(self):
        return self.question