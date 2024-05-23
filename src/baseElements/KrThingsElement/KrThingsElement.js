
import { KrThingElement } from '../KrThingElement/KrThingElement.js'

import { baseTemplate } from './templates/base.js'

import * as liquidjs from 'liquidjs'



//import { Liquid } from 'liquidjs'
const engine = new liquidjs.Liquid()



export class KrThingsElement extends KrThingElement {
    constructor() {
        super();

        // Set template and content for list
        this.htmlTemplate = baseTemplate()
        
        // Set template for listItems
        this.listItemTemplate = null
        this.listItemRecordTemplate = null            // Template record for new list items elements

        // Set template for listItem.item content
        this.listItem_itemTemplate = null
        

        // Set options
        this.showSelect = true
        this.showPosition = true
        


        
    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject(){

        await super.initObject()
       
        this.loadRecords()

        this.setEventListenerSelect()
        this.setEventListenerDrop()

    }

    loadRecords(){

        if(!this.records){return}
        
        for (let record of ensureArray(this.records)){
            this.upsertItemElement(record)
        }
        
    }

  
    // -----------------------------------------------------
    //  Element navigation 
    // -----------------------------------------------------

    get krItemListElement(){
        return this.querySelector('.krItemListElement')
    }

   
   

    // -----------------------------------------------------
    //  Content renderer 
    // -----------------------------------------------------

    async renderHTML(){

        let tpl = await engine.parse(this.htmlTemplate)
        let r = JSON.parse(JSON.stringify(this.elementRecord))
        r['itemListElement'] = '<span class="krItemListElement"></span>'
        this.htmlContent = await engine.render(tpl, r)

    }

    
    // -----------------------------------------------------
    //  Select section 
    // -----------------------------------------------------


    getSelecteditems(){

        let items = []
        for(let e of this.krItemListElement.children){
            if (e.isSelected == true){
                items.push(e)
            }
        }
        return items
    }

    
    get KrSelect(){
        return this.querySelector('kr-select-all > input')
    }

    
    get isSelected(){

        return this.KrSelect.checked

    }


    set isSelected(value){

        this.KrSelect.checked = value
        
    }

    selectAll(){

        for (let e of this.krItemListElement.children){
            if(e.isSelected == false){
                 e.isSelected=true
            }
        }
    }

    selectNone(){

        for (let e of this.krItemListElement.children){
            if(e.isSelected == true){
                 e.isSelected=false
            }
        }
    }

    setEventListenerSelect(){

        let m = this
            this.KrSelect.addEventListener('click', (event)=>{

                if(m.isSelected == true){
                    this.selectAll()
                } else {
                    this.selectNone()
                }

        })
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
            if (element.tagName == 'KR-LIST-ITEM' && element.things.record_id != this.record_id){


                let itemDrop = event.target.closest('KR-LIST-ITEM')

                
                // Add record
                this.record.itemListElement.push(element.record)

                // Create new element
                let newElement = this.upsertItemElement(element.record)

                // Insert before other item if dropped on one
                if(itemDrop){
                    itemDrop.before(newElement)
                    newElement.resetPosition()
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
        newItem.itemTemplate = this.listItem_itemTemplate
        newItem.record = record
        this.setItemEventListeners(newItem)
        this.krItemListElement.appendChild(newItem)
        return newItem
    }


    getItemRecord(record_id){
        
        for(let r in this.record.itemListElement){
            if (r?.["@id"] == record_id){
                return r
            }
        }
        return null
    }

    
    getItemElement(record_type, record_id){

        for (let i of this.krItemListElement?.children || []){
            if (i.record_type == record_type && i.record_id == record_id){
                return i
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

        if (record['@type'] == 'ListItem'){ return record}

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


    
    get potentialActions(){

        let actions =[]
        actions.push(this.addAction)
        actions.push(this.deleteAction)
        return actions

    }


    get addAction(){

        let item=this
        let record = {
            "@type": "addAction",
            "@id": "addAction",
            "name": "add",
            "image": {"@type": "ImageObject", "contentUrl": "./icons/plus.svg"},
            "object": this.listItemRecordTemplate,
            "url": "",
            "actionStatus": "potentialActionStatus",
            "targetCollection": "listItemElement",
            "target": "executeAddAction",
        }
        return record
    }

    get deleteAction(){

        let item=this
        let record = {
            "@type": "deleteAction",
            "@id": "deleteAction",
            "name": "delete",
            "image": {"@type": "ImageObject", "contentUrl": "./icons/delete.svg"},
            "object": "",
            "url": "",
            "actionStatus": "potentialActionStatus",
            "targetCollection": "listItemElement",
            "target": "executeDeleteAction",
        }
        return record
    }

    
    // -----------------------------------------------------
    //  Attributes 
    // -----------------------------------------------------

   


    get itemListElement(){
        return this._record?.itemListElement || []
    }

    set itemListElement(value){
        this._record.itemListElement = value
    }
    
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
