from django.contrib import admin
from django.utils.html import format_html
from newsapp.models import News, Customer, Order

# Register your models here.


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ['heading', 'desc', 'full_story',
                    'video_link', 'thumbnail_link', 'date', 'section', 'paid']

    def thumbnail_link(self, news):
        return format_html('<a href="{}">Thumbnail</a>', news.thumbnail)

    def video_link(self, news):
        return format_html('<a href="{}">Video</a>', news.video_link)


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    def email(self, customer):
        return customer.user.email
    list_select_related = ['user']
    list_display = ['name', 'gender', 'phone',
                    'country', 'state', 'city', 'email']


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_select_related = ['customer']
    list_display = [
        'customer',
        'current_period_start',
        'payment_method',
        'current_period_end',
        'cancel_at_period_end',
        'amount',
    ]
