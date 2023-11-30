function Dimensiones() {
    const imagen = document.getElementById("imagen");
    const ancho = imagen.width;
    const alto = imagen.height;
    const realAncho = 2500;
    const realAlto = 1759;
  
    const areas = {
      Elenoir: { x0: 1067, y0: 400, x2: 1370, y2: 450 },
      Sapin: { x0: 807, y0: 847, x2: 1012, y2: 901 },
      Darv: { x0: 1087, y0: 1156, x2: 1284, y2: 1208 },
      Beast: { x0: 1638, y0: 930, x2: 1907, y2: 1034 },
    };
  
    for (const areaId in areas) {
      const area = areas[areaId];
      const x1 = (area.x0 * ancho) / realAncho;
      const y1 = (area.y0 * alto) / realAlto;
      const x3 = (area.x2 * ancho) / realAncho;
      const y3 = (area.y2 * alto) / realAlto;
  
      const dimensiones = `${x1},${y1},${x3},${y3}`;
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
      carta.style.zIndex = "-4"; 
    });
  
    carta = document.getElementById(`carta${localidad}`);
    carta.style.opacity = "1";
    carta.style.zIndex = "4";
  
    const cerrarBotones = document.getElementsByClassName('cerrar');
    for (const cerrar of cerrarBotones) {
      cerrar.addEventListener("click", () => {
        const cartas = document.querySelectorAll('.carta');
        cartas.forEach(carta => {
          carta.style.opacity = "0";
          carta.style.zIndex = "-4";
        });
      });
    }
  }
  function mostrarDiv(divId, boton) {
    
    const contenedor = boton.closest('.contenedor');
    const divs = contenedor.querySelectorAll('.ocultodiv');
    divs.forEach(div => div.style.display = 'none');
    const divMostrar = contenedor.querySelector(`#${divId}`);
    divMostrar.style.display = 'block';
  }
  
  
  