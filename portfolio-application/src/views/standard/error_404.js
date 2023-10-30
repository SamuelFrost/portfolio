import { LitElement, html } from 'lit-element';
import { translate } from "lit-translate";
import { localeConfig } from '/src/config/locale.js';

export class ViewStandardError404 extends LitElement {
  render() {
    return html`
      <h1>${translate("views.standard.error_404.main")}</h1>
    `
  }
}
customElements.define('view-standard-error_404', ViewStandardError404)

localeConfig.initialize();