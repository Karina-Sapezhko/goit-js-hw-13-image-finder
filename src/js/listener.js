import refs from './refs.js';
import updateMarkup from './update-markup.js';
import apiService from './api-service.js';
import loadMoreBtn from './load-more-button.js';
import debounce from 'lodash.debounce';

refs.form.addEventListener(
  'input',
  debounce(event => {
    setInputValue(event);
  }, 600),
);
refs.btn.addEventListener('click', fetchRequest);

function setInputValue(event) {
  // event.preventDefault();
  cleanContainerGallery();
  const queryInput = event.target.value.trim();
  apiService.query = queryInput;
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
    scrollWindow();
  });
}

function scrollWindow() {
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    behavior: 'smooth',
  });
}
