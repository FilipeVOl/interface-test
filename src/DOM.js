import firstCar from './image/firstcar.png';
import secondCar from './image/secondcar.png';
import thirdCar from './image/thirdcar.png';

const toggleItemList = (container, itemList) => {
  itemList.style.display = itemList.style.display === 'block' ? 'none' : 'block';

  if (itemList.style.display === 'block') {
    const liCount = itemList.querySelectorAll('li').length;
    const liHeight = 40;
    const maxHeight = 200;

    if (liCount * liHeight > maxHeight) {
      itemList.style.overflowY = 'scroll';
    } else {
      itemList.style.overflowY = 'initial';
    }
  }
};

const clickAccessories = () => {
  const accessContainer = document.querySelector('.access-container');
  const itemList = document.querySelector('.item-list');
  const navArrow = document.querySelector('.arrow');

  accessContainer.addEventListener('click', () => {
    accessContainer.style.cursor = 'pointer';
    toggleItemList(accessContainer, itemList);
  });
  accessContainer.addEventListener('mouseover', () => {
    accessContainer.style.cursor = 'pointer';
  });

  navArrow.addEventListener('click', () => {
    navArrow.style.cursor = 'pointer';
    toggleItemList(navArrow, itemList);
  });
  navArrow.addEventListener('mouseover', () => {
    navArrow.style.cursor = 'pointer';
  });
};

export const setImageCarousel = () => {
  const content = document
    .querySelector('.content');

  const img = document
    .createElement('img');
  img.setAttribute('id', 'left-div');
  img.src = firstCar;
  img.classList.add('img');

  const img2 = document
    .createElement('img');
  img2.setAttribute('id', 'center-div');
  img2.src = secondCar;
  img2.classList.add('img');

  const img3 = document
    .createElement('img');
  img3.setAttribute('id', 'right-div');
  img3.src = thirdCar;
  img3.classList.add('img');

  const imgArrowsDiv = document.createElement('div');
  imgArrowsDiv.classList.add('arrows-div');

  const chevronleft = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  chevronleft.classList.add('left');
  chevronleft.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  chevronleft.setAttribute('height', '24');
  chevronleft.setAttribute('viewBox', '0 -960 960 960');
  chevronleft.setAttribute('width', '24');
  const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathElement.setAttribute('d', 'M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z');
  chevronleft.appendChild(pathElement);

  const chevronright = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  chevronright.classList.add('right');
  chevronright.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  chevronright.setAttribute('height', '24');
  chevronright.setAttribute('viewBox', '0 -960 960 960');
  chevronright.setAttribute('width', '24');
  const pathElement2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathElement2.setAttribute('d', 'M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z');
  chevronright.appendChild(pathElement2);

  content.appendChild(img);
  content.appendChild(img2);
  content.appendChild(img3);
  content.appendChild(imgArrowsDiv);
  imgArrowsDiv.appendChild(chevronleft);
  imgArrowsDiv.appendChild(chevronright);
};

export const moveImages = (direction) => {
  const img = document.querySelector('#left-div');
  const img2 = document.querySelector('#center-div');
  const img3 = document.querySelector('#right-div');

  // Define a transição inicial nos elementos
  img.style.transition = 'transform 0.5s ease-in';
  img2.style.transition = 'transform 0.5s ease-in';
  img3.style.transition = 'transform 0.5s ease-in';

  if (direction === 'left') {
    // Movimento para a esquerda
    const tempTransform = img.style.transform;
    img.style.transform = img2.style.transform;
    img2.style.transform = img3.style.transform;
    img3.style.transform = tempTransform;

    setTimeout(() => {
      const tempSrc = img.src;
      img.src = img2.src;
      img2.src = img3.src;
      img3.src = tempSrc;
    }, 100);
  } else if (direction === 'right') {
    // Movimento para a direita
    const tempTransform = img3.style.transform;
    img3.style.transform = img2.style.transform;
    img2.style.transform = img.style.transform;
    img.style.transform = tempTransform;

    setTimeout(() => {
      const tempSrc = img3.src;
      img3.src = img2.src;
      img2.src = img.src;
      img.src = tempSrc;
    }, 100);
  }
};

export const Arrows = () => {
  const chevronLeft = document.querySelector('.left');
  const chevronRight = document.querySelector('.right');

  chevronLeft.addEventListener('click', () => {
    moveImages('left');
  });

  chevronRight.addEventListener('click', () => {
    moveImages('right');
  });
};

export const fiveSeconds = () => {
  setInterval(() => {
    moveImages('right');
  }, 5000);
};

export default clickAccessories;
