
//import { objectTypeInternalSlot } from '@babel/types';
import { KrThingElement } from '../../../baseElements/KrThingElement/KrThingElement.js'

import { table } from './template/table.js'


export class KrTable extends KrThingElement {
    constructor() {
        super();


        // Override template
        this.htmlTemplate = table()


        // 
        this._isSelected = false

    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject() {

        //


        if(!this.thing){ return }
        
        this.config.keys = this.getAttribute('data-keys')
        this.config.headers = this.getAttribute('data-headers')

        if(!this.config.keys){
            let items = this.thing.getProperty('itemListElement').values
            let keys = []
            for(let item of items){

                for(let k of Object.keys(item.record)){
                    if(! keys.includes(k)){
                        
                    keys.push(k)
                }
                }   
            }
            
            this.config.keys = keys
        }
        if(!this.config.headers){
            this.config.headers = this.config.keys
        }
        
        await super.initObject()

    }

    // -----------------------------------------------------
    //  Attr 
    // -----------------------------------------------------

    
    

    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------

    isClicked() {

        const event = new CustomEvent("kr-click", { detail: this.record });
        this.dispatchEvent(event)

    }



    connectedCallback() {
        //console.log("Custom element added to page.");
    }

    disconnectedCallback() {
        //console.log("Custom element removed from page.");
    }

    adoptedCallback() {
       // console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        //console.log(`Attribute ${name} has changed krListItem.`);
    }





}

customElements.define("kr-table", KrTable);