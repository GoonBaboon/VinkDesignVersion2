# Generated by Django 5.2 on 2025-04-27 06:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("blog", "0002_portfoliocategory_portfolioimage"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="portfolioimage",
            name="category",
        ),
        migrations.DeleteModel(
            name="PortfolioCategory",
        ),
        migrations.DeleteModel(
            name="PortfolioImage",
        ),
    ]
