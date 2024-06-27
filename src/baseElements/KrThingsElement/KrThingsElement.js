
import { KrThing } from 'krakenrecord';
import { KrThingElement } from '../KrThingElement/KrThingElement.js'

import { template } from './template/template.js'





export class KrThingsElement extends KrThingElement {
    /**
     *
     * Attributes:
     * - recordTemplate (): template for new listItem.item records
     * - elementTemplate (): template for new listItem.item element
     * 
     */
    constructor() {
        super();

        // Set template and content for list
        this.htmlTemplate = template()
        
        // Set templates
        this._recordTemplate = null
        this._defaultRecordTemplate = {"@type": "Thing", "name": "newElement"} 
        this._elementTemplate = null
        this._defaultElementTemplate = "kr-card"

        // Set options
        this._showSelect = null
        this._defaultShowSelect = true
        this._showPosition = null
        this._defaultShowPosition = true
        this._showActions = null
        this._defaultShowActions = true
        this.listItemTemplate = 'kr-list-item'
        
    
    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject(){

        this.classList.add('kr-things')
        this.config.showSelect = this.showSelect
        this.config.showPosition = this.showPosition
        this.config.elementTemplate = this.elementTemplate
        this.config.potentialActions = this.potentialActions || this.defaultActions
        
        await super.initObject()
       
     
        this.setEventListenerDrop()

    }




    // -----------------------------------------------------
    //  Additional attributes - Config
    // -----------------------------------------------------



    get recordTemplate(){
        // Retrieves record template for creation of new items
        
        if (this._recordTemplate && this._recordTemplate!= null){
            return this._recordTemplate
        }

        if(!this._recordTemplate || this._recordTemplate == null){
            let recordTemplate = this.getAttribute('data-record-template') || null
            if(recordTemplate && recordTemplate != null){
                this._recordTemplate = JSON.parse(recordTemplate)
            }
        }

        if (!this._recordTemplate || this._recordTemplate == null){
            return this._defaultRecordTemplate
        }
        
        return this._recordTemplate
    }

    set recordTemplate(value){
        this._recordTemplate = value
        this.setAttribute('data-record-template', value)
    }
    
    get elementTemplate(){
        // Retrieves element template for creation of new items

        if (this._elementTemplate && this._elementTemplate!= null){
            return this._elementTemplate
        }

        if(!this._elementTemplate || this._elementTemplate == null){          
            this._elementTemplate = this.getAttribute('data-element-template') || null
        }

        if (!this._elementTemplate || this._elementTemplate == null){
            return this._defaultElementTemplate
        }

        return this._elementTemplate
    }

    set elementTemplate(value){
        this._elementTemplate = value
        this.setAttribute('data-element-template', value)
    }


    get showSelect(){
        // Retrieves if select should be shown

        if (this._showSelect && this._showSelect!= null){
            return this._showSelect
        }

        if(!this._showSelect || this._showSelect == null){          
            this._showSelect = this.getAttribute('data-show-select') || null
        }

        if (!this._showSelect || this._showSelect == null){
            return this._defaultShowSelect
        }
        
        return this._showSelect
    }

    set showSelect(value){
        this._showSelect = value
        this.setAttribute('data-show-select', value)
    }

    get showPosition(){
        // Retrieves if position should be shown

        if (this._showPosition && this._showPosition!= null){
            return this._showPosition
        }

        if(!this._showPosition || this._showPosition == null){          
            this._showPosition = this.getAttribute('data-show-position') || null
        }

        if (!this._showPosition || this._showPosition == null){
            return this._defaultShowPosition
        }

        return this._showPosition
    }

    set showPosition(value){
        this._showPosition = value
        this.setAttribute('data-show-position', value)
    }

    get showActions(){
        // Retrieves if position should be shown

        if (this._showActions && this._showActions!= null){
            return this._showActions
        }

        if(!this._showActions || this._showActions == null){          
            this._showActions = this.getAttribute('data-show-actions') || null
        }

        if (!this._showActions || this._showActions == null){
            return this._defaultShowActions
        }

        return this._showActions
    }

    set showActions(value){
        this._showActions = value
        this.setAttribute('data-show-actions', value)
    }
    
    
  
    // -----------------------------------------------------
    //  Element navigation 
    // -----------------------------------------------------

    get krItemListElement(){
        return this.querySelector('.krItemListElement')
    }

   
    
    // -----------------------------------------------------
    //  Select section 
    // -----------------------------------------------------


    select(){

        super.select()
        
        for (let e of this.krItemListElement.children){
            e.select()
        }
    }

    deselect(){
        super.deselect()
        for (let e of this.krItemListElement.children){
            e.deselect()
        }
        
    }


    
    getSelecteditems(){

        let items = []
        for(let e of this.krItemListElement.children){
            if (e.isSelected == true){
                items.push(e)
            }
        }
        return items
    }

    
    
    



    // -----------------------------------------------------
    //  Drag drop 
    // -----------------------------------------------------

    
    setEventListenerDrop(){
        
        this.addEventListener('dragover', event =>{
            event.preventDefault()
        })

        this.addEventListener('drop', event =>{

            let elementID = event.dataTransfer.getData('text/plain')
            let element = document.getElementById(elementID)
            if (element && element.tagName == 'KR-LIST-ITEM' && element.things.record_id != this.record_id){


                let itemDrop = event.target.closest('KR-LIST-ITEM')

                
                // Add record
                this.record.itemListElement.push(element.record)

                // Create new element
                let newElement = this.upsertItemElement(element.record)

                // Insert before other item if dropped on one
                if(itemDrop){

                    
                    itemDrop.before(newElement)
                    //newElement.resetPosition()
                } 
            }            
        })
    }


    
    // -----------------------------------------------------
    //  CRUD - Elements
    // -----------------------------------------------------
    
    
    createItemElement(record){
        record = this.recordToListItem(record)
        let newItem = document.createElement(this.listItemTemplate)
        newItem.thing = record
        this.setItemEventListeners(newItem)
        this.krItemListElement.appendChild(newItem)
        return newItem
    }


    async insertAfterItemElement(referenceElement, record){
       /**Insert a new item in itemListElement. Returns new item  
        * 
        */
        let item = this.thing.insertAfter(referenceElement.thing, record)
        //this.stateElement.setThing(item)
        //this.getChildPropertyElement('itemListElement')?.refreshElement()
        return await this.getItemElementWait(item.record_type, item.record_id)
        
    }


    async getItemElementWait(record_type, record_id) {

        return new Promise((resolve) => {
          const intervalId = setInterval(() => {
                let result = this.getItemElement(record_type, record_id)
                if (result && result != null ) {
                  clearInterval(intervalId);
                  resolve(result);
                }
              }, 100);
        })
    }

    
    
    getItemRecord(record_id){
        
        for(let r in this.record.itemListElement){
            if (r?.["@id"] == record_id){
                return r
            }
        }
        return null
    }


    getItemElementByPosition(position){

        for (let i of this.krItemListElement?.children || []){
            let p= i.thing.getProperty('position')?.value
            if (p == position ){
                return i
            }
        }
        return null
        
    }
    
    getItemElement(record_type, record_id){

        let propertyElement = this.getChildPropertyElement('itemListElement')
        for (let i of propertyElement?.children || []){
            let g = i.querySelector('.kr-list-item')
            if(g && g!= null){
                if (g.record_type == record_type && g.record_id == record_id){
                    return g
                }
            }
            
        }
        return null
    }
    
    updateItemElement(record){
        let itemElement = this.getItemElement(record['@type'], record['@id'])
        itemElement.record = record
        return itemElement
    }


    upsertItemElement(record){
        let itemElement = this.getItemElement(record['@type'], record['@id'])
        if(itemElement && itemElement != null){
            return this.updateItemElement(record)
        } else {
            return this.createItemElement(record)
        }
    }

    

    deleteItemRecord(record_ID){

        this.record.itemListElement = this.record.itemListElement.filter((item) => item?.['@id'] != record_ID);
    }

    
    deleteItemElement(record){
        let itemElement = this.getItemElement(record['@type'], record['@id'])
        itemElement.remove()
    }

    
    recordToListItem(record){

        if (record?.['@type'] == 'ListItem'){ return record}

        let listItem  = {
            "@type": "ListItem",
            "@id": String(crypto.randomUUID()),
            "item": record,
            "position": this.krItemListElement?.children.length || 0
        }
        return listItem
    }



    setItemEventListeners(item){

        item.addEventListener('kr-click', event => {

            let detail = event.detail
            const newEvent = new CustomEvent("kr-click", { detail: detail });
            this.dispatchEvent(newEvent)
            
        })

        item.addEventListener('kr-select', event => {

            const newEvent = new CustomEvent("kr-select", { detail: event.detail });
            this.dispatchEvent(newEvent)


        })
        
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
            "@id": "deleteaction1",
            "name": "DeleteAction1",
            "image": {
                "@type": "ImageObject",
                "contentUrl": "./icons/delete.svg"
            },
            "actionStatus": "potentialActionStatus",
            "object": "",
            "collection": {"@type": this.record_type, "@id": this.record_id}
        }
        return record

    }

    get defaultActionCopy(){

        let record = {
            "@type": ""
        }

    }


    // -----------------------------------------------------
    //  Potential actions 
    // -----------------------------------------------------

    executeAddAction(){

        if(this.record?.listItemElement|| null  == null){
            this.record.listItemElement = []
        }
        
        let element = this.createItemElement(this.listItemRecordTemplate)
        this.record.listItemElement.push(element)
        
    }


    executeDeleteAction(){

        for(let i of this.getSelecteditems()){
            this.deleteItemElement(i.record)
        }
        this.isSelected = false

    }

    
    
    findAction(actionID){

        for(let i of this.potentialActions){

            if (i?.['@id'] == actionID){
                return i
            }
        }
        return null
        
    }


    
    
    // -----------------------------------------------------
    //  Attributes 
    // -----------------------------------------------------

   


    
    
    get records(){
        return this.itemListElement
    }

    set records(value){
        this._record = this.recordToList(value)
    }

    
    recordToList(record){

        if(Array.isArray(record)){
            record = {
                "@type": "ItemList",
                "@id": String(crypto.randomUUID()),
                "name": "untitledlist",
                "itemListElement": record,
            }
        }
        return record
    }
    
  
}

customElements.define("kr-things", KrThingsElement);






function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}
