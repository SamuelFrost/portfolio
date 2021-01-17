import { PortfolioApplication } from './components/PortfolioApplication.js';
import { RouterLink } from "/src/router.js";
import { SettingsDropDownButton } from "/src/components/settings.js";

customElements.define('portfolio-application', PortfolioApplication);
customElements.define("settings-drop-down-button", SettingsDropDownButton);
customElements.define("router-link", RouterLink);
