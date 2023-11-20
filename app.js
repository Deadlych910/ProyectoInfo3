const fondo = document.querySelector(".fondo");
const loginlink =document.querySelector(".login-link");
const registrarlink = document.querySelector(".registrar-link");
const btn =document.querySelector(".btn");
const iconocerrar = document.querySelector(".icono-cerrar");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");


registrarlink.addEventListener("click", () => {
    fondo.classList.add('active');
});

loginlink.addEventListener("click", () => {
    fondo.classList.remove('active');
});

btn.addEventListener("click", () => {
    fondo.classList.add('active-btn');
});


iconocerrar.addEventListener("click", () => {
    fondo.classList.remove('active-btn');
});

vaciarCarritoBtn.addEventListener("click", () => {
    vaciarCarrito();
});

const productos = [
    { id: 1, nombre: 'Producto 1', precio: 62.00, imagen: 'img/haloi.jpg'},
    { id: 2, nombre: 'Producto 2', precio: 57.00, imagen: 'img/mk1.jpg' },
    { id: 3, nombre: 'Producto 3', precio: 55.00, imagen: 'img/re4.jpg' },
    { id: 4, nombre: 'Producto 4', precio: 70.00, imagen: 'img/mw3.jpg' },
    { id: 5, nombre: 'Producto 5', precio: 60.00, imagen: 'img/spiderman.jpg'},
    { id: 6, nombre: 'Producto 6', precio: 50.00, imagen: 'img/der.jpg'},
    { id: 7, nombre: 'Producto 7', precio: 40.00, imagen: 'img/star wars.jpeg'},
    { id: 8, nombre: 'Producto 8', precio: 59.00, imagen: 'img/aw2.jpeg'}
];

const listaCarrito = document.getElementById('lista-carrito');
const carrito = document.getElementById('carrito');
const totalCarrito = document.getElementById('total-carrito');

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
});

function mostrarProductos() {
    const contenedorProductos = document.getElementById('productos');

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        const enlace = document.createElement('a');
        
        if (producto.id === 1) {
            enlace.href = 'https://www.youtube.com/watch?v=PyMlV5_HRWk&ab_channel=HALO'; 
        } 
        if (producto.id === 2) {
            enlace.href = 'https://www.youtube.com/watch?v=rRkavvt5x8o&ab_channel=WarnerPlayLatino'; 
        }
        if (producto.id === 3) {
            enlace.href = 'https://www.youtube.com/watch?v=Yj9UeZzp12o&ab_channel=ResidentEvil'; 
        }
        if (producto.id === 4) {
            enlace.href = 'https://www.youtube.com/watch?v=ZWb6wCKA_Pk&ab_channel=CallofDuty'; 
        }
        if (producto.id === 5) {
            enlace.href = 'https://www.youtube.com/watch?v=p8UsHhOjjzg&ab_channel=PlayStationEspa%C3%B1a'; 
        }
        if (producto.id === 6) {
            enlace.href = 'https://www.youtube.com/watch?v=ctQl9wa3ydE&ab_channel=DeadSpace'; 
        }
        if (producto.id === 7) {
            enlace.href = 'https://www.youtube.com/watch?v=VRaobDJjiec&ab_channel=EAStarWars'; 
        }
        if (producto.id === 8) {
            enlace.href = 'https://www.youtube.com/watch?v=dlQ3FeNu5Yw&ab_channel=PlayStation'; 
        }

        enlace.target = '_blank';  

        const imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
        enlace.appendChild(imagen);

        // Aplicar estilos específicos para Producto 4
        if (producto.id === 4) {
            div.classList.add('producto-4');
        }

        div.appendChild(enlace);

        // Resto del contenido del producto
        div.innerHTML += `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>`;

        contenedorProductos.appendChild(div);
    });
}

function mostrarCarrito() {
    carrito.classList.toggle('oculto');
}

function agregarAlCarrito(idProducto) {
    const productoSeleccionado = productos.find(producto => producto.id === idProducto);

    const elementoCarrito = document.createElement('li');
    elementoCarrito.innerHTML = `
        ${productoSeleccionado.nombre} - $${productoSeleccionado.precio.toFixed(2)}
        <button class="eliminar" data-id="${productoSeleccionado.id}" onclick="eliminarDelCarrito(${productoSeleccionado.id})">Eliminar</button>
    `;

    listaCarrito.appendChild(elementoCarrito);

    actualizarTotal();
}

function eliminarDelCarrito(idProducto) {
    const elementosCarrito = document.querySelectorAll('#lista-carrito li');

    for (let i = 0; i < elementosCarrito.length; i++) {
        const elemento = elementosCarrito[i];
        const id = parseInt(elemento.querySelector('.eliminar').getAttribute('data-id'));

        if (id === idProducto) {
            elemento.remove();
            break; // Detén el bucle después de eliminar el primer elemento encontrado
        }
    }

    actualizarTotal();
}

function vaciarCarrito() {
    listaCarrito.innerHTML = ''; // Elimina todos los elementos hijos de la lista
    actualizarTotal();
}

function actualizarTotal() {
    let total = 0;
    const elementosCarrito = document.querySelectorAll('#lista-carrito li');

    elementosCarrito.forEach(elemento => {
        const precio = parseFloat(elemento.textContent.split('$')[1]);
        total += precio;
    });

    totalCarrito.textContent = total.toFixed(2);
}


