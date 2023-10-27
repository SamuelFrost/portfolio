import { LitElement, html, css } from 'lit-element'
import { settingsButtonImage } from './settings-button-image.js'
import { use, translate } from "lit-translate";
import "@github/details-menu-element"
import { fonts, menuIcons } from './styling/golden-layout-styling.js';

export const settingsButton = html`
  <button class="menu-icon" tabindex="0" aria-label="Settings" roll="button">
    ${settingsButtonImage}
  </button>
`;

export const languageMenu = html`
  <details
    role="menu"
  >
    <summary tabindex="0" aria-label="language">
      Language <span data-menu-button></span>
    </summary>
    <details-menu role="menu">
      <button
        type="button"
        role="menuitem"
        data-menu-button-text
        @click="${() => {
          use("en-us");
        }}"
      >
        English
      </button>
      <button
        type="button"
        role="menuitem"
        data-menu-button-text
        @click="${() => {
          use("en-pirate");
        }}"
      >
        Pirate
      </button>
      <button
        type="button"
        role="menuitem"
        data-menu-button-text
        @click="${() => {
          use("ja-jp");
        }}"
      >
        日本語
      </button>
    </details-menu>
  </details>
`;
export const settingsDetailsMenu = html`
  <details-menu role="menu" class="dropdown-menu">
    ${languageMenu}
    <button type="button" role="menuitem">
      ${translate("settings.display_preferences")} (${translate("common.in_progress")})
    </button>
  </details-menu>
`;

export class SettingsDropDownButton extends LitElement {
  static get styles() {
    return [
      fonts,
      menuIcons,
      css`
        :host {
          --settings-dropdown-bg-color: var(--menu-bg-color, #aaa);
          --settings-dropdown-border-color: red; //var(--menu-bg-color, #aaa)
          --settings-dropdown-shadow-color: var(--menu-bg-color, #aaa);
          --settings-dropdown-border-: 1px;
        }
        .details-reset > summary {
          list-style: none;
        }
        .details-reset > summary::before {
          display: none;
        }
        .details-reset > summary::-webkit-details-marker {
          display: none;
        }
        details-menu>*{
          cursor: default;
          border: 1px black solid;
          margin: 1px;
          border-radius: 3px;
        }
        details[role="menu"] {
          background-color: var(--global-bg-color);
        }
        .dropdown-menu {
          position: fixed;
          right: 10px;
          z-index: 100;
          width: auto;
          padding-top: 4px;
          padding-bottom: 4px;
          margin-top: 2px;
          list-style: none;
          background-color: var(--settings-dropdown-bg-color);
          background-clip: padding-box;
          border-style: solid;
          border-color: black;
          border-width: 1px;
          border-radius: 6px;
          box-shadow: var(--settings-dropdown-shadow);

          display: flex;
          flex-direction: column;
          width: clamp(10ch, 40ch, 50vw);
        }
      `,
    ];
  }
  render() {
    return html`
      <details class="menu-icon-container details-reset">
        <summary
          class="menu-icon"
          tabindex="0"
          aria-label="Settings"
          aria-haspopup="menu"
        >
          ${settingsButtonImage}
        </summary>
          ${settingsDetailsMenu}
      </details>
    `;
  }
}
