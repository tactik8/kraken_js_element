


import { KrThingElement } from '../../baseElements/KrThingElement/KrThingElement.js'

import { template } from './template/template.js'


export class KrTemplate extends KrThingElement {
    constructor() {
        super();

        // Set html template
        this.htmlTemplate = template()

    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject() {

        // Configuration prior to generation

        
        // Generation
        await super.initObject()


        // Configuration after generation
        
        
    }


}

customElements.define("kr-template", KrTemplate);