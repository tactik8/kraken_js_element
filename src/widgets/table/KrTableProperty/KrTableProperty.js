
import { KrPropertyElement } from "../../../baseElements/KrPropertyElement/KrPropertyElement.js";


import { tableProp } from './template/tableProperty.js'



export class KrTablePropertyElement extends KrPropertyElement {
    constructor() {
        super();
        this.htmlTemplate = tableProp()


    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------



    initObject(){

      
          super.initObject()

    }




    // -----------------------------------------------------
    //  Events 
    // -----------------------------------------------------

    //connectedCallback() {
    //    this.initObject()
    //}


}

customElements.define("kr-table-property", KrTablePropertyElement);