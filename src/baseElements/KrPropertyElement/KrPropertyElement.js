import { KrBaseElement } from '../KrBaseElement/KrBaseElement.js'
import { template } from './template/template.js'



export class KrPropertyElement extends KrBaseElement {
    /**
     * attribute:
     * data-value-template: the html tag ot use for value elements
     */

    constructor() {
        super()
        this.htmlTemplate = null //template()            // HTML content as template
        this._values = null
        this._valueElements = {}
    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject(){

        this.classList.add('kr-property')
        
        //super.initObject()
        this._base_type = 'KrProperty'
        this.refreshElement()
    }



    // -----------------------------------------------------
    //  Additional attribute 
    // -----------------------------------------------------

    get valueTemplate(){
        
        let valueTemplate = this.getAttribute('data-value-template')

        if(!valueTemplate || valueTemplate==null){
            valueTemplate = null
        }
        return valueTemplate
    }

    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------



    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    refreshElement(){

        let propertyID = this.propertyID
        let property = this.thing.getProperty(propertyID)
        let pvs = property.propertyValues
        let newValues = property.values
        
        if(this._values == newValues){ return }
        this._values == newValues 

        
        let record_ids = pvs.map(item => item.record_id)

        
        // Sort items if itemListElement
        
        if(propertyID == "itemListElement"){

            function compareFn(a, b) {
                let positionA = a.value.getProperty('position')?.value || 0
                let positionB = b.value.getProperty('position')?.value || 0
                if(positionA == null) { positionA = 0}
                if(positionB == null) { positionB = 0}
                
              if (positionA < positionB) {
                return -1;
              } else if (positionA > positionB) {
                return 1;
              }
              // a must be equal to b
              return 0;
            }
            pvs.sort(compareFn)
           
        }

        
        // Remove elements no longer there
        for(let record_id of Object.keys(this._valueElements)){

            let v = this.retrieveValueElement(record_id)
            if (v && v!= null && (!(record_ids.includes(record_id)))){
                v.remove()
                delete this._valueElements[record_id]
            }
        }
        
        // Add new elements
        let previousItemId = null
        let previousItemElement = null

        if(!pvs || pvs == null || pvs.length == 0){ return }
        
        
        for(let p of pvs){
            let position
            let name
            
            let pType = p.record_type
            let pId = p.record_id
            let element = this.retrieveValueElement(pId)

            if(!element || element == null ){
                element = this.newValueElement(pType, pId)
            } 


            
            
            if(previousItemElement && previousItemElement != null ){
                //previousItemElement.after(element)
                if(previousItemElement.nextElementSibling?.id != element?.id){
                    previousItemElement.after(element)
                }
            } else {
                //this.prepend(element)
                if(this.firstElementChild?.id != element?.id){
                    this.prepend(element)
                }
                
            }
            
            previousItemId = pId
            previousItemElement = element
        }
        
    }


    retrieveValueElement(record_id){
        if(!record_id || record_id == null) { return null }
        return this._valueElements[record_id]
    }

    newValueElement(record_type, record_id){

        let element = document.createElement('kr-value')
        element.record_type = record_type
        element.record_id = record_id

        this._valueElements[record_id] = element

        return element
    }

    

    
}


customElements.define("kr-property", KrPropertyElement);

