import { KrBaseElement } from '../KrBaseElement/KrBaseElement.js'
import { template } from './template/template.js'



export class KrPropertyElement extends KrBaseElement {

    constructor() {
        super()
        this.htmlTemplate = template()            // HTML content as template
    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject(){

        super.initObject()
        this._base_type = 'KrProperty'
    }



    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------


    connectedCallback() {
        this.classList.add('kr-property')
        super.connectedCallback()
    }

    disconnectedCallback() {
        super.disconnectedCallback()
    }

    adoptedCallback() {
        super.adoptedCallback() 
    }

    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue)
    }
}


customElements.define("kr-property", KrPropertyElement);

