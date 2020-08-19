import refs from './refs.js';

export default {
  enable() {
    refs.btn.disabled = false;
    refs.label.textContent = 'Load more';
    refs.spinner.classList.add('is-hidden');
  },
  disable() {
    refs.btn.disabled = true;
    refs.label.textContent = 'Loading...';
    refs.spinner.classList.remove('is-hidden');
  },
  show() {
    refs.btn.classList.remove('is-hidden');
  },
};
