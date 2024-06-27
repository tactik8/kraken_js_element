
import { KrThingElement } from '../../baseElements/KrThingElement/KrThingElement.js'


import { KrThingsElement } from '../../baseElements/KrThingsElement/KrThingsElement.js'



import { template } from './template/template.js'


export class KrLinearThing extends KrThingElement {
    constructor() {
        super();


        // Override template
        this.htmlTemplate = template()
        this._oldRecord = null

        // 
        this._isSelected = false


    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject() {

        //
        console.log('br', this.thing.record_type)
        this.config.best = this.thing.getBestRecord()
        await super.initObject()

    }


    refreshElement(){

        
        let bestRecord = this.thing.getBestRecord()

        console.log('br', this.thing.record_type)
        if(bestRecord == this._oldRecord){ 
            console.log('is equal')
                return }

        this._oldrecord = bestRecord
        this.initObject()
        
        
    }





}

customElements.define("kr-linear-thing", KrLinearThing);