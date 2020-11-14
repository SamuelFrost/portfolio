import { L as LitElement, h as html, t as translate, l as localeConfig } from './locale.js';

let _=t=>t,_t;class ViewWelcomeIndex extends LitElement{render(){return html(_t||(_t=_`
      <h1>${0}</h1>
    `),translate("views.welcome.index.welcome"));}}customElements.define('view-welcome-index',ViewWelcomeIndex);localeConfig.initialize();

export { ViewWelcomeIndex };
