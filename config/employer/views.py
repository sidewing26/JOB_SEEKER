from django.shortcuts import render

# Create your views here.

def login_e(request):
    return render(request, 'login_e.html')

def signup_employer(request):
    return render(request, 'signup_employer.html')