import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const name = '';
const inputRef = document.querySelector('#search-box');
inputRef.addEventListener('input', fetchCountries(name));

function fetchCountries(name) {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log('Error!'));
}

export { data };
import { data } from './fetchCountries.js';
