import { KrThingElement } from "../../../baseElements/KrThingElement/KrThingElement.js";

import { table } from "./template/table.js";

export class KrTable extends KrThingElement {
    constructor() {
        super();

        // Override template
        this.htmlTemplate = table();

        this._keys = null;
        this._headers = null;

        //
        this._isSelected = false;
    }

    // -----------------------------------------------------
    //  Init
    // -----------------------------------------------------

    async initObject() {
        //

        if (!this.thing) {
            console.log("no thing");
            return;
        }

        this.config.keys = this.keys
        this.config.headers = this.headers

        await super.initObject();
    }

    get keys() {
        if (this._keys && this._keys != null && this._keys != []) {
            return this._keys;
        }

        if(!this._keys || this._keys == null || this._keys == []){
            this._keys = this.getAttribute("data-keys")
        }

        if(!this._keys || this._keys == null || this._keys == []){
            this._keys = this.getKeysFromRecord()
        }

        return this._keys || [];
    }

    set keys(value) {
        
        this._keys = value;
        this.setAttribute("data-keys", value);
    }

    getKeysFromRecord(){

        let items = this.thing.getProperty("itemListElement").values;
        let keys = [];

        for (let item of items) {
            for (let k of Object.keys(item.record)) {
                if (!keys.includes(k)) {
                    keys.push(k);
                }
            }
        }
        return keys
    }


    get headers() {
        if (this._headers && this._headers != null && this._headers != []) {
            return this._headers;
        }

        if(!this._headers || this._headers == null || this._headers == []){
            this._headers = this.getAttribute("data-headers")
        }

        if(!this._headers || this._headers == null || this._headers == []){
            this._headers = this.keys
        }

        return this._headers || [];
    }

    set headers(value) {

        this._headers = value;
        this.setAttribute("data-headers", value);
    }



    // -----------------------------------------------------
    //  Custom Element Events
    // -----------------------------------------------------

    isClicked() {
        const event = new CustomEvent("kr-click", { detail: this.record });
        this.dispatchEvent(event);
    }
}

customElements.define("kr-table", KrTable);
