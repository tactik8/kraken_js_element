
import { KrThingElement } from '../baseElements/KrThingElement/KrThingElement.js'

import { avatar } from './template/avatar.js'


export class KrAvatar extends KrThingElement {
    constructor() {
        super();


        // Override template
        this.htmlTemplate = avatar()


        // 
        this._isSelected = false
        this.setEventListenerDrag()

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

customElements.define("kr-avatar", KrAvatar);