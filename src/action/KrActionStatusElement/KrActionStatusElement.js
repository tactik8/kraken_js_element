
import { KrValueElement } from '../../baseElements/KrValueElement/KrValueElement.js'

//import { status } from './template/status.js'


export class KrActionStatusElement extends KrValueElement {
    constructor() {
        super();


        // Override template
      this.setEventListenerClick()


       

    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    

    // -----------------------------------------------------
    //  Set listener 
    // -----------------------------------------------------


    setEventListenerClick(){

        this.addEventListener('click', event =>{

            this.isClicked()
        })
        
    }



    
    // -----------------------------------------------------
    //  Status 
    // -----------------------------------------------------


    assignNextStatus(){

        if(this._value == "potentialActionStatus") { this.setCompletedActionStatus() }
        else if(this._value == "completedActionStatus") { this.setActiveActionStatus() }
            
        else if(this._value == "activeActionStatus") { this.setFailedActionStatus() }
        else if(this._value == "failedActionStatus") { this.setPotentialActionStatus() }
        else  { this.setPotentialActionStatus() }
    }


    setRecord(value){

        if(this?.thing?.record){
            this.thing.record.actionStatus = value
        }
    }

    setPotentialActionStatus(){

        this._value = "potentialActionStatus"
        this.setRecord('potentialActionStatus')
        
        this.contentElement.innerHTML = this.potentialActionStatusIcon()
    }

    setActiveActionStatus(){

        this._value = "activeActionStatus"
        this.setRecord('activeActionStatus')
        this.contentElement.innerHTML = this.activeActionStatusIcon()
    }
    
    setCompletedActionStatus(){

        this._value = "completedActionStatus"
        this.setRecord('completedActionStatus')
        this.contentElement.innerHTML = this.completedActionStatusIcon()

    }

    setFailedActionStatus(){

        this._value = "failedActionStatus"
        this.setRecord('failedActionStatus')
        this.contentElement.innerHTML = this.failedActionStatusIcon()

    }
    

    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------

    isClicked() {
        console.log('click')
        this.assignNextStatus()
        const event = new CustomEvent("kr-click", { detail: this._value });
        this.dispatchEvent(event)
    }


    

    

    connectedCallback() {
        //console.log("Custom element added to page.");
        super.connectedCallback()
        if(!this._value || this._value == null) { this.setPotentialActionStatus()}
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



    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    completedActionStatusIcon(){

        // checked square 
        return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
            </svg>`
    }


    potentialActionStatusIcon(){
        // squre
        return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
</svg>`
    }

    

    activeActionStatusIcon(){
            //dash square
        return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg>`
    }

    failedActionStatusIcon(){
                //dash square
            return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>`
        }



}

customElements.define("kr-action-status", KrActionStatusElement);