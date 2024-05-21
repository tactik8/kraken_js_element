
import { KrakenSchemas } from 'https://tactik8.github.io/krakenJsSchema/kraken_schema/kraken_schema.js'

import * as liquidjs from 'https://esm.run/liquidjs';
const engine = new liquidjs.Liquid()




export class KrPropertyElement extends HTMLElement {
    constructor() {
        super();
        this.htmlTemplate = ''                // HTML content as template
        this.htmlContent = null               // Actual HTML content
        this.config = {}
        this.values = null

    }

    async initObject(){
        this.setDefaultId()
        this.config.propertyID = this.propertyID
        this.krakenSchema = KrakenSchemas.get(this.propertyID);

        
        await this.renderHTML()
        this.showContent()


    }




    
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    

    setDefaultId(){

        if (!this.id || this.id == null){
            this.id = String(crypto.randomUUID())
        }
    }

    async renderHTML(){

        if(this.thing){
            
            let tpl = await engine.parse(this.htmlTemplate)
            this.htmlContent = await engine.render(tpl, {item: this.values, config: this.config})
            
        }
       

    }

    showContent(){
        this.innerHTML = this.htmlContent
    }



    // -----------------------------------------------------
    //  potentialActions 
    // -----------------------------------------------------


    addPropertyValueAction(value){


        // Get current value

        if(!this.thing){ return }
        
        if(!value || value == null){
            if (this.krakenSchema?.expectedType?.htmlType == "object"){
                value = {"@type": this.krakenSchema?.expectedType?.record_id, "@id": String(crypto.randomUUID()) }
            } else {
                value = 'test'
            }
        }
      
        this.thing.thing.addProperty(this.propertyID, value) 
        
    }

    

    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    
    get thing(){

        let t = this.closest('.kr-thing')
        return t
    }

    get record(){

        return this.thing.record
    }

    get elementRecord(){
        return this.thing.elementRecord
    }
    
    get propertyID(){
        return this.getAttribute('data-property-id')
    }

    set propertyID(value){
        return this.setAttribute('data-property-id', value)
    }

    get values(){

        if(!this.thing){ return null }

        let values = this.thing.getValues(this.propertyID)
        return values
        
    }

    set values(value){
        return this.setAttribute('data-value', value)
    }



    
    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------


    connectedCallback() {
        this.classList.add('kr-property')
        this.initObject()
    }

    disconnectedCallback() {
    }

    adoptedCallback() {
    }

    attributeChangedCallback(name, oldValue, newValue) {
    }

    

}

customElements.define("kr-property", KrPropertyElement);

