const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const middleOfScreen = windowHeight / 2;

  reveals.forEach((e) => {
    const rect = e.getBoundingClientRect();
    const isVisible = rect.top < middleOfScreen && rect.bottom > 0;

    e.classList.toggle('reveal_active', isVisible);
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);