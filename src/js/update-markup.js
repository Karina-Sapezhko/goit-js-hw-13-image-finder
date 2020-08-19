import refs from './refs.js';
import cardTemplate from '../templates/photo-card.hbs';
import messageError from './pnotify-message.js';

function updateMarkup(data) {
  if (data.length === 0) {
    messageError();
  }
  let cardMapkup = cardTemplate(data);
  refs.gallery.insertAdjacentHTML('beforeend', cardMapkup);
}
export default updateMarkup;
