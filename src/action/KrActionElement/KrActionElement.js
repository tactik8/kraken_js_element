import { KrThingElement } from '../../baseElements/KrThingElement/KrThingElement.js'
import { template } from './template/template.js'


export class KrActionElement extends KrThingElement {
    constructor() {
        super();
        this.htmlTemplate = template()
        this.initialized = false
    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------


    initObject(){

        
        
        if(this.thingElement){
            let record = this.thingElement.getAction(this.record_type, this.record_id)
            this.thing = this.thingElement.getAction(this.record_type, this.record_id)
        }
        super.initObject()
       
        this.initEventListeners()
        
    }


    
    
    getIcon(actionName){

        switch(actionName){

            case "addAction":
                return "./icons/plus.svg"
            case "addPropertyValueAction":
                return "./icons/plus.svg"
            case "deletePropertyValueAction":
                return "./icons/delete.svg"
            default: 
                return "./icons/test.svg"
            
        }
    }


    
    initEventListeners(){

        if(this.initialized == false){
            this.addEventListener('click', (event) =>{
                this.actionExecute()

            })
            this.initialized = true
        }
      
    }



    // -----------------------------------------------------
    //  Process action 
    // -----------------------------------------------------
   


    
    actionExecute(){


        if(this.record_type == "addAction"){

            this.executeAddAction()

            
        } else {
        
        let actionName = this.getAttribute('data-action-name')
        let property = this.closest('.kr-property')
        
        switch(actionName){

            case "addAction":
                this.thing.addAction()

            case "addPropertyValueAction":
                property.addPropertyValueAction()
        }
        }
            
    }


    executeAddAction(){

        let o = this.thing.getProperty('object').value
        
        let collection = this.thing.getProperty('targetCollection').value
        
        let collectionObject = this.krState.getThing(collection.record_type, collection.record_id)

        
        collectionObject.addProperty('itemListElement', o)

    }

    executeDeleteAction(){

       

    }

    
    // -----------------------------------------------------
    //  Events 
    // -----------------------------------------------------

    connectedCallback() {
        super.connectedCallback()
    }
    

}

customElements.define("kr-action", KrActionElement);