import refs from './refs.js';

export default {
  enable(boole, str) {
    refs.btn.disabled = boole;
    refs.label.textContent = str;
    refs.spinner.classList.toggle('is-hidden');
  },
  show() {
    refs.btn.classList.remove('is-hidden');
  },
};
