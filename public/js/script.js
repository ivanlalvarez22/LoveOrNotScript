const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");

let vecesActivado = 0;

const mostrarMje = () => {
  alert("Yo también te voy a amar siempre, amor de mi vida!!! 😍😍❤❤");
};

const resetearPosicionOriginal = () => {
  btnNo.style.left = "initial";
  btnNo.style.top = "initial";
  btnNo.style.position = "static";
};

const moverBoton = () => {
  const anchoVentana = window.innerWidth - btnNo.clientWidth;
  const altoVentana = window.innerHeight - btnNo.clientHeight;

  const newX = Math.random() * anchoVentana;
  const newY = Math.random() * altoVentana;

  btnNo.style.position = "absolute";
  btnNo.style.left = newX + "px";
  btnNo.style.top = newY + "px";

  vecesActivado++;

  if (vecesActivado % 5 === 0) {
    resetearPosicionOriginal();
  }

  if (vecesActivado % 10 === 0) {
    alert("¿Por qué no me amas? 😭💔💔💔");
  }
};
