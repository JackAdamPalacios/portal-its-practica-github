/* =========================================================
   Portal ITS · Menús desplegables
   - Abre/cierra cada submenú al hacer clic.
   - Solo un submenú abierto a la vez.
   - Cierra al hacer clic fuera o al presionar Escape.
   - Botón hamburguesa para pantallas pequeñas.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".nav__item");
  const hamburguesa = document.querySelector(".nav__hamburguesa");
  const menu = document.querySelector(".nav__menu");

  function cerrarTodos(excepto = null) {
    items.forEach((item) => {
      if (item !== excepto) {
        item.classList.remove("abierto");
        item.querySelector(".nav__boton").setAttribute("aria-expanded", "false");
      }
    });
  }

  // Abrir / cerrar cada menú desplegable
  items.forEach((item) => {
    const boton = item.querySelector(".nav__boton");

    boton.addEventListener("click", (evento) => {
      evento.stopPropagation();
      const abierto = item.classList.toggle("abierto");
      boton.setAttribute("aria-expanded", String(abierto));
      cerrarTodos(item);
    });
  });

  // Botón hamburguesa (móvil)
  if (hamburguesa && menu) {
    hamburguesa.addEventListener("click", (evento) => {
      evento.stopPropagation();
      const visible = menu.classList.toggle("visible");
      hamburguesa.setAttribute("aria-expanded", String(visible));
      if (!visible) cerrarTodos();
    });
  }

  // Cerrar al hacer clic fuera del menú
  document.addEventListener("click", (evento) => {
    if (!evento.target.closest(".nav")) {
      cerrarTodos();
    }
  });

  // Cerrar con la tecla Escape
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
      const abierto = document.querySelector(".nav__item.abierto .nav__boton");
      cerrarTodos();
      if (abierto) abierto.focus();
    }
  });

  // Al pasar a escritorio, reiniciar el menú móvil
  window.addEventListener("resize", () => {
    if (window.innerWidth > 800 && menu) {
      menu.classList.remove("visible");
      if (hamburguesa) hamburguesa.setAttribute("aria-expanded", "false");
    }
  });
});
