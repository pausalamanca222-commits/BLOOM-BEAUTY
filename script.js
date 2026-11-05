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