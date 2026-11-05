
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

// CARRITO DE COMPRAS
let carrito = JSON.parse(localStorage.getItem("bloomBeautyCarrito")) || [];

function agregarAlCarrito(id) {
  const producto = productos.find((item) => item.id === id);
  if (!producto) return;

  const existente = carrito.find(
    (item) => item.producto.id === id
  );

  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({
      producto: producto,
      cantidad: 1
    });
  }

  actualizarCarrito();
}

function aumentarCantidad(id) {
  const item = carrito.find(
    (item) => item.producto.id === id
  );

  if (item) {
    item.cantidad++;
    actualizarCarrito();
  }
}

function disminuirCantidad(id) {
  const item = carrito.find(
    (item) => item.producto.id === id
  );

  if (item) {
    item.cantidad--;

    if (item.cantidad <= 0) {
      eliminarProducto(id);
    } else {
      actualizarCarrito();
    }
  }
}

function eliminarProducto(id) {
  carrito = carrito.filter(
    (item) => item.producto.id !== id
  );

  actualizarCarrito();
}

function actualizarCarrito() {
  const listaCarrito = document.getElementById("lista-carrito");
  const totalCarrito = document.getElementById("total-carrito");

  if (!listaCarrito || !totalCarrito) return;

  listaCarrito.innerHTML = "";
  let total = 0;
  localStorage.setItem("bloomBeautyCarrito", JSON.stringify(carrito));

  if (carrito.length === 0) {
    listaCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
  }

  carrito.forEach((item) => {
    const producto = item.producto;
    const subtotal = producto.precio * item.cantidad;

    total += subtotal;

    const elemento = document.createElement("div");

    elemento.innerHTML = `
      <p>${producto.nombre}</p>
      <p>Precio: $${producto.precio.toLocaleString("es-CO")}</p>
      <p>Subtotal: $${subtotal.toLocaleString("es-CO")}</p>
      <button onclick="disminuirCantidad(${producto.id})">−</button>
      <span>${item.cantidad}</span>
      <button onclick="aumentarCantidad(${producto.id})">+</button>
      <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
    `;

    listaCarrito.appendChild(elemento);
  });

  totalCarrito.textContent =
    `Total: $${total.toLocaleString("es-CO")}`;
}

// BUSCADOR
const buscador = document.getElementById("buscador");
const limpiarBusqueda = document.getElementById("limpiar-busqueda");

if (buscador && limpiarBusqueda) {
  buscador.addEventListener("input", function () {
    const texto = buscador.value.toLowerCase();

    document.querySelectorAll(".producto").forEach((tarjeta) => {
      const nombre = tarjeta.querySelector("h4").textContent.toLowerCase();

      tarjeta.style.display = nombre.includes(texto) ? "block" : "none";
    });
  });

  limpiarBusqueda.addEventListener("click", function () {
    buscador.value = "";

    document.querySelectorAll(".producto").forEach((tarjeta) => {
      tarjeta.style.display = "block";
    });
  });
}

// INICIAR LA TIENDA
mostrarProductos();
actualizarCarrito();
const botonWhatsapp = document.getElementById("contacto-whatsapp");

if (botonWhatsapp) {
    botonWhatsapp.href = "https://wa.me/57332448394";
}