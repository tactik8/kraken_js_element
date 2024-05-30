
import { KrThingElement } from '../../baseElements/KrThingElement/KrThingElement.js'

import { template } from './template/template.js'


export class KrArticleElement extends KrThingElement {
    constructor() {
        super();


        // Override template
        this.htmlTemplate = template()


        // 
        this._isSelected = false


    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject() {

        //
        await super.initObject()

    }








}

customElements.define("kr-article", KrArticleElement);