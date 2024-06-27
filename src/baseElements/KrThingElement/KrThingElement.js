
import { KrThings } from 'krakenthing'
import { KrBaseElement } from '../KrBaseElement/KrBaseElement.js'
import { template } from './template/template.js'


export class KrThingElement extends KrBaseElement {
    constructor() {
        super()
        this.htmlTemplate = template()            // HTML content as template
        this._record = null
    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject(){

        let newRecord = this?.thing?.record
        if(newRecord == this._record){ return }

        
        this.classList.add('kr-thing')
        super.initObject()
        this._base_type = 'KrThing'
    }


    refreshElement(){

        let newRecord = this.thing.record
        if(newRecord == this._record){ return }
        this._record = newRecord
        this.initObject()

        
    }
    
    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------

    
  
}

customElements.define("kr-thing", KrThingElement)


