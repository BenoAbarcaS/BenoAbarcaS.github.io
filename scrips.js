function Dimensiones() {
  const imagen = document.getElementById("imagen");
  const ancho = imagen.width;
  const alto = imagen.height;
  const realAncho = 2500;
  const realAlto = 1759;

  const areas = {
    Elenoir: { x0: 1391, y0: 425, z0: 15 },
    Darv: { x0: 1300, y0: 1180, z0: 20 },
    Beast: { x0: 1926, y0: 1010, z0: 17 },
    Sapin: { x0: 1031, y0: 872, z0: 16 },
  };

  for (const areaId in areas) {
    const area = areas[areaId];
    const x1 = (area.x0 * ancho) / realAncho;
    const y1 = (area.y0 * alto) / realAlto;
    const z1 = area.z0;

    const dimensiones = `${x1},${y1},${z1}`;
    const areaElement = document.getElementById(areaId);
    areaElement.setAttribute("coords", dimensiones);
  }
}

window.addEventListener("load", Dimensiones);
window.addEventListener("resize", Dimensiones);

function clickear(localidad) {
  const cartas = document.querySelectorAll('.carta');
  cartas.forEach(carta => {
    carta.style.opacity = "0";
    carta.style.zIndex = "4";
    carta.style.transform = "translateX(-100%)";
  });

  carta = document.getElementById(`carta${localidad}`);
  carta.style.opacity = "1";
  carta.style.zIndex = "4";
  carta.style.transform = "translateX(0%)";

  const cerrarBotones = document.getElementsByClassName('cerrar');
  for (const cerrar of cerrarBotones) {
    cerrar.addEventListener("click", () => {
      const cartas = document.querySelectorAll('.carta');
      cartas.forEach(carta => {
        carta.style.opacity = "1";
        carta.style.zIndex = "4";
        carta.style.transform = "translateX(-100%)";
      });
    });
  }
}
function mostrarDiv(divId, boton) {
  const contenedor = boton.closest('.contenedor');
  const divs = contenedor.querySelectorAll('.ocultodiv');
  divs.forEach(div => div.style.display = 'none');

  const enlaces = contenedor.querySelectorAll('.botones a');
  enlaces.forEach(enlace => enlace.style.color = 'white'); // Restablece el color de todos los enlaces

  const divMostrar = contenedor.querySelector(`#${divId}`);
  divMostrar.style.display = 'block';

  // Cambia el color del texto del enlace clickeado
  boton.style.color = 'red'; // Puedes ajustar el color según tus preferencias
}

