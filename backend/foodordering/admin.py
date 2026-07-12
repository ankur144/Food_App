from django.contrib import admin
from .models import *
# from .models import User,Food,Category

admin.site.register(User)
admin.site.register(Category)
admin.site.register(Food)
admin.site.register(Order)
