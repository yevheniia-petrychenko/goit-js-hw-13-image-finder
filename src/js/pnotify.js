import '@pnotify/core/dist/BrightTheme.css';
import { notice, error } from '@pnotify/core';

function showNotice() {
  notice({
    title:
      'По вашему запросу изображений не найдено. Пожалуйста, уточните запрос!',
    delay: 2000,
  });
}

function showError(err) {
  error({
    title: `${err}`,
    delay: 2000,
  });
}

export { showNotice, showError };