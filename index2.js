import { L as LitElement, h as html, t as translate, l as localeConfig } from './locale.js';

let _=t=>t,_t;class ViewScheduleIndex extends LitElement{render(){return html(_t||(_t=_` <h1>${0}</h1>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=Y19lZjY1NzRjcGdzY2ZqbzliYTIxcW0wZmg3MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%238E24AA&amp;color=%239E69AF&amp;hl=${0}"
        style="border:solid 0px #777"
        width="100%"
        height="1000"
        frameborder="0"
        scrolling="no"
      ></iframe>`),translate("views.schedule.index.long_title"),translate("common.short_language"));}}customElements.define("view-schedule-index",ViewScheduleIndex);localeConfig.initialize();

export { ViewScheduleIndex };
