
import { KrBaseElement } from '../KrBaseElement/KrBaseElement.js'
import { template } from './template/template.js'


export class KrValueElement extends KrBaseElement {
    constructor() {
        super();
        this.htmlTemplate = template()            // HTML content as template
        this._schema = null
    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject(){

    
        super.initObject()
        this._base_type = 'KrValue'

    }


    // -----------------------------------------------------
    //  Additional attributes 
    // -----------------------------------------------------

    

    

    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------


    connectedCallback() {
        this.classList.add('kr-value')
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

customElements.define("kr-value", KrValueElement)







