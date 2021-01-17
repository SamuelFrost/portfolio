import { html } from "lit-element";
import { translate } from "lit-translate";
import "@github/details-menu-element";

export const navigationMenu = html`
  <router-link class="route route-primary" routeName="home">
    ${translate("views.welcome.index.short_link")}
  </router-link>
  <router-link class="route route-primary" routeName="schedule">
    ${translate("views.schedule.index.short_link")}
  </router-link>
`;

  // <details style="cursor:default;">
  //   <summary>${translate("views.schedule.index.short_link")}</summary>
  //   <router-link class="route route-primary" routeName="schedule">
  //     ${translate("views.schedule.index.short_link")}
  //   </router-link>
  // </details>;