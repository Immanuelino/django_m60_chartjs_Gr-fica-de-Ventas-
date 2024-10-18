document.addEventListener("DOMContentLoaded", function() {
    // Realiza la solicitud Ajax para obtener los datos de ventas
    fetch("/ventas/datos_ventas/")
        .then(response => response.json())
        .then(data => {
            // Configuración del gráfico
            const ctx = document.getElementById('salesChart').getContext('2d');
            const salesChart = new Chart(ctx, {
                type: 'bar', // Tipo de gráfico
                data: {
                    labels: data.labels, // Etiquetas para el gráfico
                    datasets: [{
                        label: 'Ventas',
                        data: data.sales, // Datos de ventas
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error al obtener los datos:', error));
});
