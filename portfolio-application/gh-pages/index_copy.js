import { L as LitElement, h as html, t as translate, l as localeConfig } from './locale.js';

let _=t=>t,_t;class ViewWelcomeIndexCopy extends LitElement{render(){return html(_t||(_t=_`
      <h1>${0}</h1>
    `),translate("views.welcome.index_copy.welcome"));}}customElements.define('view-welcome-index-copy',ViewWelcomeIndexCopy);localeConfig.initialize();

export { ViewWelcomeIndexCopy };
