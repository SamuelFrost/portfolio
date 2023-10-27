import { LitElement, html, css, TemplateResult } from "lit-element";
import { sidebarCollapseButton } from "./sidebar-collapse-button.js";
import { classMap } from "lit-html/directives/class-map";
import { router } from "/src/router.js";
import { use } from "lit-translate";
import { localeConfig } from "/src/locale.js";
import { navigationMenu } from "/src/components/navigation.js";
import defaultStyles from "./styling/golden-layout-styling.js";

/**
 * Self-contained reactive grid layout with css driven sidbar toggling.
 * I intend to make each section fully customizable.
 * @LitElement
 * @extends HTMLElement
 * @demo https://samuelfrost.github.io/portfolio/
 *
 */
export class PortfolioApplication extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
      sidebar_closed: { type: Boolean },
      main_content: { type: TemplateResult },
    };
  }
  constructor() {
    super();
    this.sidebar_closed = false;
    this.main_content = html`<slot></slot>`;
    this.classes = { no_sidebar: this.sidebar_closed };
    this.outlet = this;
    router.setOutlet(this.outlet);
  }

  static get styles() {
    return [
      defaultStyles
    ];
  }

  render() {
    return html`
      <div class="inner-host ${classMap(this.classes)}">
        <div class="app-header">
          <div class="menu-icon-container">
            <button
              class="menu-icon"
              tabindex="0"
              roll="button"
              aria-label="Side bar toggle"
              @click=${this._toggle_sidebar}
            >
              ${sidebarCollapseButton}
            </button>
          </div>
          <div style="flex:1 1 auto; display:flex;"></div>
          <settings-drop-down-button></settings-drop-down-button>
        </div>
        <div class="app-sidebar">${navigationMenu}</div>
        <main class="app-main">${this.main_content}</main>
        <div class="app-footer">
          Developed by Samuel Frost
          <a href="https://www.linkedin.com/in/samuel-frost-0a8711a3/"
            >LinkedIn</a
          >&nbsp;<a href="https://github.com/SamuelFrost">Github</a>
        </div>
      </div>
    `;
  }
  _toggle_sidebar() {
    this.sidebar_closed = !this.sidebar_closed;
    this.classes.no_sidebar = this.sidebar_closed;
  }
}
localeConfig.initialize();

/*
// Redirect path is currently being set when the 404 page is visited.
// Ideally the server would set this if necessary, but the current web host - github pages - doesn't have much server customizability in this respect.
// This should only occur when a user is accessing a specific page via a url and using the app for the first time, otherwise the service worker should intercept the request
*/
if (sessionStorage.getItem("redirect_pathname") != null) {
  router.render(
    { pathname: sessionStorage.getItem("redirect_pathname") },
    true
  );
  sessionStorage.removeItem("redirect_pathname", "");
}