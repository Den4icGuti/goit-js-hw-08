import simpleLightbox from 'simplelightbox';
import '../../node_modules/simplelightbox/dist/simple-lightbox.min.css'
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const marCupGallery = galleryMarcup();

galleryRef.insertAdjacentHTML('beforeend', marCupGallery);

function galleryMarcup() { 
  return galleryItems.map(({ preview, original, description }) => {
    return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
 `
   }).join('')
};

let gallery = new simpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });