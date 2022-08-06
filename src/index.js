import './css/styles.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('input#search-box');
const countryListRef = document.querySelector('.country-list');
const countryInfoRef = document.querySelector('.country-info');
let name = inputRef.value.trim();

inputRef.addEventListener(
  'input',
  debounce(() => {
    fetchCountries(name);
  }, DEBOUNCE_DELAY)
);

refs.searchBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));
function onSearch(e) {
  e.preventDefault();
  if (refs.searchBox.value.trim() !== '') {
    const searchQery = refs.searchBox.value.trim();
    fetchCountries(searchQery)
      .then(renderCountryCard)
      .catch(error =>
        Notiflix.Notify.failure('Oops, there is no country with that name')
      );
  } else {
    refs.cardConteiner.innerHTML = [];
  }
}

function fetchCountries(name) {
  const url = `https://restcountries.com/v3.1/2?fields=name,capital,population,flags,languages`;

  fetch(url)
    .then(response => response.json())
    .then(name => {
      depictShortFormList(name);
    })
    .catch(error => console.log('error'));
}

fetchCountries(name);

function searchCountries(name) {
  name = name.toLowerCase();
  let newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array.innerHTML.toLowerCase().includes(name)) {
      newArray = newArray.push(i);
    }
  }
}

const createShortForm = item =>
  `<li><img src="${item.flags[0]}" alt="${
    item.name.official ? item.name.official : ''
  }" width=100><p>${item.name.official ? item.name.official : ''}</p></li>`;

const createFullForm = ({ flags, name, capital, population, languages }) =>
  `<ul>
<li><img src="${flags ?? ''}" alt="${name ?? ''}"><p>${name ?? ''}</p></li>
<li>Capital: ${capital ?? ''}</li>
<li>Population: ${population ?? ''}</li>
<li>Languages: ${languages ?? ''}</li>
    </ul>`;

const createShortFormList = array => {
  return array.reduce((acc, item) => acc + createShortForm(item), '');
};

const depictShortFormList = array => {
  const result = createShortFormList(array);
  countryListRef.insertAdjacentHTML('beforeend', result);
};

const depictFullFormList = array => {
  const result = createFullForm(array);
  countryInfoRef.insertAdjacentHTML('beforeend', result);
};

// function inputFunctionality (array) {
//     if (array.length = 1) {
//         depictFullFormList()
//     } else (array.length >= 2 && array.length <= 9) {
//         depictShortFormList()
//     } else (array.length > 10) {
//         console.log("Too many matches found. Please enter a more specific name.")
//     }
//     console.log("Oops, there is no country with that name");
// }
