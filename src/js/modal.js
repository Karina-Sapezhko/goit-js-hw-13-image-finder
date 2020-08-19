import refs from './refs.js';
import * as basicLightbox from 'basiclightbox';
import styleBasicLightbox from 'basiclightbox/src/styles/main.scss';

refs.gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const largeImg = event.target.dataset.source;
  const largeAlt = event.target.alt;

  const instance = basicLightbox.create(`
    <img src="${largeImg}" alt="${largeAlt}" width="800" height="600">
`);
  instance.show();
}
