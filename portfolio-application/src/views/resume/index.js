import { LitElement, html } from 'lit-element';
import { translate } from "lit-translate";
import { localeConfig } from '/src/config/locale.js';
export class ViewResumeIndex extends LitElement {
  render() {
    return html`
      <iframe
        style="border:0;margin:0;padding:0;display:block;"
        src="${translate('views.resume.index.resource_url')}"
        width="100%"
        height="100%"
      >
      </iframe>
    `;
  }
}
customElements.define("view-resume-index", ViewResumeIndex);

localeConfig.initialize();
