import { KrPropertyElement } from '../../baseElements/KrPropertyElement/KrPropertyElement.js'
import { menu } from './template/menu.js'


export class KrActionMenuElement extends KrPropertyElement {
    constructor() {
        super();
        this.htmlTemplate = menu()


    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------



    initObject(){

        this.propertyID = 'potentialAction'

        super.initObject()

    


        
    }


  


    // -----------------------------------------------------
    //  Process action 
    // -----------------------------------------------------




    


    // -----------------------------------------------------
    //  Events 
    // -----------------------------------------------------

    connectedCallback() {
        this.initObject()
    }


}

customElements.define("kr-action-menu", KrActionMenuElement);