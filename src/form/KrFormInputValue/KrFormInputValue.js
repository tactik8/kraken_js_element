
import { KrakenSchemas } from 'krakenschema'


import { KrValueElement } from '../../baseElements/KrValueElement/KrValueElement.js'



let DEFAULTLOCALE = "en-US"



export class KrFormInputValue extends KrValueElement {
    constructor() {
        super();


        // Override template
        //this.htmlTemplate = avatar()


        // 
        //this._isSelected = false
        //this.setEventListenerDrag()
        

    }




    // -----------------------------------------------------
    //  Attr 
    // -----------------------------------------------------

    get propertyName(){

        let propertyName = this.krakenSchema?.getLocalizedPropertyID(DEFAULTLOCALE, this.propertyID) || this.propertyID
        propertyName = propertyName.replace(/([A-Z])/g, " $1");
        return propertyName
    }
    

    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject() {

        //
        console.log('init property')
        await super.initObject()
        this.setEventListenerValue()
        
        this.krakenSchema = KrakenSchemas.get(this.propertyID);



        let enumerations = this.krakenSchema?.expectedType?.enumerationItems || []
    
        if(this.propertyID == "@type"){
            // Handle record_type
            this.innerHTML = this.getHtmlRecordType()
        }
        
        else if(enumerations.length > 0){
            // Handle enumerations
            this.innerHTML = this.getHtmlEnumeration()
        
        } else if (this.krakenSchema?.expectedType?.htmlType == "object"){
            this.innerHTML = this.getHtmlObject()

        } else {
            this.innerHTML = this.getHtmlSimple()
        }
    }


    
    


    getHtmlSimple(){
        return `
        
            <input type="${this.krakenSchema?.expectedType.htmlType}" class="kr-value-item form-control" id="exampleInputPassword1" value="${this.value || ""}"  >
       `
    }


    getHtmlRecordType(){

        let enumerations

        let parentProperty = this.thing.closest('kr-property')
        if (parentProperty){
             enumerations = parentProperty.krakenSchema?.expectedTypes || []
        
        } else {

             enumerations = KrakenSchemas.get("Thing").record_types || []
            
        }

        
        
        let enums = []

        for (let e of enumerations){
            enums.push(`<option value="${e}">${e}</option>`)
        }

        let id = String(crypto.randomUUID())
        return `
        
        <input class="kr-value-item form-control" list="datalist_${id}" aria-label="Default select example" value="${this.value}">
              <datalist id="datalist_${id}">
             ${enums.join('')}
                </datalist>
            </input>
          `

    }



    
    getHtmlEnumeration(){

        
        let enumerations = this.krakenSchema.expectedType?.enumerationItems || []
        let enums = []

        for (let e of enumerations){
            enums.push(`<option value="${e.name}">${e.name}</option>`)
        }

        
        return `
       
        <select class="kr-value-item form-select" aria-label="Default select example" value="${this.value}">
              <option selected></option>
              ${enums.join('')}
            </select>
      `
        
    }


    getHtmlObject(){
       return  `
       
        <div class="ms-5">
            <kr-form-sm data-record-type="${this.krakenSchema.expectedType.record_id}"></kr-form-sm></div>
           `
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

    setEventListenerValue(){

        this.addEventListener('input', event =>{
            
            //this.replacePropertyValueAction(event.target.value, false)
        })
    }

}

customElements.define("kr-form-input-value", KrFormInputValue);


