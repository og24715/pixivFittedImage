const image = document.querySelector('.works_display img');
image.style.height = '100vh';

const { y } = image.getBoundingClientRect();

window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo(0, y);
  }, 1);
});
