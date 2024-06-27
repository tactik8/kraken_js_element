
import { template } from './template/template.js'
import * as liquidjs from 'liquidjs';
import { KrThingElement } from '../KrThingElement/KrThingElement.js'
const engine = new liquidjs.Liquid()




export class KrListItemElement extends KrThingElement {
    constructor() {
        super();


        // Override template
        this.htmlTemplate = template()

     
    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject() {

        //
        this.classList.add('kr-list-item')

        if (this.things && this.things != null){
            
            this.config.elementTemplate = this.things.elementTemplate
            this.config.showSelect = this.things.showSelect
            this.config.showPosition = this.things.showPosition
            this.config.showActions = this.things.showActions
            this.config.potentialAction = this.potentialActions || this.defaultActions
            this.isInitialized = true
        }

        
        
        await super.initObject()

        this.setEventListenerPotentialActions()
        //this.setEventListenerSelect()
        //this.setEventListenerClick()
        this.setEventListenerReorder()

    }


    refreshElement(){

        
        super.refreshElement()
        
    }
    eventManager(event){

        if(event.data.propertyID == 'previousItem'){
            return 
        }
        if(event.data.propertyID == 'nextItem'){
            return 
        }
        
        super.eventManager(event)
    }
        
    resetPosition(){

        return
        if(!this.previousItem || this.previousItem == null){
            this.thing.position = 0
        }

        
        if(this.thing.previousItem){

            let previousPosition = this.thing.previousItem.getProperty('position').value
           
        }
        let oldValue = this.thing.position
        let newValue = this.position

        if(oldValue != newValue) {
            
            this.thing.position = this.position

            if (this.thing){
                this.thing.position = this.position
            }

            this.refreshElement()
        }
        
        if(this.nextItem){
            this.nextItem.resetPosition()
        }

    }



    // -----------------------------------------------------
    //  Element navigation 
    // -----------------------------------------------------

    get krItemElement() {
        return this.querySelector('.krItemElement')
    }

    get KrPotentialActions() {
        return this.querySelector('kr-potential-actions')
    }

  



    // -----------------------------------------------------
    //  Click section 
    // -----------------------------------------------------



    setEventListenerClick() {

        let m = this
        this.addEventListener('click', (event) => {
            this.isClicked()
        })
    }
    // -----------------------------------------------------
    //  Potential actions section 
    // -----------------------------------------------------


    setEventListenerPotentialActions() {

        let m = this
        this.addEventListener('mouseenter', (event) => {
            m.KrPotentialActions.style.visibility = "visible"
            m.firstElementChild.classList.add('bg-body-tertiary')

            m.addEventListener('mouseleave', (event) => {
                m.KrPotentialActions.style.visibility = "hidden"
                if (this.isSelected == false) {
                    m.firstElementChild.classList.remove('bg-body-tertiary')
                }
            })
        })
    }




    // -----------------------------------------------------
    //  Attributes 
    // -----------------------------------------------------


    
    


    recordToListItem(record) {

        if (record['@type'] == 'ListItem') { return record }

        let listItem = {
            "@type": "ListItem",
            "@id": String(crypto.randomUUID()),
            "item": record
        }
        return listItem
    }

    get position() {

        let position = this.thing.position
        if(position == null){ position = 0 }
        return position

        
        if (this.previousItem == null) {
            return 0
        } else {
            return this.thing.getProperty('position')?.value
        }
    }

    set position(value){

        if(value == null){ value = 0}
        this.thing.position = value
        
    }

    get firstItem() {

        let item = this
        while(item.previousItem){
            item=item.previousItem
        }
        return item
    }
    
    get previousItem() {

        let value = this.thing.getProperty('previousItem')?.value
        if(!value || value == null){ return null }

        let itemElement = this.things.getItemElement(value.record_type, value.record_id)
        
        return itemElement
            
    }
    
    get nextItem() {
        let value = this.thing.getProperty('nextItem')?.value
        if(!value || value == null){ return null }
        
        let itemElement = this.things.getItemElement(value.record_type, value.record_id)
        return itemElement
    }

    get things(){
        return this.closest('.kr-things')
    }





    // -----------------------------------------------------
    //  Default actions 
    // -----------------------------------------------------


    get defaultActions(){

        let records = []
        records.push(this.defaultActionDelete)

        return records
        
    }

    get defaultActionDelete(){

        let record = {
            "@type": "DeleteAction",
            "name": "DeleteStuff",
            "actionStatus": "potentialActionStatus",
            "object": {"@type": this.record_type, "@id": this.record_id},
            "collection": {"@type": this.things.record_type, "@id": this.things.record_id}
        }
        return record

    }
    
    get defaultActionCopy(){

        let record = {
            "@type": ""
        }
        
    }
    

    // -----------------------------------------------------
    //  Drag reorder 
    // -----------------------------------------------------


    setEventListenerReorder(){

        
        
        this.draggable="true"
        this.addEventListener('dragstart', event=>{
            event.dataTransfer.setData("text/plain", event.currentTarget.id);
            event.currentTarget.classList.add('dragging')
           
        })
        
        this.addEventListener('dragend', event=>{
            event.currentTarget.classList.remove('dragging')
        })
        
        this.addEventListener('dragenter', event=>{
            
        })

        this.addEventListener('dragleave', event=>{
            
            
        })

        this.addEventListener('dragover', event=>{
            event.preventDefault()
        })
        
        this.addEventListener('drop', event=>{
            event.preventDefault()

            

            let elementID = event.dataTransfer.getData('text/plain')
            let element = document.getElementById(elementID)
            
            // If not same list
            if(element.things.record_id != event.currentTarget.things.record_id) {
                return
            }
            
            //             
            event.currentTarget.before(element)
            
            // Reset positions
            this.firstItem.resetPosition()

            // Broadcast event
            const newEvent = new CustomEvent("kr-reorder", { detail: this.record });
            this.dispatchEvent(newEvent)
            
        })
    }

    
    
    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------

    isClicked() {

        const event = new CustomEvent("kr-click", { detail: this.record });
        this.dispatchEvent(event)
    
    }

    



}

customElements.define("kr-list-item", KrListItemElement);