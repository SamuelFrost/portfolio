
import { css } from "lit-element";

export const fonts = css`
  * {
    font-family: "Hiragino Kaku Gothic Pro W3", "Hiragino Kaku Gothic ProN",
      Meiryo, sans-serif;
    color: var(--text-color, revert);
  }
  a{
    color: var(--link-text-color, revert);
  }
  a:visited{
    color: var(--visited-visited-text-color, revert)
  }
`;

export const layout = css`
  * {
    box-sizing: border-box;
  }
  .inner-host {
    border-style: solid;
    border-width: min(4px, 1vmin);
    border-color: rgba(200, 220, 220, 0.3);
    background-color: var(--global-bg-color, #aaa);
    padding: min(4px, 1vmin);
    box-sizing: border-box;
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: max(min(160px, 50%), 20%) 1fr;
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
  @media (max-width: 504px) {
    .inner-host {
      grid-template-columns: 1fr;
      grid-template-rows: min-content min-content 1fr min-content;
      grid-template-areas:
        "header header"
        "sidebar sidebar"
        "main main"
        "footer footer";
    }
    .inner-host.no_sidebar {
      grid-template-areas:
        "header header"
        "main main"
        "main main"
        "footer footer";
    }
  }
  .inner-host.no_sidebar .app-sidebar {
    display: none;
  }
  .app-header {
    grid-area: header;
    align-items: center;
    flex: 1 1 auto;
    display: flex;
    border-bottom: 1px ridge var(--route-border-color, grey);
    padding: 1px;
  }
  .app-sidebar {
    grid-area: sidebar;
    background: var(--sidebar-bg-color, #aaa);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    word-break: break-word;
  }
  .app-main {
    grid-area: main;
    overflow: auto;
    padding: 2px;
  }
  .app-footer {
    grid-area: footer;
    font-size: min(calc(1rem + 0.5vmin), 5vmin);
    text-align: center;
    border-top: 3px ridge var(--border-color, grey);
  }
`;

export const routes = css`
  .route-primary {
    width: 100%;
    border-bottom: 1px solid var(--border-color, grey);
  }
  .route {
    padding-left: 3px;
    padding-right: 3px;
    background-color: var(--route-bg-color, rgba(220, 220, 220, 0.3));
  }
  .route:hover {
    background-color: var(--route-focus-bg-color, rgba(10, 15, 30, 0.2));
  }
`;

export const menuIcons = css`
  .menu-icon-container {
    box-sizing: border-box;
    padding: 0px;
    border: 0px;
    margin: 0px;
  }
  .menu-icon {
    display: flex;
    padding: min(6px, 1vw);
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: 50%;
    background: var(--icon-bg-color, #ccc);
    text-align: center;
    vertical-align: middle;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-sizing: border-box;
    width: var(--menu-icon-width);
  }

  .menu-icon:focus {
    border-color: var(--menu-icon-focus-border-color, black);
    background: var(--icon-focus-bg-color, #bbb);
  }
  .menu-icon:hover {
    background: var(--icon-focus-bg-color, #bbb);
  }
  .menu-icon:active {
    background: var(--icon-active-bg-color, #aaa);
  }

  :host {
    --menu-icon-width: min(
      calc(24px + 2px + min(12px, 2vw)),
      calc(min(24px, 15vw) + 10vmin)
    );
    /*
      The sizes (24px, 2px, min(12px, 2vw)) come from base icon size, padding, border-width respectively and give a good standard size.
      calc(min(24px, 15vw) + 10vmin gives a floor for super small screens while giving way to the the standard size when it's very large.
    */
  }
`;

export const greyColorScheme = css`
  :host {
    --global-bg-color: #eee;
    --menu-bg-color: #ddd;
    --icon-bg-color: rgba(0, 0, 0, 0.1);
    --icon-focus-bg-color: rgba(0, 0, 0, 0.2);
    --icon-active-bg-color: rgba(0, 0, 0, 0.3);
    --menu-icon-focus-border-color: black;
    --sidebar-bg-color: rgba(0, 0, 0, 0.3);
    --border-color: grey;
    --route-bg-color: rgba(220, 220, 220, 0.3);
    --route-focus-bg-color: rgba(10, 15, 30, 0.2);
    /*
    --text-color:
    --link-text-color:
    --visited-visited-text-color
    */
}
`;

export default [greyColorScheme, fonts, layout, routes, menuIcons];
