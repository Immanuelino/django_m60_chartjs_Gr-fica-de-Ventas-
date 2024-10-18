from django.http import JsonResponse
from django.views.generic import TemplateView

# Vista basada en clase para mostrar la página de ventas
class VentasView(TemplateView):
    template_name = 'ventas/ventas.html'

# Vista para devolver los datos de ventas (simulados) en formato JSON
def datos_ventas(request):
    # Datos de prueba simulados
    datos = {
        'labels': ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        'sales': [1500, 2300, 1800, 2900, 2100, 3100],
    }
    return JsonResponse(datos)
