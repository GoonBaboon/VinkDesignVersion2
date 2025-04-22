
from blog.models import Tags

def tags_processor(request):
    tags = Tags.objects.all()  # Adjust this query to suit your needs
    return {'tags': tags}