
import { KrThings } from 'krakenthing'
import { KrBaseElement } from '../KrBaseElement/KrBaseElement.js'
import { template } from './template/template.js'


export class KrThingElement extends KrBaseElement {
    constructor() {
        super()
        this.htmlTemplate = null            // HTML content as template
    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject(){

        
        super.initObject()
        this._base_type = 'KrThing'
    }


    
    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------

    
    connectedCallback() {
        this.classList.add('kr-thing')
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

customElements.define("kr-thing", KrThingElement)


