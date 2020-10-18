import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';
import { sidebarCollapseButton } from './sidebar-collapse-button.js';
import { settingsButton } from './settings-button.js';

import { classMap } from 'lit-html/directives/class-map';

const grid_template_areas = {
      'sidebar_closed_css': css`
        :host {
          grid-template-areas:
            "header header"
            "sidebar main"
            "footer footer";
        }`,
      'sidebar_closed_css': css`
        :host {
          grid-template-areas:
            "header header"
            "main main"
            "footer footer";
        }
        .sidebar{
          display: none;
        }`
  };

export class PortfolioApplication extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
      sidebar_closed: { type: Boolean},
      main_content: { type: LitElement},
    };
  }
  
  constructor(){
    super();
    this.sidebar_closed = true;
    this.main_content = html`
      <h1>Welcome to my portfolio</h1>
    `;
    this.classes = {'no_sidebar': this.sidebar_closed}
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
          <button class="menu-icon" tabindex="1" roll="button" @click=${this._toggle_sidebar}>
            ${sidebarCollapseButton}
          </button>
          <div style="flex:1 1 auto; display:flex;"></div>
          <button class="menu-icon" tabindex="2" roll="button" onclick="alert('in progress settings');">
            ${settingsButton}
          </button>
        </div>
        <div class="app-sidebar">
          <ul>
            <div><a>link</a></div>
            <div><a>link</a></div>
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
  _toggle_sidebar(){
    this.sidebar_closed = !this.sidebar_closed;
    this.classes.no_sidebar = this.sidebar_closed;
  }

}
