
import { KrPropertyElement } from '../../baseElements/KrPropertyElement/KrPropertyElement.js'

import { KrValueElement } from '../../baseElements/KrValueElement/KrValueElement.js'


import { formInput } from './template/formInput.js'


let DEFAULTLOCALE = "en-US"



export class KrFormInput extends KrPropertyElement {
    constructor() {
        super();


        // Override template
        this.htmlTemplate = formInput()


        // 
        //this._isSelected = false
        //this.setEventListenerDrag()

    }



    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject() {

        //
        
        await super.initObject()
    }





    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------

    setEventListenerDrag(){

        this.draggable=true
        this.addEventListener('dragstart', event =>{
            event.preventDefault()
            event.dataTransfer.setData('text', JSON.stringify(this.record, null, 4))
        })
    }

}

customElements.define("kr-form-input", KrFormInput);


