import { L as LitElement, h as html, t as translate, l as localeConfig } from './locale.js';

let _=t=>t,_t;class ViewStandardError404 extends LitElement{render(){return html(_t||(_t=_`
      <h1>${0}</h1>
    `),translate("views.standard.error_404.main"));}}customElements.define('view-standard-error_404',ViewStandardError404);localeConfig.initialize();

export { ViewStandardError404 };
