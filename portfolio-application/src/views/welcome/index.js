import { LitElement, html } from 'lit-element';
import { registerTranslateConfig, translate, use} from "lit-translate";
registerTranslateConfig({
  loader: lang => fetch(`/src/locales/${lang}/application.json`).then(res => res.json())
});

export class ViewWelcomeIndex extends LitElement {
  render() {
    return html`
      <h1>${translate("views.welcome.index.welcome") || "Welcome"}</h1>
    `
  }
}
customElements.define('view-welcome-index', ViewWelcomeIndex)