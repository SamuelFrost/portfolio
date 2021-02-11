import { LitElement, html } from 'lit-element';
import { translate, translateUnsafeHTML } from "lit-translate";
import { localeConfig } from '/src/locale.js';
export class ViewProjectsPortfolioIndex extends LitElement {
  render() {
    return html`
      <div style="padding:10%;padding-top:0;">
      <h1>${translate("views.projects.portfolio.index.title")}</h1>
        <h2>${translate("views.projects.portfolio.index.why_worth_mentioning")}</h2>
        <p>${translateUnsafeHTML("views.projects.portfolio.index.no_framework_native_apis")}</p>
        <p>${translateUnsafeHTML("views.projects.portfolio.index.no_framework_benefits")}</p>
        <h2>${translate("views.projects.portfolio.index.scalability")}</h2>
        <p>${translate("views.projects.portfolio.index.pre-rendering")}</p>
        <p>${translate("views.projects.portfolio.index.spa_scalability")}</p>
        <h2>${translate("views.projects.portfolio.index.web_vitals_and_metrics")}</h2>
        <p>${translate("views.projects.portfolio.index.web_vitals_explanation")} <br><a href="https://web.dev/vitals/">https://web.dev/vitals/</a></p>
        <p>${translate("views.projects.portfolio.index.web_vitals_tools")} <br>
        ${translate("views.projects.portfolio.index.web_vitals_measure_try_it_yourself")}<a href="https://web.dev/measure/">https://web.dev/measure/</a></p>
        <p>${translate("views.projects.portfolio.index.my_web_vitals")}</p>
        <img style="width:100%" src="https://storage.googleapis.com/portfolio-media/web_dev_measure_${translate('common.short_language')}.jpg">
        <p>${translate("views.projects.portfolio.index.my_web_vitals_personal_usefulness")}</p>
        <h2>${translate("views.projects.portfolio.index.project_management")}</h2>
        <p>${translate("views.projects.portfolio.index.project_management_asana")}</p>
        <img style="width:100%" src="https://storage.googleapis.com/portfolio-media/asana_planning_${translate('common.short_language')}.jpg">
        <h2>${translate("views.projects.portfolio.index.the_future_of_this_project_and_the_web")}</h2>
        <p>${translate("views.projects.portfolio.index.pwa")}</p>
        <p>${translate("views.projects.portfolio.index.web_development_future")}</p>

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
customElements.define('view-projects-portfolio-index', ViewProjectsPortfolioIndex)

localeConfig.initialize();
