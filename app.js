const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let counter = 0;
let layer1 = document.querySelector('.layer');
let layer2 = document.querySelector('.layer2');
let preview = Array.from(document.querySelectorAll('.preview'));

next.addEventListener('click', () => {
  counter++;
  carousel();
  layerChange();
});

prev.addEventListener('click', () => {
  counter--;
  carousel();
  layerChange();
});

function carousel() {
  slides.forEach((slide, index) => {
    if (counter === slides.length) {
      counter = 0;
    }
    if (counter < 0) {
      counter = slides.length - 1;
    }

    slide.style.transform = `translateY(-${counter * 100}%)`;
  });
}

// change layer and preview

let shoeLayer = [
  {
    name: 'pink',
    layer1: 'rgba(224, 75, 214, 0.5)',
    layer2: 'rgba(224, 75, 214, 0.7)',
  },
  {
    name: 'black',
    layer1: 'rgba(66, 65, 64, 0.5)',
    layer2: 'rgba(66, 65, 64, 0.7)',
  },
  {
    name: 'yellow',
    layer1: 'rgba(187, 163, 127, 0.5)',
    layer2: 'rgba(187, 163, 127, 0.7)',
  },
  {
    name: 'blue',
    layer1: 'rgba(40, 89, 202, 0.5)',
    layer2: 'rgba(40, 89, 202, 0.7)',
  },
];

function layerChange() {
  preview.forEach((prev, i) => {
    prev.classList.add('fade');
    if (counter === 1) {
      layer1.style.backgroundColor = shoeLayer[1].layer1;
      layer2.style.backgroundColor = shoeLayer[1].layer2;
      preview[1].classList.remove('fade');
    } else if (counter === 2) {
      layer1.style.backgroundColor = shoeLayer[2].layer1;
      layer2.style.backgroundColor = shoeLayer[2].layer2;
      preview[2].classList.remove('fade');
    } else if (counter === 3) {
      layer1.style.backgroundColor = shoeLayer[3].layer1;
      layer2.style.backgroundColor = shoeLayer[3].layer2;
      preview[3].classList.remove('fade');
    } else {
      layer1.style.backgroundColor = shoeLayer[0].layer1;
      layer2.style.backgroundColor = shoeLayer[0].layer2;
      preview[0].classList.remove('fade');
    }
  });
}

preview.forEach((prev, prevIndex) => {
  prev.addEventListener('click', () => {
    slides.forEach((slide) => {
      slide.style.transform = `translateY(-${prevIndex * 100}%)`;
      counter = prevIndex;
      layerChange();
    });
  });
});
