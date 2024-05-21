
import { KrakenSchemas } from 'https://tactik8.github.io/krakenJsSchema/kraken_schema/kraken_schema.js'


import { KrThingElement } from '../../baseElements/KrThingElement/KrThingElement.js'

import { formSm } from './template/formSm.js'


export class KrFormSm extends KrThingElement {
    constructor() {
        super();

        // Override template
        this.htmlTemplate = formSm()


    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject() {

        //
        if(!this.record_type || this.record_type === null || typeof this.record_type == "undefined"){ return }
        
        
        if(!this.thing) { 
            this.record = {"@type": this.record_type, "@id": String(crypto.randomUUID())}
        }
        
        this.config.recordTypes = this.thing.schema?.expectedTypes
        this.config.properties= []

        console.log('a', this.thing, this.thing.schema)
        for(let p of this?.thing?.schema?.propertiesLight || []){
            this.config.properties.push(p?.record_id)
        }
        
        
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


    connectedCallback() {
        super.connectedCallback()
        //this.initObject()

    }








}

customElements.define("kr-form-sm", KrFormSm);


