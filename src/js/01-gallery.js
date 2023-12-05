import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
const listRef = document.querySelector('.gallery');
const itemsList = galleryItems
  .map(
    element => `
      <li class="gallery__item">
        <a class="gallery__link" href="${element.original}">
          <img
            class="gallery__image"
            src="${element.preview}"
            alt="${element.description}"
          />
          <div class="gallery__caption">${element.description}</div>
        </a>
      </li>`
  )
  .join('');
listRef.innerHTML = itemsList;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
