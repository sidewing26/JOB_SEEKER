from django.urls import path
from . import views

app_name = 'employer'

urlpatterns = [
    path('login_e/', views.login_e, name='login_e'),
    path('signup_employer/', views.signup_employer, name='signup_employer'),
]