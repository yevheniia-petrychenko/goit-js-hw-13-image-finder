import refs from './refs';
import showLightbox from './lightBox'
import cardMarkup from '../templates/cardMarkup.hbs'


function updateMarkup(images) {
  refs.gallery.insertAdjacentHTML('beforeend', cardMarkup(images));
}

function addListenerClickOnGallery() {
  refs.gallery.addEventListener('click', onGalleryClick);
}

function removeListenerClickOnGallery() {
  refs.gallery.removeEventListener('click', onGalleryClick);
}

function onGalleryClick(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const image = event.target;
    const srcImgLightbox = image.dataset.src;
    showLightbox(srcImgLightbox);
}

export {
  updateMarkup,
  addListenerClickOnGallery,
  removeListenerClickOnGallery,
};

// const debounce = require('lodash.debounce');


//     function refreshInput(event) {
//     const inputValue = event.target.value  
//     if (inputValue === '') {
//     return;
//         }  
    
//     refs.outputContainer.innerHTML = '';
//     fetchCountries(inputValue).then(updateMarkup);
//     }
        
// refs.input.addEventListener('input', debounce(refreshInput, 500));