from django.contrib import admin
from django.urls import path , include
from .views import *

urlpatterns = [
    path('admin_login/',admin_login_api),
    path('add-category/',add_category_api),
    path('categories/',list_category_api),
    path('add-food-item/',add_food_item),
    path('foods/',list_foods),
    path('food_search/',food_search),
    path('random_foods/',random_foods),
    path('register/',register_user),
    path('login/',login_user),
    path('foods/<int:id>',food_detail),
    path('cart/add/',add_to_cart),
    
]
