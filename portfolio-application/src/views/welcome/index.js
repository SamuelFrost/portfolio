import { html } from 'lit-html';
import { locale } from '/src/locale.js'

import { locale_extention_data } from "/src/locales/en-us/views/welcome/index.js";

locale.add(locale_extention_data);

console.log(locale);
export const view_welcome_index = html`
    <h1>${locale.locales.welcome}</h1>
  `