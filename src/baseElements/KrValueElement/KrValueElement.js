import { KrBaseElement } from "../KrBaseElement/KrBaseElement.js";
import { template } from "./template/template.js";

export class KrValueElement extends KrBaseElement {
    constructor() {
        super();
        this.htmlTemplate = template(); // HTML content as template
        this._schema = null;
        this._value = null;
    }

    // -----------------------------------------------------
    //  Init
    // -----------------------------------------------------

    async initObject() {
        this.classList.add("kr-value");

        this.config.valueTemplate = this.propertyElement?.valueTemplate || null
        super.initObject();
        this.propertyID
        this._base_type = "KrValue";
        //this.startObserver();
        this._value = null
    }


    refreshElement(){

        let newValue = this.value
        if(this._value == newValue){ return }
        this._value = newValue
        
        let childThings = this.getChildThingElements()

        if(!childThings || childThings == null){ this.initObject() }

       
        let childThing = childThings[0]
        if(childThing && childThing.record_type == newValue?.record_type && childThing.record_id == newValue?.record_id){
            return
        }

        this.initObject()
        
    }
    
    // -----------------------------------------------------
    //  Additional attributes
    // -----------------------------------------------------

    get dataElement() {
        return this.querySelector("span");
    }

    // -----------------------------------------------------
    //  Vaklue observer
    // -----------------------------------------------------

    startObserver() {
        var target = this.dataElement;
        // create an observer instance
        let element = this;
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type == "characterData") {
                    
                    element.processContentChange();
                }
            });
        });

        // configuration of the observer:
        var config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true,
        };

        // pass in the target node, as well as the observer options
        observer.observe(this, config);
    }

    processContentChange() {

        console.log(this.dataElement.textContent)
        if(!this.propertyID){ return }
        let oldValue = this._value;
        let newValue = this.dataElement.textContent;
        this._value = newValue;
        this.thing.replaceProperty(this.propertyID, oldValue, newValue);
        
    }

    // -----------------------------------------------------
    //  Custom Element Events
    // -----------------------------------------------------


    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    
}

customElements.define("kr-value", KrValueElement);
