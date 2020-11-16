import { LitElement, html, css } from 'lit-element'
import { settingsButtonImage } from './settings-button-image.js'
import { headerStyles } from './PortfolioApplication.js'
import { use } from 'lit-translate'
import "@github/details-menu-element"

export const settingsButton = html`
  <button class="menu-icon" tabindex="0" aria-label="Settings" roll="button">
    ${settingsButtonImage}
  </button>
`;

export const languageMenu = html`
  <details
    role="menu"
    style="cursor:default;border:1px black solid;bord-radius:1px;background:#fff;"
  >
    <summary tabindex="0" aria-label="language">
      language <span data-menu-button></span>
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
  <details-menu role="menu" class="dropdown-menu dropdown-menu-sw">
    ${languageMenu}
    <button type="button" role="menuitem">
      Display Preferences (in progress)
    </button>
  </details-menu>
`;

export class SettingsDropDownButton extends LitElement {
  static get styles() {
    return [
      headerStyles,
      css`
        :host {
          --color-bg-overlay: #aaa;
          --color-border-overlay: #aaa;
          --color-dropdown-shadow: #aaa;
          --color-border-overlay: #aaa;
          --thickness-border-overlay: 1px;
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
        .dropdown-menu {
          position: fixed;
          right: 10px;
          z-index: 100;
          width: auto;
          padding-top: 4px;
          padding-bottom: 4px;
          margin-top: 2px;
          list-style: none;
          background-color: var(--color-bg-overlay);
          background-clip: padding-box;
          border: var(--thickness-border-overlay) solid
            var(--color-border-overlay);
          border-radius: 6px;
          box-shadow: var(--color-dropdown-shadow);

          display: flex;
          flex-direction: column;
          width: clamp(10ch, 40ch, 50vw)
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
