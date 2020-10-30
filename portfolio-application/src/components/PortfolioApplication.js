import { LitElement, html, css, TemplateResult } from 'lit-element';
import { sidebarCollapseButton } from './sidebar-collapse-button.js';
import { settingsButton } from './settings-button.js';
import { classMap } from 'lit-html/directives/class-map';
// import { view_welcome_index } from '/src/views/welcome/index.js';
// import { view_welcome_index_copy } from '/src/views/welcome/index_copy.js';
import { router } from '/src/router.js'

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
      sidebar_closed: { type: Boolean},
      main_content: { type: TemplateResult},
    };
  }
  
  constructor(){
    super();
    this.sidebar_closed = true;
    this.main_content = html`<slot></slot>`;
    this.classes = {'no_sidebar': this.sidebar_closed}
    this.outlet = this;
    router.setOutlet(this.outlet);
  }

  static get styles() {
    return css`
      .inner-host{
        padding: 6px;
        box-sizing: border-box;
        display: grid;
        height: 100%;
        width: 100%;
        grid-template-columns: 1fr 4fr;
        grid-template-rows: min-content 1fr min-content;
        grid-template-areas:
          "header header"
          "sidebar main"
          "footer footer";
        gap: 1px;
      }
      .inner-host.no_sidebar{
        grid-template-areas:
          "header header"
          "main main"
          "footer footer";
      }
      .inner-host.no_sidebar .app-sidebar{
        display: none;
      }
      .app-header{
        grid-area: header;
        align-items: center;
        flex: 1 1 auto;
        display: flex;
        border-bottom: 1px ridge grey;
        padding: 1px;
      }
      .app-sidebar{
        grid-area: sidebar;
        background: #aaa;
      }
      .app-main{
        grid-area: main;
        overflow: auto;
        padding: 2px;
        /* border-left: 3px ridge grey; */
      }
      .app-footer{
        grid-area: footer;
        font-size: calc(12px + 0.5vmin);
        text-align: center;
        border-top: 3px ridge grey;
      }
      .menu-icon{
        display: flex;
        padding: .5rem;
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
        /* height: calc(24px + 2px + 1rem); */
      }
      .menu-icon:focus{
        border-color: black;
        background: #bbb;
      }
      .menu-icon:hover{
        background: #bbb;
      }
      .menu-icon:active{
        background: #aaa;
      }
    `;
  }

  render() {
    return html`
      <div class="inner-host ${classMap(this.classes)}">
        <div class="app-header">
          <button class="menu-icon" tabindex="0" roll="button" aria-label="Side bar toggle" @click=${this._toggle_sidebar}>
            ${sidebarCollapseButton}
          </button>
          <div style="flex:1 1 auto; display:flex;"></div>
          <button class="menu-icon" tabindex="0" roll="button" aria-label="Settings" onclick="alert('in progress settings');">
            ${settingsButton}
          </button>
        </div>
        <div class="app-sidebar">
          <ul>
            <div><a href="/">Home</a></div>
            <div><a href="/pictures"> pictures</a></div>
          </ul>
        </div>
        <main class="app-main">
          ${this.main_content}
        </main>
        <div class="app-footer">
          Developed by Samuel Frost
          <a href="https://www.linkedin.com/in/samuel-frost-0a8711a3/">LinkedIn</a>&nbsp;<a href="https://github.com/SamuelFrost">Github</a>
        </div>
      </div>
    `;
    
  }
  _main_content(){
    return this.shadowRoot.querySelector('.app-main')
  }
  _toggle_sidebar(){
    this.sidebar_closed = !this.sidebar_closed;
    this.classes.no_sidebar = this.sidebar_closed;
  }

}
