// MOSTRAR PRODUCTOS EN SUS CATEGORÍAS

function mostrarProductos() {
  const contenedorSkincare = document.getElementById("contenedor-skincare");
  const contenedorMaquillaje = document.getElementById("contenedor-maquillaje");
  const contenedorAccesorios = document.getElementById("contenedor-accesorios");

  contenedorSkincare.innerHTML = "";
  contenedorMaquillaje.innerHTML = "";
  contenedorAccesorios.innerHTML = "";

  productos.forEach((producto) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("producto");

   tarjeta.innerHTML = `
  <img src="${producto.imagen}" alt="${producto.nombre}">
  <h4>${producto.nombre}</h4>
  <p>$${producto.precio.toLocaleString("es-CO")}</p>
  <button onclick="agregarAlCarrito(${producto.id})">
    Agregar al carrito
  </button>
`;

    if (producto.categoria === "Skincare") {
      contenedorSkincare.appendChild(tarjeta);
    } else if (producto.categoria === "Maquillaje") {
      contenedorMaquillaje.appendChild(tarjeta);
    } else if (producto.categoria === "Accesorios") {
      contenedorAccesorios.appendChild(tarjeta);
    }
  });
}

mostrarProductos();
// CARRITO DE COMPRAS

let carrito = [];

function agregarAlCarrito(id) {
  const producto = productos.find((item) => item.id === id);

  if (!producto) return;

  carrito.push(producto);
  actualizarCarrito();
}

function actualizarCarrito() {
  const listaCarrito = document.getElementById("lista-carrito");
  const totalCarrito = document.getElementById("total-carrito");

  listaCarrito.innerHTML = "";

  let total = 0;

  if (carrito.length === 0) {
    listaCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
  }

  carrito.forEach((producto) => {
    const elemento = document.createElement("p");

    elemento.textContent =
      `${producto.nombre} - $${producto.precio.toLocaleString("es-CO")}`;

    listaCarrito.appendChild(elemento);

    total += producto.precio;
  });

  totalCarrito.textContent =
    `Total: $${total.toLocaleString("es-CO")}`;
}