import { KrThing } from 'krakenthing'


import * as liquidjs from 'liquidjs';
const engine = new liquidjs.Liquid()



export class KrBaseElement extends HTMLElement {
    constructor() {
        super();
        this._base_type = null
        this._thing = null
        this._record_type = null
        this._record_id = null
        this._propertyID = null
        this._value = null
        this._position = null
        this._stateElement = null
        this._thingElement = null
        this._propertyElement = null
        this._valueElement = null

        
        this.htmlTemplate = null           // HTML content as template
        this.htmlContent = null               // Actual HTML content
        this.config = {}
        this.useBestRecord = false
    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject(){

        let s = this.stateElement
        

        this.setDefaultId()
        this.loadFromAttributes()
        this.loadFromValueElement()

        await this.renderHTML()
        this.showContent()

    }

    setDefaultId(){

        if (!this.id || this.id == null){
            this.id = String(crypto.randomUUID())
        }
    }

    loadFromAttributes(){

        if (this.dataset.record){
            this.record = JSON.parse(this.dataset.record)
        }

        if (this.getAttribute('data-record-type')){
            this.record_type = this.getAttribute('data-record-type')
        }

        if (this.getAttribute('data-record-id')){
            this.record_id = this.getAttribute('data-record-id')
        }

        if (this.getAttribute('data-property-id')){
            this.propertyID = this.getAttribute('data-property-id')
        }

        if (this.getAttribute('data-value')){
            this.value = this.JSON.parse(getAttribute('data-value')) || null
        }

        if (this.getAttribute('data-position')){
            this._position = this.getAttribute('data-position')
        }
        
    }

    loadFromValueElement(){

        if(this._base_type != 'KrThing'){
            return 
        }

        if(!this.valueElement || this.valueElement == null ){
            return
        }

        if(!this.valueElement.value || this.valueElement.value == null ){
            return
        }

        if(this.valueElement.value['@type'] ){
            this.record_type = this.valueElement.value['@type'] 
            this.record_id = this.valueElement.value['@id'] 
        }

        if(this.valueElement.value?.record_type ){
            this.record_type = this.valueElement.record_type
            this.record_id = this.valueElement.record_id
        }

    }


    // -----------------------------------------------------
    //  Content renderer 
    // -----------------------------------------------------


    get elementRecord(){
        // Record with added 

        if (!this.thing || this.thing == null ) { return {} }

        if(this._base_type == 'KrThing'){
            return simplify(this.thing.record) || {}
        }

        if(this._base_type == 'KrProperty'){
            if(this.thing && this.thing != null){
                
                let v = []
                let values = this.thing.getProperty(this.propertyID)?.values || []

                for(let value of values){
                    console.log(value.record)
                    v.push( value.record || value )
                }

                return v
                
               
            }
        }

        if(this._base_type == 'KrValue'){
            let value = this.value
            if (value?.record_type){
                return value.record
            } else {
                return value
            }
           
        }

    }

    async renderHTML(){


        if (!this.htmlTemplate || this.htmlTemplate == null) { return }
        
        let tpl = await engine.parse(this.htmlTemplate)
        this.htmlContent = await engine.render(tpl,  {item: this.elementRecord, config: this.config})

    }

    showContent(){
        this.innerHTML = this.htmlContent
    }





    // -----------------------------------------------------
    //  Attributes 
    // -----------------------------------------------------

    get record_type(){

        if(this._record_type && this._record_type != null){
            return this._record_type
        }

        if(!this._record_type || this._record_type == null){
            this._record_type = this.getAttribute('data-record-type') || null
        }

        if(!this._record_type || this._record_type == null){
            this._record_type = this?._thing?.record_type || null
        }

        return this._record_type
    }

    set record_type(value){
        this._record_type = value
        this.setAttribute('data-record-type', value)
    }

    get record_id(){

        if(this._record_id && this._record_id != null){
            return this._record_id
        }

        if(!this._record_id || this._record_id == null){
            this._record_id = this.getAttribute('data-record-id') || null
        }

        if(!this._record_id || this._record_id == null){
            this._record_id = this?._thing?.record_id || null
        }

        return this._record_id
    }

    set record_id(value){
        this._record_id = value
        this.setAttribute('data-record-id', value)
    }

    get position(){

        if(this._position && this._position != null){
            return this._position
        }

        if(!this._position || this._position == null){
            this._position = this.getAttribute('data-position') || null
        }

        return this._record_id
    }

    set position(value){
        this._position = Number(value)
        this.setAttribute('data-position', value)
    }
    
    get thing(){

        if(this._thing && this._thing != null){
            return this._thing
        }

        if(!this._thing || this._thing == null){
            if(this.record_type != null && this.record_id != null){
                this._thing = this.stateElement.getThing(this.record_type, this.record_id) || null  
            }
        } 

        if(!this._thing || this._thing == null){
            if(this._base_type == 'KrValue'){
                this._thing = this.propertyElement?.thing || null
            }
        } 

        if(!this._thing || this._thing == null){
            this._thing = this.thingElement?.thing || null
        } 

        if(!this._thing || this._thing == null){
            const searchParams = new URLSearchParams(window.location.search);
            this._record_type = searchParams.get('@type')
            this._record_id = searchParams.get('@id')
            this._thing = this.stateElement.getThing(this.record_type, this.record_id) || null  
        } 

        return this._thing 

    }

    set thing(value){

        this._thing = this.stateElement.setThing(value)

    }

    get thingElement(){
        return this.parentElement.closest('.kr-thing')
    }

    get propertyElement(){
        return this.parentElement.closest('.kr-property')
    }

    get valueElement(){
        return this.parentElement.closest('.kr-value')
    }

    get stateElement(){

        if(this._stateElement && this._stateElement != null){
            return this._stateElement
        }

        if(!this._stateElement || this._stateElement == null){
            this._stateElement = document.getElementsByTagName('KR-STATE')?.[0]
        }

        if(!this._stateElement || this._stateElement == null){

            this._stateElement = document.createElement('KR-STATE')
            document.body.appendChild(this._stateElement)
        }
        return this._stateElement || null
    }


    get propertyID(){

        if(this._propertyID && this._propertyID == null){
            return this._propertyID
        }

        if(!this._propertyID || this._propertyID != null){
            this._propertyID = this.getAttribute('data-property-id') || null
        }

        if(!this._propertyID || this._propertyID != null){
            if(this._base_type == 'KrValue'){
                this._propertyID = this.propertyElement?.propertyID || null
            }
        }
        
        return this._propertyID
    }

    set propertyID(value){
        return this.setAttribute('data-property-id', value)
    }


    get values(){

        if(!this.propertyID || this.propertyID == null){ 
            return [] 
        }

        if(!this.thing || this.thing == null) {  
            return [] 
        }

        let values = this.thing.getProperty(this.propertyID)?.values || []
        return values

    }

    set values(value){
        this._value = value
    }


    get value(){
        let values = this.values
        if(Array.isArray(values)){
            return values?.[Number(this.position)]
        } else {
            if (Number(this.position) == 0 || !this.position || this.position == ""){
                return values
            } else {
                return null
            }
        }

    }

    set value(value){

        this._value = value
    }




    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------


    connectedCallback() {
        this.style.display = "block"
        this.initObject()
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

customElements.define("kr-base", KrBaseElement);





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
