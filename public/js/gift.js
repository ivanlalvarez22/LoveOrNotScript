$(document).ready(function () {
  let valentinesDayClicked = false;

  // Al cargar la página, ocultamos las cortinas
  $(".left-curtain, .right-curtain").css("width", "0%");

  // Función para mostrar la carta y ocultar los elementos del sobre
  const showCard = () => {
    // Animación de desvanecimiento de los elementos del sobre
    $(".envelope").css("animation", "fall 3s linear 1");
    $(".envelope").fadeOut(800, function () {
      // Ocultar elementos dentro de .valentines-day
      $(
        ".valentines-day .heart, .valentines-day .text, .valentines-day .front"
      ).hide();

      // Hacer visible la carta con una animación ondulante
      $("#card").css({
        visibility: "visible",
        opacity: 0,
        transform: "scale(0.1)",
      });
      $("#card").animate(
        { opacity: 1 },
        {
          duration: 1000,
          step: function (now, fx) {
            const scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
            $(this).css("transform", "scale(" + scale + ")");
          },
        }
      );
    });

    // Se establece la variable en verdadero
    valentinesDayClicked = true;

    // Activar los botones de desplazamiento
    $("#scroll-up-btn").prop("disabled", false);
    $("#scroll-down-btn").prop("disabled", false);
  };

  // Evento de clic en el sobre para mostrar la carta
  $(".valentines-day").click(showCard);

  // Evento de teclado para detectar la pulsación de Enter y redirigir a otra página
  $(document).keypress(function (event) {
    if (event.which === 13) window.location.href = "/";
  });

  // Función para desplazar la carta hacia arriba
  const scrollCardUp = () => {
    const card = document.getElementById("card");
    let currentTop = parseInt(card.style.top) || 0;
    const scrollAmount = 30;
    currentTop = Math.max(-500, currentTop - scrollAmount); // Restricción superior
    card.style.top = currentTop + "px";
  };

  // Evento de clic en el botón para desplazar la carta hacia arriba
  $("#scroll-down-btn").click(function () {
    if (valentinesDayClicked) {
      scrollCardUp();
    }
  });

  // Función para desplazar la carta hacia abajo
  const scrollCardDown = () => {
    const card = document.getElementById("card");
    let currentTop = parseInt(card.style.top) || 0;
    const scrollAmount = 30;
    currentTop = Math.min(250, currentTop + scrollAmount); // Restricción inferior
    card.style.top = currentTop + "px";
  };

  // Evento de clic en el botón para desplazar la carta hacia abajo
  $("#scroll-up-btn").click(function () {
    if (valentinesDayClicked) {
      scrollCardDown();
    }
  });
});

window.onload = function () {
  // Reproducir el sonido del piano cuando la página se carga completamente
  const piano = document.getElementById("piano");
  piano.play();
};
