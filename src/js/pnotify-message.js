import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function messageError() {
  error({
    title: 'Too many matches found.Please enter a mare specific query!',
    delay: 600,
  });
}
export default messageError;
