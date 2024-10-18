from django.urls import path
from . import views

urlpatterns = [
    path('', views.VentasView.as_view(), name='ventas'),  # Vista principal de ventas
    path('datos_ventas/', views.datos_ventas, name='datos_ventas'),  # Endpoint para datos Ajax
]
