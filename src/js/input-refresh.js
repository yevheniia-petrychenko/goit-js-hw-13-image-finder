import refs from './refs';
import fetchCountries from './fetch-countries';
import updateMarkup from './markupHandler';

const debounce = require('lodash.debounce');


    function refreshInput(event) {
    const inputValue = event.target.value  
    if (inputValue === '') {
    return;
        }  
    
    refs.outputContainer.innerHTML = '';
    fetchCountries(inputValue).then(updateMarkup);
    }
        
refs.input.addEventListener('input', debounce(refreshInput, 500));