

import { KrValueElement } from "../../../baseElements/KrValueElement/KrValueElement.js";

import { tableValue } from './template/tablevalue.js'

export class KrTableValueElement extends KrValueElement {
    constructor() {
        super();


        // Override template
        this.htmlTemplate = tableValue()

        


    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject() {

        //

        
        
        await super.initObject()

        
    }






}

customElements.define("kr-table-value", KrTableValueElement);


