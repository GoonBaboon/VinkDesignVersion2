# Generated by Django 5.2 on 2025-04-22 11:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0014_remove_blog_author_remove_blog_category_and_more"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Skillbar",
        ),
        migrations.AddField(
            model_name="services",
            name="bar_value",
            field=models.FloatField(default=0),
        ),
    ]
