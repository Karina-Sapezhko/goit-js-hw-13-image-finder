import refs from './refs.js';
import updateMarkup from './update-markup.js';
import apiService from './api-service.js';
import loadMoreBtn from './load-more-button.js';

refs.form.addEventListener('input', setInputValue);
refs.btn.addEventListener('click', fetchRequest);

function setInputValue(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const queryInput = form.elements.query.value.trim();

  apiService.query = queryInput;
  cleanContainerGallery();
  apiService.resetPage();
  fetchRequest();
}
function cleanContainerGallery() {
  refs.gallery.innerHTML = '';
}

function fetchRequest() {
  loadMoreBtn.disable();
  apiService.fetchGallery().then(hits => {
    loadMoreBtn.show();
    loadMoreBtn.enable();
    updateMarkup(hits);
    scroll();
  });
}

function scroll() {
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    behavior: 'smooth',
  });
}
