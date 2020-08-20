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
  const queryInput = event.target.value.trim();
  if (queryInput === '') {
    return;
  }
  cleanContainerGallery();
  apiService.query = queryInput;
  apiService.resetPage();
  fetchRequest();
}
function cleanContainerGallery() {
  refs.gallery.innerHTML = '';
}

function fetchRequest() {
  loadMoreBtn.enable(true, 'Loading...');
  apiService.fetchGallery().then(hits => {
    loadMoreBtn.show();
    loadMoreBtn.enable(false, 'Load more');
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
