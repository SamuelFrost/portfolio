import { LitElement, html } from 'lit-element';
import { translate } from "lit-translate";
import { localeConfig } from '/src/locale.js';
export class ViewWelcomeIndex extends LitElement {
  render() {
    return html`
      <div>
        <h2>${translate("views.welcome.index.welcome")}</h2>
        <p>
          ${translate("views.welcome.index.in_progress_statement")}
        </p>
      </div>
    `;
  }
}
customElements.define('view-welcome-index', ViewWelcomeIndex)

localeConfig.initialize();
