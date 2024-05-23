



export class KrValueElement extends HTMLElement {
    constructor() {
        super();
        
        this._value = null
        //this.position = 0
    }

    async initObject(){

        this.setDefaultId()
       
        this.setMutationObserver()
      

    }

    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------



    setDefaultId(){

        if (!this.id || this.id == null){
            this.id = String(crypto.randomUUID())
        }
    }


    loadValueFromAttribute(){

        if (this.dataset.value && this.dataset.value != null && this.dataset.value != ""){
            this.value = JSON.parse(this.dataset.value)
        }

        
    }

    
    
   

    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------


    get contentElement(){

        if (!this.children || this.children.length == 0){
            let contentElement = document.createElement('div')
            this.appendChild(contentElement)
            contentElement.classList.add('kr-value-span')
        }

        let element = this.querySelector('.kr-value-span')
        return element
    }


    

    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------


    get thing(){
        return this.closest('.kr-thing')
    }

    get record(){
        return this.thing.record
    }

    get propertyID(){
        return this.getAttribute('data-property-id')
    }

    set propertyID(value){
        return this.setAttribute('data-property-id', value)
    }


    get property(){
        return this.closest('.kr-property')
    }

    
    get position(){
        return this.getAttribute('data-position')
    }

    set position(value){
        return this.setAttribute('data-position', value)
    }

    get values(){

        let values = this.property?.values
        return values
        
    }

    set values(value){
        this._value = value
    }
    

    get value(){
        let values = this.values
        if(Array.isArray(values)){
            return values?.[Number(this.position)]
        } else {
            if (Number(this.position) == 0 || !this.position || this.position == ""){
                return values
            } else {
                return null
            }
        }
        
    }

    set value(value){
        
        this._value = value
    }
    
    get valueElement(){
        return this.contentElement.innerText
    }

    set valueElement(value){
        this.contentElement.innerText = value
    }




    // -----------------------------------------------------
    //  potentialActions 
    // -----------------------------------------------------

    addPropertyValueAction(value){

        this.thing.addProperty(this.propertyID, value)
        this.value = value
    }

    replacePropertyValueAction(value, refreshFlag=true){

        if(this.value != value){
            this.thing.replaceProperty(this.propertyID, this.value, value, refreshFlag)
            
        }
    }

    deletePropertyValueAction(value){

        this.thing.removeProperty(this.propertyID, value)
        this.value = null
        this.remove()
    }

    
    
    // -----------------------------------------------------
    //  Mutation observer 
    // -----------------------------------------------------

    setMutationObserver(){

        const callback = (mutationList, observer) => {
            for (const mutation of mutationList) {
                if (mutation.type === "childList") {
                } else if (mutation.type === "attributes") {
                } else if (mutation.type === "characterData") {
                    this.thing.record[this.propertyID] = mutation.target.innerText
                    
                }
              }
            };


        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);

        const config = { attributes: true, attributeOldValue: true, characterData: true, characterDataOldValue: true, childList: true, subtree: true };

        
        // Start observing the target node for configured mutations
        observer.observe(this, config);
        
    }
      

    
    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------


    connectedCallback() {
        this.classList.add('kr-value')
        this.loadValueFromAttribute()
        this.initObject()
    }

    disconnectedCallback() {
    }

    adoptedCallback() {
    }

    attributeChangedCallback(name, oldValue, newValue) {
    }



}

customElements.define("kr-value", KrValueElement);

