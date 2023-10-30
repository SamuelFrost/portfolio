import { LitElement, html } from "lit-element";
import { ModelViewerElement } from '@google/model-viewer'
import { translate} from "lit-translate";
import { localeConfig } from "/src/config/locale.js";

export class ViewModelIndex extends LitElement {
  static get properties() {
    return {
      model_url: { type: String },
      model_description: { type: String },
    };
  }

  constructor() {
    super();
    this.model_description = this.model_info_array[0].description;
    this.model_url = this.model_info_array[0].url;
  }

  render() {
    return html`
      <div
        style="width:100%;height:100%;display:grid;grid-template-rows: min-content fit-content(20%) 1fr;"
      >
        <div>
          <select
            style="width:100%"
            @change=${(e) =>
              this._load_model(
                e.target.value
              )}
          >
            ${html`${this.model_info_array.map(
              (model_info, index) =>
                html` <option value="${index}" title="${model_info.description}">
                  ${model_info.name}
                </option>`
            )}`}
          </select>
        </div>
        <div style="overflow:auto;">
          ${this.model_description}
        </div>
        <model-viewer
          style="width:100%;height:100%;border:none;"
          src="${this.model_url}"
          camera-controls
        >
        </model-viewer>
      </div>
    `;
  }
  _load_model(index) {
    this.model_url = this.model_info_array[index].url;
    this.model_description = this.model_info_array[index].description;
  }
  model_info_array = [
    {
      name: translate("views.projects.models.3d_models_index.object_name_house"),
      description: translate("views.projects.models.3d_models_index.object_description_house"),
      url: "https://storage.googleapis.com/portfolio-media/real_estate_development_project_3d_model.glb",
    },
    {
      name: translate("views.projects.models.3d_models_index.object_name_microRoom"),
      description: translate("views.projects.models.3d_models_index.object_description_microRoom"),
      url: "https://storage.googleapis.com/portfolio-media/microRoom.glb",
    },
    {
      name: translate("views.projects.models.3d_models_index.object_name_balcony"),
      description: translate("views.projects.models.3d_models_index.object_description_balcony"),
      url: "https://storage.googleapis.com/portfolio-media/my_balcony.glb",
    }

  ];
}
customElements.define("view-model-index", ViewModelIndex);

localeConfig.initialize();
