from random import choices
from statistics import mode
from django.db import models
from pytz import country_names

from core.models import User


class News(models.Model):
    heading = models.CharField(max_length=255)
    thumbnail = models.URLField()
    desc = models.TextField()
    video_link = models.URLField()
    full_story = models.TextField()
    date = models.DateField(auto_now=True)
    paid = models.BooleanField()
    TITLE_CHOICES = [
        ('news', "News"),
        ('column', "Columns"),
        ('deal_street', "Deal Street"),
        ('interviews', "Interview")
    ]
    section = models.CharField(
        max_length=255, choices=TITLE_CHOICES, default='news')


class Customer(models.Model):
    phone = models.CharField(max_length=255)
    GENDER_CHOICES = [
        ('M', "Male"),
        ('F', "Female"),
        ('O', "Other")
    ]
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    country = models.CharField(max_length=5, choices=[
                               (k, v) for k, v in country_names.items()])
    state = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def first_name(self):
        return self.user.first_name

    def last_name(self):
        return self.user.last_name

    def name(self):
        return f'{self.user.first_name} {self.user.last_name}'

    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name}'


class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.PROTECT)
    current_period_start = models.DateField(auto_now_add=True)
    payment_method = models.CharField(max_length=255)
    current_period_end = models.DateField()
    cancel_at_period_end = models.BooleanField()
    amount = models.DecimalField(max_digits=6, decimal_places=2)
