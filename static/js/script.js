/*Para fazer com que o carrossel na homepage se ajuste automaticamente ao ecrã*/
let item = document.querySelectorAll('.carousel-item');
let wHeight = window.innerHeight;

item[0].classList.add('active');
item.forEach((el) => {
  el.style.height = `${wHeight}px`;
  el.classList.add('full-screen');
});

let carouselImages = document.querySelectorAll('.carousel img');
carouselImages.forEach((img) => {
  let src = img.getAttribute('src');
  let color = img.getAttribute('data-color');
  img.parentElement.style.backgroundImage = `url(${src})`;
  img.parentElement.style.backgroundColor = color;
  img.remove();
});

window.addEventListener('resize', function() {
  wHeight = window.innerHeight;
  item.forEach((el) => {
    el.style.height = `${wHeight}px`;
  });
});