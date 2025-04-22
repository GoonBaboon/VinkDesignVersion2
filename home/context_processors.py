# myapp/context_processors.py
from home.models import Services # Import your Service model

def services_processor(request):
    services = Services.objects.all()  # Or whatever query you need
    return {'services': services}

