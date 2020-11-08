import { LitElement, html } from 'lit-element';
import { translate } from "lit-translate";
import { localeConfig } from '/src/locale.js';
export class ViewWelcomeIndex extends LitElement {
  render() {
    return html`
      <h1>${translate("views.welcome.index.welcome")}</h1>
    `
  }
}
customElements.define('view-welcome-index', ViewWelcomeIndex)

localeConfig.initialize();
