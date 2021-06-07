// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
//   Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery');


const makeGalleryEl = array => {

  array.forEach(image => {
    galleryEl.insertAdjacentHTML('afterbegin', '<li></li>');
    const galleryItemEl = galleryEl.querySelector('li');
    const galleryItemImgEl = document.createElement('img');
    galleryItemEl.append(galleryItemImgEl);

    galleryItemImgEl.setAttribute('src', image.url);
    galleryItemImgEl.setAttribute('alt', image.alt);
    
    galleryEl.style.listStyle = 'none';
    galleryEl.style.display = 'flex';
    galleryEl.style.justifyContent = 'space-around';


    galleryItemImgEl.style.width = '500';
    galleryItemImgEl.style.height = '300px';
  })

  return galleryEl;
};

console.log(makeGalleryEl(images));



