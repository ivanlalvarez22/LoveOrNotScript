const btnNo = document.getElementById("BtnNo");
const btnSi = document.getElementById("BtnSi");

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
  const windowWidth = window.innerWidth - btnNo.clientWidth;
  const windowHeight = window.innerHeight - btnNo.clientHeight;

  const newX = Math.random() * windowWidth;
  const newY = Math.random() * windowHeight;

  btnNo.style.left = newX + "px";
  btnNo.style.top = newY + "px";
  btnNo.style.position = "absolute";

  vecesActivado++;

  if (vecesActivado % 5 === 0) {
    resetearPosicionOriginal();
  }

  if (vecesActivado % 10 === 0) {
    alert("¿Por qué no me amas? 😭💔💔💔");
  }
};
