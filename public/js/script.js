const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const intentos = document.getElementById("intentos");
const btnGift = document.getElementById("btnGift");
const btnML = document.getElementById("btnML");
let vecesActivado = 0;

const mostrarMje = () => {
  alert("Yo también te voy a amar siempre, amor de mi vida!!! 😍😍❤❤");
};

const resetearPosicionOriginal = () => {
  btnNo.style.position = "static";
  btnNo.style.left = "initial";
  btnNo.style.top = "initial";
};

const moverBoton = () => {
  const anchoVentana = window.innerWidth - 125;
  const altoVentana = window.innerHeight - 75;

  const newX = Math.random() * anchoVentana + "px";
  const newY = Math.random() * altoVentana + "px";

  btnNo.style.position = "absolute";
  btnNo.style.left = newX;
  btnNo.style.top = newY;

  vecesActivado++;
  intentos.textContent = vecesActivado;

  if (vecesActivado % 5 === 0) {
    resetearPosicionOriginal();
  }

  if (vecesActivado % 10 === 0) {
    alert("¿Por qué no me amas? 😭💔💔💔");
  }
};

const animarBoton = () => {
  btnGift.style.fontSize = "32px";
  btnGift.style.background = "linear-gradient(90deg, red, #ff9494)";

  setTimeout(() => {
    btnGift.style.fontSize = "26px";
    btnGift.style.background = "linear-gradient(90deg, #ff9494, red)";
  }, 1000);
};

const cambiarPagina = () => {
  window.open("http://www.mercadolibre.com.ar", "blank");
};

setInterval(animarBoton, 2000);
