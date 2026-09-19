// Ocultar sobre y activar música al dar clic
function abrirInvitacion() {
  const sobre = document.getElementById('pantalla-sobre');
  const invitacion = document.getElementById('invitacion');
  const musica = document.getElementById('musica-fondo');

  sobre.style.opacity = '0';
  setTimeout(() => {
    sobre.style.display = 'none';
    invitacion.classList.remove('oculto');
    musica.play().catch(() => console.log("El navegador bloqueó la reproducción automática."));
  }, 800);
}

// Contador Regresivo
const fechaEvento = new Date('Feb 21, 2026 19:30:00').getTime();

const intervalo = setInterval(() => {
  const ahora = new Date().getTime();
  const restante = fechaEvento - ahora;

  if (restante < 0) {
    clearInterval(intervalo);
    document.getElementById('reloj').innerText = "¡Llegó el día!";
    return;
  }

  document.getElementById('dias').innerText = Math.floor(restante / (1000 * 60 * 60 * 24));
  document.getElementById('horas').innerText = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById('minutos').innerText = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById('segundos').innerText = Math.floor((restante % (1000 * 60)) / 1000);
}, 1000);