// Obtener referencia al botón NO
const btnNo = document.getElementById("BtnNo");
// Obtener referencia al botón SI
const btnSi = document.getElementById("BtnSi");
mostrarMje = () => {
  alert("Yo tambien te voy a amar siempre amor de mi vida!!!");
};

// Función para mover el botón aleatoriamente
moverBoton = () => {
  // Calcula posiciones aleatorias dentro de la ventana
  const windowWidth = window.innerWidth - btnNo.clientWidth;
  const windowHeight = window.innerHeight - btnNo.clientHeight;

  const newX = Math.random() * windowWidth;
  const newY = Math.random() * windowHeight;

  // Aplica las nuevas posiciones al estilo del botón
  btnNo.style.left = newX + "px";
  btnNo.style.top = newY + "px";
  btnNo.style.position = "absolute";
};

// Agrega el evento onmouseover al botón "No"
btnNo.addEventListener("mouseover", moverBoton);
