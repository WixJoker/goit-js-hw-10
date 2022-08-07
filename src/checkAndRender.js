import Notiflix from 'notiflix';
import renderList from './renderList';
import { listEl, boxEl } from './refs';
import renderCountryBox from './renderCountryBox';

export default function checkAndRender(list) {
  if (list.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (list.length <= 10 && list.length > 1) {
    listEl.innerHTML = '';
    boxEl.innerHTML = '';
    renderList(list, listEl);
  } else {
    boxEl.innerHTML = '';
    listEl.innerHTML = '';
    renderCountryBox(list, boxEl);
    return;
  }
}
