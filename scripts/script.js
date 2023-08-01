// JavaScript para agregar interactividad a las preguntas frecuentes

const preguntas = document.querySelectorAll('.pregunta');

preguntas.forEach((pregunta) => {
  pregunta.addEventListener('click', () => {
    pregunta.classList.toggle('active');
  });
});