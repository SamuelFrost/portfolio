import { LitElement, html } from 'lit-element';
import { locale } from '/src/locale.js'

import { locale_extention_data } from "/src/locales/en-pirate/views/welcome/index.js";

locale.add(locale_extention_data);
console.log(locale);


export class ViewWelcomeIndexCopy extends LitElement {
  render() {
    return html`
      <h1>${locale.locales.welcome}</h1>
    `
  }
}
customElements.define('view-welcome-index-copy', ViewWelcomeIndexCopy)