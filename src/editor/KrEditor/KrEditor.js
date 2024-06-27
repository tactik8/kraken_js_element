
import { KrThingElement } from '../../baseElements/KrThingElement/KrThingElement.js'


import { KrThingsElement } from '../../baseElements/KrThingsElement/KrThingsElement.js'



import { template } from './template/template.js'


export class KrEditor extends KrThingsElement {
    constructor() {
        super();


        // Override template
        //this.htmlTemplate = null; //template()
        

        // 
        this._isSelected = false

        this._defaultElementTemplate = 'kr-editor-line'

    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject() {

        //
        this.elementTemplate = 'kr-editor-line'
        await super.initObject()

    }








}

customElements.define("kr-editor", KrEditor);