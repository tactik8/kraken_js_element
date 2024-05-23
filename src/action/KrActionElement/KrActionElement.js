import { KrThingElement } from '../../baseElements/KrThingElement/KrThingElement.js'
import { icon } from './template/icon.js'


export class KrActionElement extends KrThingElement {
    constructor() {
        super();
        this.htmlTemplate = icon()
        this.initialized = false
    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------


    initObject(){

        super.initObject()
        
        this.initEventListeners()
        
    }


    getPropertiesfromAttributes(){
        let actionName = this.getAttribute('data-action-name')


        //this.thing = this.krState.getThing(this.record_type, this.record_id)

        
        
        let record2 = {
            "@type": actionName,
            "@id": String(crypto.randomUUID()),
            "name":  actionName,
            "image": {"@type": "ImageObject", "contentUrl": this.getIcon(actionName)},
            "url": "",
            "actionStatus": "potentialActionStatus"
        }
  
        //this.record = record
      
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
                console.log('click action', this.id)
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

        console.log('add', this.record_type)
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
        this.initObject()
        this.getPropertiesfromAttributes()
    }
    

}

customElements.define("kr-action", KrActionElement);