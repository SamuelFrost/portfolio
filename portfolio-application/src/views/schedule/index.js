import { LitElement, html } from "lit-element";
import { translate } from "lit-translate";
import { localeConfig } from "/src/config/locale.js";
export class ViewScheduleIndex extends LitElement {
  render() {
    return html` <h1>${translate("views.schedule.index.long_title")}</h1>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=Y19lZjY1NzRjcGdzY2ZqbzliYTIxcW0wZmg3MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%238E24AA&amp;color=%239E69AF&amp;hl=${translate("common.short_language")}"
        style="border:solid 0px #777"
        width="100%"
        height="1000"
        frameborder="0"
        scrolling="no"
      ></iframe>`;
  }
}
customElements.define("view-schedule-index", ViewScheduleIndex);
localeConfig.initialize();
