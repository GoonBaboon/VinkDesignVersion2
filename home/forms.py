from django import forms
from .models import *


class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields= '__all__'

        
class TestimonialForm(forms.ModelForm):
    class Meta:
        model = Testimonial
        fields = ['name', 'testimonial', 'image'] 
        

class NewsLetterForm(forms.ModelForm):
    class Meta:
        model = Newsletter
        fields= '__all__'
        