import './css/styles.css'
import apiService from './js/apiService'
import refs from './js/refs'
import {
    updateMarkup,
    addListenerClickOnGallery,
    removeListenerClickOnGallery,
} from './js/gallery'
import scroll from './js/scroll'
import { showNotice, showError } from './js/pnotify'


refs.form.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
    refs.gallery.innerHTML = '';
    removeListenerClickOnGallery();
    const form = event.currentTarget;
    apiService.query = form.elements.item(0).value;
    apiService.resetPage();
    apiService.fetchPicture().then(images => {
            if (images.length === 0) {
                showNotice()
                return
            }
            updateMarkup(images);
            refs.loadBtn.classList.remove('is-hidden');
            scroll();
        })
        .catch(({ message }) => showError(message));
    addListenerClickOnGallery();
    form.reset();
}
refs.loadBtn.addEventListener('click', fetchImg)
function fetchImg() {
    refs.loadBtn.classList.add('.is-hidden')

    apiService
        .fetchPicture()
        .then(images => {
            if (images.length === 0) {
                showNotice()
                return
            }
            updateMarkup(images);
            refs.loadBtn.classList.remove('is-hidden');
            scroll();
        })
        .catch(({ message }) => showError(message));
}
