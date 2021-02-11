import { LitElement, html, css, TemplateResult } from "lit-element";
import { sidebarCollapseButton } from "./sidebar-collapse-button.js";
import { classMap } from "lit-html/directives/class-map";
import { router } from "/src/router.js";
import { use } from "lit-translate";
import { localeConfig } from "/src/locale.js";
import { navigationMenu } from "/src/components/navigation.js";

export const sharedStyles = css`
  * {
    font-family: "Hiragino Kaku Gothic Pro W3", "Hiragino Kaku Gothic ProN",
      Meiryo, sans-serif;
  }

  .inner-host {
    padding: 6px;
    box-sizing: border-box;
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: fit-content(50%) 1fr;
    grid-template-rows: min-content 1fr min-content;
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
    gap: 1px;
  }
  .inner-host.no_sidebar {
    grid-template-areas:
      "header header"
      "main main"
      "footer footer";
  }
  .inner-host.no_sidebar .app-sidebar {
    display: none;
  }
  .app-header {
    grid-area: header;
    align-items: center;
    flex: 1 1 auto;
    display: flex;
    border-bottom: 1px ridge grey;
    padding: 1px;
  }
  .app-sidebar {
    grid-area: sidebar;
    background: #aaa;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    word-break: break-word;
  }
  .app-main {
    grid-area: main;
    overflow: auto;
    padding: 2px;
    /* border-left: 3px ridge grey; */
  }
  .app-footer {
    grid-area: footer;
    font-size: min(calc(1rem + 0.5vmin), 5vmin);
    text-align: center;
    border-top: 3px ridge grey;
  }
  .menu-icon-container {
    box-sizing: border-box;
    padding: 0px;
    border: 0px;
    margin: 0px;
  }
  .menu-icon {
    display: flex;
    padding: min(0.5rem, 1vw);
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #ccc;
    box-sizing: border-box;
    width: min(calc(1.5rem + 2px + min(1rem, 2vw)), 10vw);
    /* The sizes (1.5rem, 2px, min(1rem, 2vw)) come from a sensible base icon size, padding, border-width respectively. */
  }
  .menu-icon:focus {
    border-color: black;
    background: #bbb;
  }
  .menu-icon:hover {
    background: #bbb;
  }
  .menu-icon:active {
    background: #aaa;
  }
  .route-primary {
    width: 100%;
    border-bottom: 1px solid grey;
  }
  .route {
    background-color: rgba(220, 220, 220, 0.3);
  }
  .route:hover {
    background-color: rgba(10, 15, 30, 0.2);
  }
`;

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
      sharedStyles
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