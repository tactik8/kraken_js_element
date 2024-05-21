import { KrThingElement } from '../../baseElements/KrThingElement/KrThingElement.js'
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

        super.initObject()

        this.setAttribute('data-propertyID', 'potentialAction')        

        //this.record = this.thing.elementRecord
        
    }


  


    // -----------------------------------------------------
    //  Process action 
    // -----------------------------------------------------




    actionExecute(){

        let element = this.parentElement.closest('.kr-thing')

        if(element){

            element[this.record.target]()

        }
    }


    // -----------------------------------------------------
    //  Events 
    // -----------------------------------------------------

    connectedCallback() {
        this.initObject()
    }


}

customElements.define("kr-action-menu", KrActionMenuElement);