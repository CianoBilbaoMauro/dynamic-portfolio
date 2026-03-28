function escribirTexto(texto, callback) {
  const elemento = document.getElementById("texto-inicial");
  elemento.innerText = "";

  let i = 0;

  const intervalo = setInterval(() => {
    elemento.innerText += texto[i];
    i++;

    if (i >= texto.length) {
      clearInterval(intervalo);

      if (callback) callback();
    }
  }, 200);
}

function iniciarBarra() {
  document.querySelector(".barra").style.display = "block";
  document.getElementById("porcentaje").style.display = "block";


  let progreso = 0;
  const barra = document.getElementById("progreso");
  const porcentaje = document.getElementById("porcentaje");

  const intervalo = setInterval(() => {
    progreso += 2;

    barra.style.width = progreso + "%";
    porcentaje.innerText = progreso + "%";

    if (progreso >= 100) {
      clearInterval(intervalo);

      document.getElementById("texto-inicial").innerText = "Sistema listo ✔";
      document.getElementById("btn-comenzar").style.display = "block";
      document.getElementById("cursor").style.display = "none";
    }

  }, 100);
}

/* INICIO */
escribirTexto("CARGANDO MÓDULOS...", iniciarBarra);
