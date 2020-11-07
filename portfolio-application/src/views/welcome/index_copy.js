import { LitElement, html } from 'lit-element';
import { registerTranslateConfig, translate} from "lit-translate";
registerTranslateConfig({
  loader: lang => fetch(`/src/locales/${lang}/application.json`).then(res => res.json())
});

export class ViewWelcomeIndexCopy extends LitElement {
  render() {
    return html`
      <h1>${translate("views.welcome.index_copy.welcome")}</h1>
    `
  }
}
customElements.define('view-welcome-index-copy', ViewWelcomeIndexCopy)