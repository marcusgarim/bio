// Animação
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
  setTimeout(() => {
    card.style.opacity = '1';
    card.style.animationDelay = `${index * 0.2}s`; 
  }, 100);
});