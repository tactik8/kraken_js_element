import { KrPropertyElement } from '../../baseElements/KrPropertyElement/KrPropertyElement.js'
import { template } from './template/template.js'


export class KrActionMenuElement extends KrPropertyElement {
    constructor() {
        super();
        this.htmlTemplate = template()


    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------


    initObject(){

        this.propertyID = 'potentialAction'
        
        this.config.potentialActions =  this?.thingElement?.potentialActions
        super.initObject()
        
    }

    
    // -----------------------------------------------------
    //  Events 
    // -----------------------------------------------------

    connectedCallback() {
        super.connectedCallback()
    }


}

customElements.define("kr-action-menu", KrActionMenuElement);