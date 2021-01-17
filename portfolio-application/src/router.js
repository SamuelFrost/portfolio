import {Router} from '@vaadin/router';
import { LitElement, html } from "lit-element";

// const outlet = document.querySelector('portfolio-application').shadowRoot.querySelector('.app-main');
export const router = new Router();
router.setRoutes([
  {
    name: "home",
    path: "/",
    component: "view-welcome-index",
    action: async () => {
      await import("/src/views/welcome/index.js");
    },
  },
  {
    name: "schedule",
    path: "/schedule",
    component: "view-schedule-index",
    action: async () => {
      await import("/src/views/schedule/index.js");
    },
  },
  {
    path: "(.*)",
    component: "view-standard-error_404",
    action: async () => {
      await import("/src/views/standard/error_404.js");
    },
  },
]);

/**
 * A layer on top of the normal anchor link that can generate appropriate hrefs without the need for relative paths
 *
 * @param {String}  href      URL to be utilized in the anchor tag. Will be prioritized over routePath or routeName.
 * @param {String}  routeName The route name as defined by the name field of the router's defined routes. Will be prioritized over routePath.
 * @param {String}  routePath The route path as defined by the path field of the router's defined routes. (Doesn't work with regex)
 *
 */
export class RouterLink extends LitElement {
  static get properties() {
    return {
      routeName: { type: String },
      routePath: { type: String },
      href: { type: String, reflect: true },
    };
  }
  constructor(href, routeName, routePath) {
    super();
    this.href = href;
    this.routeName = routeName;
    this.routePath = routePath;
  }

  render() {
    if (
      typeof this.href === "undefined" &&
      typeof this.routeName === "string"
    ) {
      try {
        this.href = router.urlForName(this.routeName);
      } catch (error) {
        console.log(`invalid navigation link routeName: ${this.routeName}`);
        console.log(`${error}`);
      }
    }
    if (typeof this.href === "undefined" && typeof routePath === "string") {
      try {
        this.href = router.urlForPath(this.routePath);
      } catch (error) {
        console.log(`invalid navigation link routePath: ${this.routePath}`);
        console.log(`${error}`);
      }
    }
    return html`
      <a href="${this.href}">
        <slot></slot>
      </a>
    `;
  }
}