import { LitElement, html } from 'lit-element';
import { translate } from "lit-translate";
import { localeConfig } from '/src/locale.js';
export class ViewWelcomeIndex extends LitElement {
  render() {
    return html`
      <div>
        <h2>${translate("views.welcome.index.welcome")}</h2>
        <p>${translate("views.welcome.index.in_progress_statement")}</p>
        <a
          href="https://github.com/SamuelFrost/portfolio/tree/main/portfolio-application"
          >https://github.com/SamuelFrost/portfolio/tree/main/portfolio-application</a
        >
      </div>
    `;
  }
  createRenderRoot() {
    /**
     * Render template without shadow DOM. Note that shadow DOM features like
     * encapsulated CSS and slots are unavailable.
     */
    return this;
  }
}
customElements.define('view-welcome-index', ViewWelcomeIndex)

localeConfig.initialize();
