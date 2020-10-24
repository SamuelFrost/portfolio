import { html } from 'lit-html';
import { locale } from '/src/locale.js'


locale.add({'welcome': "welcome to me porfolio matey!"});

console.log(locale);
export const view_welcome_index_copy = html`
    <h1>Welcome to me portfolio</h1>
  `