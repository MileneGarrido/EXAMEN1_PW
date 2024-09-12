// lista de productos 
let productos = [
    { nombre: "Leche", cantidad: 4, precio: 4.5 },
    { nombre: "Gaseosa", cantidad: 2, precio: 5.3 },
    { nombre: "pan", cantidad: 10, precio: 0.8 },
    { nombre: "jugo", cantidad: 2, precio: 3.5 },
    { nombre: "Aceite", cantidad: 1, precio: 7.2 }
];


// tabla de productos y total
function generarTablaProductos() {
    let tabla = document.getElementById('productos');
    let total = 0;

    
    productos.forEach(producto => {
        let subtotal = producto.cantidad * producto.precio;
        total += subtotal;

        // Crear una nueva fila
        let fila = document.createElement('tr');

        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td>S/ ${producto.precio.toFixed(2)}</td>
            <td>S/ ${subtotal.toFixed(2)}</td>
        `;

        // Añadir la fila a la tabla
        tabla.appendChild(fila);
    });

    // Mostrar el total
    document.getElementById('total-precio').innerText = total.toFixed(2);
}
generarTablaProductos()