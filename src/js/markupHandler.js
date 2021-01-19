import countryMarkupTpl from '../templates/countryMarkup.hbs';
import countriesListTpl from '../templates/countriesList.hbs';
import refs from './refs'
import { error, notice } from './pnotify';

function updateMarkup(countries) {
if (countries.length === undefined) {
    error({
        title:
            'Такой страны не существует. Пожалуйста, уточните запрос!',
        hide: true,
        delay: 2000
    });
}
else if (countries.length > 1 && countries.length < 11) {
    let markup = countriesListTpl(countries);
    refs.outputContainer.insertAdjacentHTML('beforeend', markup);
  }
else if (countries.length === 1) {
    let markup1 = countryMarkupTpl(countries);
    console.log(markup1)
    refs.outputContainer.insertAdjacentHTML('beforeend', markup1);
}
 else {
    notice({
      title: 'Найдено слишком много совпадений. Пожалуйста, уточните запрос!',
      hide: true,
      delay: 2000
    });
  }
}
export default updateMarkup