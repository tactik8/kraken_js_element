
import { card } from './template/card.js'
import * as liquidjs from 'liquidjs';
import { KrThingElement } from '../KrThingElement/KrThingElement.js'
const engine = new liquidjs.Liquid()




export class KrListItemElement extends KrThingElement {
    constructor() {
        super();


        // Override template
        this.htmlTemplate = card()


        // Set template for item content
        this.itemTemplate = null


        // 
        this._isSelected = false

    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject() {

        //
        await super.initObject()

        this.showItemContent()
        
        this.setEventListenerPotentialActions()
        this.setEventListenerSelect()
        this.setEventListenerClick()
        this.setEventListenerReorder()

    }


    async refreshObject(){
        await this.initObject()
        
    }
    
    resetPosition(){

        let oldValue = this.record.position
        let newValue = this.position

        if(oldValue != newValue) {
            
            this.record.position = this.position

            if (this.thing){
                this.thing.replaceProperty('position', this.position)
            }

            this.refreshObject()
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

    get KrSelect() {
        return this.querySelector('kr-select > input')
    }


    // -----------------------------------------------------
    //  Content 
    // -----------------------------------------------------

    async renderHTML() {

        let tpl = await engine.parse(this.htmlTemplate)
        let r = JSON.parse(JSON.stringify(this.record))
        r['item'] = '<span class="krItemElement"></span>'
        this.htmlContent = await engine.render(tpl, r)

    }

    showItemContent() {
        let itemElement = document.createElement(this.itemTemplate)
        itemElement.record = this.record?.item
        this.krItemElement.innerHTML = ''
        this.krItemElement.appendChild(itemElement)
    }


    // -----------------------------------------------------
    //  Select section 
    // -----------------------------------------------------

    get isSelected() {

        return this.KrSelect.checked

    }

    setEventListenerSelect() {

        let m = this
        this.KrSelect.addEventListener('click', (event) => {

            if (m.isSelected == true) {
                m.firstElementChild.classList.add('bg-body-tertiary')
                this.isSelected = true
            } else {
                m.firstElementChild.classList.remove('bg-body-tertiary')
                this.isSelected = false
            }
        })
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


    get isSelected() {
        return this._isSelected
    }

    set isSelected(value) {

        let oldValue = this._isSelected
        this._isSelected = value
        if (value != oldValue) {
            const event = new CustomEvent("kr-select", { detail: this.record });
            this.dispatchEvent(event)
            this.KrSelect.checked = value
        }
    }


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
        if (this.previousItem == null) {
            return 0
        } else {
            return this.previousItem.position + 1
        }
    }


    get firstItem() {

        let item = this
        while(item.previousItem){
            item=item.previousItem
        }
        return item
    }
    
    get previousItem() {
        let item = this.previousSibling

        while(item && item.tagName != this.tagName){
            item = item.previousSibling || null
        }
        return item
    }
    
    get nextItem() {
        let item = this.nextSibling

        while(item && item.tagName != this.tagName){
            item = item.nextSibling || null
        }
        return item
    }

    get things(){
        return this.closest('kr-things')
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

    

    connectedCallback() {
        //console.log("Custom element added to page.");
    }

    disconnectedCallback() {
        //console.log("Custom element removed from page.");
    }

    adoptedCallback() {
       // console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        //console.log(`Attribute ${name} has changed krListItem.`);
    }





}

customElements.define("kr-list-item", KrListItemElement);