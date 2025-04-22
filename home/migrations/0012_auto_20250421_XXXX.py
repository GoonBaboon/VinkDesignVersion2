# 0012_auto_20250421_XXXX.py

from django.db import migrations
from django.utils.timezone import now

def populate_services(apps, schema_editor):
    Services = apps.get_model('home', 'Services')
    Category = apps.get_model('home', 'Category')  # Assuming these exist
    Tags = apps.get_model('home', 'Tags')

    services_data = [
        {
            "sl_no": 1,
            "h1": "Website Development",
            "slug": "website-development",
            "page_name": "Website Development",
            "keyword": "website, development, design",
            "fa_icons": "fa fa-code",
            "description": "Custom-built, responsive websites optimized for performance, user experience, and conversions.",
            "mini_description": "Custom responsive websites for better performance.",
            "title": "Website Development",
            "breadcrumb": "Website Development",
            "og_type": "website",
            "og_card": "summary_large_image",
            "og_site": "https://yourdomain.com",
            "published": now(),
            "content": "<p>Full service for web development...</p>",
        },
        {
            "sl_no": 2,
            "h1": "SEO/SMM",
            "slug": "seo-smm",
            "page_name": "SEO & SMM",
            "keyword": "seo, smm, digital presence",
            "fa_icons": "fa fa-search",
            "description": "Boost visibility with SEO and powerful social media strategies to grow online.",
            "mini_description": "SEO & Social Media strategies.",
            "title": "SEO & SMM",
            "breadcrumb": "SEO/SMM",
            "og_type": "article",
            "og_card": "summary_large_image",
            "og_site": "https://yourdomain.com",
            "published": now(),
            "content": "<p>Improve your visibility...</p>",
        },
        {
            "sl_no": 3,
            "h1": "Digital Marketing",
            "slug": "digital-marketing",
            "page_name": "Digital Marketing",
            "keyword": "digital, marketing, campaigns",
            "fa_icons": "fa fa-bullhorn",
            "description": "Data-driven digital campaigns that drive traffic, boost sales, and grow your brand.",
            "mini_description": "Drive traffic and grow brand digitally.",
            "title": "Digital Marketing",
            "breadcrumb": "Digital Marketing",
            "og_type": "article",
            "og_card": "summary_large_image",
            "og_site": "https://yourdomain.com",
            "published": now(),
            "content": "<p>Marketing strategies that perform...</p>",
        },
        {
            "sl_no": 4,
            "h1": "Lead Generation",
            "slug": "lead-generation",
            "page_name": "Lead Generation",
            "keyword": "leads, generation, conversion",
            "fa_icons": "fa fa-users",
            "description": "Capture and convert high-quality leads using smart tools and automation techniques.",
            "mini_description": "Get quality leads with automation.",
            "title": "Lead Generation",
            "breadcrumb": "Lead Generation",
            "og_type": "website",
            "og_card": "summary_large_image",
            "og_site": "https://yourdomain.com",
            "published": now(),
            "content": "<p>Funnel optimization techniques...</p>",
        },
        {
            "sl_no": 5,
            "h1": "Branding",
            "slug": "branding",
            "page_name": "Branding",
            "keyword": "branding, identity, visuals",
            "fa_icons": "fa fa-lightbulb-o",
            "description": "Create memorable brand identities that emotionally connect and visually stand out.",
            "mini_description": "Emotional & visual brand identity.",
            "title": "Branding Services",
            "breadcrumb": "Branding",
            "og_type": "website",
            "og_card": "summary_large_image",
            "og_site": "https://yourdomain.com",
            "published": now(),
            "content": "<p>Everything about your brand...</p>",
        },
        {
            "sl_no": 6,
            "h1": "AI Agents",
            "slug": "ai-agents",
            "page_name": "AI Agents",
            "keyword": "ai, automation, smart agents",
            "fa_icons": "fa fa-robot",
            "description": "Automate services with AI agents that optimize workflows and enhance productivity.",
            "mini_description": "Automate with smart AI agents.",
            "title": "AI Agents Integration",
            "breadcrumb": "AI Agents",
            "og_type": "article",
            "og_card": "summary_large_image",
            "og_site": "https://yourdomain.com",
            "published": now(),
            "content": "<p>Empower your business with AI...</p>",
        },
        {
            "sl_no": 7,
            "h1": "Interior Designing",
            "slug": "interior-designing",
            "page_name": "Interior Designing",
            "keyword": "interior, design, decor",
            "fa_icons": "fa fa-home",
            "description": "Transform your space with creative, functional interior design tailored to your style.",
            "mini_description": "Functional and creative interiors.",
            "title": "Interior Designing",
            "breadcrumb": "Interior Designing",
            "og_type": "article",
            "og_card": "summary_large_image",
            "og_site": "https://yourdomain.com",
            "published": now(),
            "content": "<p>Creative interior solutions...</p>",
        },
        {
            "sl_no": 8,
            "h1": "Creative Designing",
            "slug": "creative-designing",
            "page_name": "Creative Designing",
            "keyword": "creative, design, graphics",
            "fa_icons": "fa fa-paint-brush",
            "description": "Striking visuals that tell stories, enhance your brand, and make a lasting impression.",
            "mini_description": "Visuals that tell brand stories.",
            "title": "Creative Design Services",
            "breadcrumb": "Creative Designing",
            "og_type": "website",
            "og_card": "summary_large_image",
            "og_site": "https://yourdomain.com",
            "published": now(),
            "content": "<p>Stand out with creative designs...</p>",
        }
    ]

    for data in services_data:
        Services.objects.create(**data)

class Migration(migrations.Migration):

    dependencies = [
        ('home', '0011_auto_20250421_0721'),
    ]

    operations = [
        migrations.RunPython(populate_services),
    ]
