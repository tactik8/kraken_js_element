
import { KrBaseElement } from '../KrBaseElement/KrBaseElement.js'
import { template } from './template/template.js'


export class KrSelectElement extends KrBaseElement {
    constructor() {
        super();
        this.htmlTemplate = template()            // HTML content as template
        this._schema = null

        this._eventListenerSelectSet = false
        this._eventListenerParentSet = false

    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject(){

        
        this.classList.add('kr-state')
        super.initObject()
        this._base_type = 'KrState'
        this.setEventListenerSelect()
        this.setEventListenerParent()

    }


    // -----------------------------------------------------
    //  Additional attributes 
    // -----------------------------------------------------



    get checkbox(){
        return this.querySelector('.krselect')
    }


    
    setEventListenerParent(){


        if(this._eventListenerParentSet = true) { 
            //return 
        }

        this._eventListenerParentSet = true
        
        let element = this

        if(!this.thingElement || this.thingElement==null){ return }

      
        this.thingElement.addEventListener('kr-selected', (event)=>{
            element.checkbox.checked = true
            
        })
        this.thingElement.addEventListener('kr-deselected', (event)=>{
            element.checkbox.checked = false
        })
     
    }

    
    setEventListenerSelect(){

        
        if(this._eventListenerSelectSet = true) { 
            //return 
        }
      

        this._eventListenerSelectSet = true

        let element = this
        this.addEventListener('click', (event)=>{
            if(element.checkbox.checked == true){
                element.thingElement.select()
            } else {
                element.thingElement.deselect()
            }
        })
    }


    


    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------


  
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue)
    }
}

customElements.define("kr-select", KrSelectElement)


