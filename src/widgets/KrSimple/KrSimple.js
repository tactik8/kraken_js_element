import { KrThingElement } from "../../baseElements/KrThingElement/KrThingElement.js";

import { template } from "./template/template.js";

export class KrSimple extends KrThingElement {
    constructor() {
        super();

        // Override template
        this.htmlTemplate = template();

        this._keys = null;
        this._headers = null;

        //
        this._isSelected = false;
    }

   
}

customElements.define("kr-simple", KrSimple);
