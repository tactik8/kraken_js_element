import { KrThing } from 'https://tactik8.github.io/kraken_thing_js/kraken_thing/kraken_thing.js';




import { card } from './templates/card.js'
import { record as recordElement } from './templates/record.js'
import * as liquidjs from 'https://esm.run/liquidjs';
const engine = new liquidjs.Liquid()



export class KrThingElement extends HTMLElement {
    constructor() {
        super();
        this._thing = null
        this._record = null
        this.htmlTemplate = card()            // HTML content as template
        this.htmlContent = null               // Actual HTML content
        this.config = {}
        this.useBestRecord = false
    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject(){

        this.initKrState()

        this.setDefaultId()
        await this.renderHTML()
        this.showContent()
        
      
    }

    setDefaultId(){

        if (!this.id || this.id == null){
            this.id = String(crypto.randomUUID())
        }
    }


    setTemplate(templateID){

        if (templateID == "card"){
            this.htmlTemplate = card()
        }
        if (templateID == "record"){
            this.htmlTemplate = recordElement()
        }
    }


    initKrState(){


        let krState = document.getElementsByClassName('KR-STATE')
        if(!krState){
            document.body.appendChild(document.createElement('KR-STATE'))
        }
        
    }

    
    loadRecordFromAttribute(){

        if (this.dataset.record){
            this.record = JSON.parse(this.dataset.record)
        }

        if (this.dataset.recordType){
            this.record_type = this.dataset.recordType
        }

        if (this.dataset.recordId){
            this.record_id = this.dataset.recordId
        }
    }

    loadRecordFromValueElement(){

        
        if(this.closest('.kr-value')){
            this.record = this.closest('.kr-value')?.value
            
        }
        
    }
    
    
    // -----------------------------------------------------
    //  Content renderer 
    // -----------------------------------------------------


    get elementRecord(){
        // Record with added 
       
            
        let elementRecord = JSON.parse(JSON.stringify(this.record))

        //elementRecord.potentialAction = this.potentialActions

        return elementRecord
            
       
        
        
    }


    
    async renderHTML(){
        
        let tpl = await engine.parse(this.htmlTemplate)
        this.htmlContent = await engine.render(tpl,  {item: this.elementRecord, config: this.config})

    }
    
    showContent(){
        this.innerHTML = this.htmlContent
    }

    
  
    
    // -----------------------------------------------------
    //  Attributes 
    // -----------------------------------------------------


    get krState(){

        let krState =  document.getElementsByTagName('KR-STATE')?.[0]
        if(!krState || krState == null){
            krState = document.body.appendChild(document.createElement('KR-STATE'))
        }
        return krState
    }

    
    
    
    get record_type(){
        return this.getAttribute('data-record-type') || null
    }

    set record_type(value){
        this._record_type = value
        this.setAttribute('data-record-type', value)
    }

    get record_id(){
        return this.getAttribute('data-record-id') || null
    }

    set record_id(value){
        this._record_id = value
        this.setAttribute('data-record-id', value)
        
    }

    get record(){


        if (this._record && this._record != null){
            return simplify(this._record)
        }

        
        if(!this.thing) { return {}}

        this._record = this.thing.record
        
        return simplify(this._record)
        
        
    }

    set record(value){
        
        if(!value || value == null){ return }

        if(!this.thing){
            
            this.thing = value
        } 

        if(!value['@type']){ value['@type'] = "Thing"}
        this.thing.record = value
        
        this.record_type = this.thing.record_type
        this.record_id =  this.thing.record_id
        
        this.initObject()
       
    }

    get thing(){

        if(this._thing && this._thing != null){ 
                return this._thing
        }
        
        if(!this.record_type || this.record_type == null) { return null }
        if(!this.record_id || this.record_id == null) { return null }
        
        return this.krState.getThing(this.record_type, this.record_id)
        
    }


    set thing(value){

        if(!(value instanceof KrThing)){
          
            let k = new KrThing('Thing')
            value = k
        }
        
        this._thing = value
        this.krState.setThing(value)

        this._thing.addEventListener('all', event =>{
            
            if(this._record != this.thing.record){
                this._record = this.thing.record
                this.initObject()
            }
            
        })
        
    }

    



    // -----------------------------------------------------
    //  Properties 
    // -----------------------------------------------------



    getValues(propertyID){
        
        if(!this.thing){ return [] }

        let values = this._record[propertyID] 

        values = ensureArray(values)

        return values
        
        
    }

    
    getProperty(propertyID){

        if(!this.thing){ return [] }
        
        return this.thing.getProperty(propertyID)
       
    }

    setProperty(propertyID, value){
       
        return this.thing.replaceProperty(propertyID, null, value)
          
    }
    
    replaceProperty(propertyID, oldValue, newValue, refreshFlag=true){
        if(this.thing){
            return this.thing.replaceProperty(propertyID, oldValue, newValue)
        } else {
            return null
        }
    }
    addProperty(propertyID, value){
        if(this.thing){
            return this.thing.addProperty(propertyID, value)
        } else {
            return null
        }
    }

    deleteProperty(propertyID, value){
        
        if(this.thing){
            return this.thing.deleteProperty(propertyID, value)
        } else {

            return null
            
        }
        
    }
    
    // -----------------------------------------------------
    //  Potential actions 
    // -----------------------------------------------------


    findPotentialAction(actionID){

        for(let i of this.potentialActions){

            if (i?.['@id'] == actionID){
                return i
            }
        }
        return null
    }


    
    get potentialActions(){

        let actions = []
        actions.push(this.deleteAction)
        return actions
    }

    get deleteAction(){
        let record = {
            "@type": "deleteAction",
            "@id": "deleteAction",
            "name": "delete",
            "image": {"@type": "ImageObject", "contentUrl": "./delete.svg"},
            "object": this.record,
            "url": "",
            "actionStatus": "potentialActionStatus",
            "targetCollection": "listItemElement",
            "target": '',
        }
        return record
    }

    deleteAction(){

    }



    // -----------------------------------------------------
    //  State management 
    // -----------------------------------------------------


    
    
    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------

    
    connectedCallback() {
        this.classList.add('kr-thing')
        this.style.display = "block"
        this.loadRecordFromAttribute()
        this.loadRecordFromValueElement()
    }

    disconnectedCallback() {
    }

    adoptedCallback() {
    }

    attributeChangedCallback(name, oldValue, newValue) {

        if (['data-record-type', 'data-record-id'].includes(name)){
            // Initialize from type/id
        }
    }
}

customElements.define("kr-thing", KrThingElement);



// -----------------------------------------------------
//  Card 
// -----------------------------------------------------

export class KrCard extends KrThingElement {
    constructor() {
        super();
        this.htmlTemplate = card()
    }
}
customElements.define("kr-card", KrCard);



function simplify(data, count=0, origData=null) {


    if(origData==null){ origData = data}
    

    //return data
    // Remove arrays of 1
    if (Array.isArray(data)) {
        // If the array has exactly one element, return that element
        if (data.length === 1) {
            return simplify(data[0], count + 1, origData);
        } else {
            // Otherwise, process each element in the array
            return data.map(simplify);
        }
    } else if (data !== null && typeof data === 'object') {
        // If the data is an object, process each key
        const newData = {};
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                newData[key] = simplify(data[key], count + 1, origData);
            }
        }
        return newData;
    } else {
        // If the data is neither an array nor an object, return it as is
        return data;
    }
}





function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}
