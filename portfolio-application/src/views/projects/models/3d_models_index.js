import { LitElement, html } from "lit-element";
import { ModelViewerElement } from '@google/model-viewer'
import { translate } from "lit-translate";
import { localeConfig } from "/src/locale.js";

export class ViewModelIndex extends LitElement {
  static get properties(){
    return {
      model_url: {type: String}
    }
  }
  constructor(){
    super();
    this.model_url = "https://storage.googleapis.com/portfolio-media/my_balcony.glb";
  }
  render() {
    return html`
      <div
        style="width:100%;height:100%;display:grid;grid-template-rows: min-content 1fr;"
      >
        <div>
          <select style="width:100%" @change=${e => this._load_model(e.target.value)}>
            <option
              value="https://storage.googleapis.com/portfolio-media/my_balcony.glb"
            >
              ${translate(
                "views.projects.models.3d_models_index.object_title_balcony"
              )}
            </option>
            <option
              value="https://storage.googleapis.com/portfolio-media/real_estate_development_project_3d_model.glb"
            >
              ${translate(
                "views.projects.models.3d_models_index.object_title_house"
              )}
            </option>
            <option
              value="https://storage.googleapis.com/portfolio-media/my_balcony.glb"
            >
              ${translate("common.in_progress")}
            </option>
          </select>
        </div>
        <model-viewer
          style="width:100%;height:100%;"
          src="${this.model_url}"
          camera-controls
        >
        </model-viewer>
      </div>
    `;
  }
  _load_model(url) {
    this.model_url = url;
  }
}
customElements.define("view-model-index", ViewModelIndex);

localeConfig.initialize();
