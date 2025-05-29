document.getElementById('contato-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
});

const projetos = document.querySelectorAll('.projeto');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.6 });

projetos.forEach(projeto => observer.observe(projeto));

const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', e => {
  glow.style.top = `${e.clientY}px`;
  glow.style.left = `${e.clientX}px`;
});