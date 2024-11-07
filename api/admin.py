from django.contrib import admin
from .models import User, Profile
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'email', 'is_staff', 'is_active', 'date_joined')
    list_display_links = ('id', 'username')
    search_fields = ('username', 'email')
    list_per_page = 25

    class ProfileAdmin(admin.ModelAdmin):
        list_display = ('id', 'user', 'bio', 'location', 'birth_date')
        list_display_links = ('id', 'user')
        search_fields = ('user', 'bio', 'location', 'birth_date')
        list_editable = ['user', 'full_name', 'verified']
        list_per_page = 25

    admin.site.register(User, UserAdmin)
    admin.site.register(Profile, ProfileAdmin)
# Register your models here.
