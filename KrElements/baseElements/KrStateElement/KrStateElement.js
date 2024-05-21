
import { KrThing } from 'https://tactik8.github.io/kraken_thing_js/kraken_thing/kraken_thing.js';


export class KrStateElement extends HTMLElement {
    /**
     * State manager 
     */

    constructor() {
        super();

        this._db = []
        this.record_type = "ItemList"
        this.record_id = String(crypto.randomUUID())
        this.record_ref = { "@type": this.record_type, "@id": this.record_id }
    }

    async initObject() {

        this.setDefaultId()

        //this.contentElement.contentEditable = true
        this.setMutationObserver()

    }

    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    setDefaultId() {

        if (!this.id || this.id == null) {
            this.id = String(crypto.randomUUID())
        }
    }


    


    // -----------------------------------------------------
    //  get set 
    // -----------------------------------------------------


    getThing(record_type, record_id) {

        
        
        if (record_type && record_type != null) {
            if (record_id && record_id != null) {
                
                return this._get_record(record_type, record_id)
            } else {
                return this._get_records_for_type(record_type)
            }

        } else {
            return this._get_records_all()
        }
    }


    _get_records_all() {
        let results = []

        for(let t of this._db){
            results.push(t)     
        }
       
        return results
    }

    _get_records_for_type(record_type) {

        let results = []

        for(let t of this._db){
            if(t.record_type == record_type)
            results.push(t)
        }
        return results
    }


    _get_record(record_type, record_id) {


        for(let t of this._db){
            if(t.record_type == record_type && t.record_id == record_id)
            return t
        }
        return null

    }


    setThing(record) {

        if (!(record instanceof KrThing)){
            let v = new KrThing()
            v.record = record
            record = v
            
        }

        this._db.push(record)
        this.setListenerOnThing(record)
        
        for (let r of record.things) {
            
            if(record.record_id != r.record_id){
                this.setThing(r)
            }
        }
       
        return record
    }


    setListenerOnThing(thing){

        thing.addEventListener('all', event => {

            let t = event.target
            console.log('Saving thing', t.record_type, t.record_id, t)
            //t.api_post()

            
        })

        
    }



    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------



    dispatchAddAction(record) {

        let eventRecord = {
            "@type": "addAction",
            "@id": String(crypto.randomUUID()),
            "targetCollection": this.record_ref,
            "object": record,
            "actionStatus": "completedActionStatus",
            "timeStart": new Date(),
            "timeEnd": new Date()
        }
        const newEvent = new CustomEvent("kr-addAction", { detail: eventRecord });
        this.dispatchEvent(newEvent)

        const newEventAll = new CustomEvent("kr-all", { detail: eventRecord });
        this.dispatchEvent(newEventAll)

    }

    dispatchDeleteAction(record) {

        let eventRecord = {
            "@type": "deleteAction",
            "@id": String(crypto.randomUUID()),
            "targetCollection": this.record_ref,
            "object": record,
            "actionStatus": "completedActionStatus",
            "timeStart": new Date(),
            "timeEnd": new Date()
        }

        const newEvent = new CustomEvent("kr-deleteAction", { detail: eventRecord });
        this.dispatchEvent(newEvent)

        const newEventAll = new CustomEvent("kr-all", { detail: eventRecord });
        this.dispatchEvent(newEventAll)

    }

    dispatchUpdateAction(record) {

        let eventRecord = {
            "@type": "updateAction",
            "@id": String(crypto.randomUUID()),
            "targetCollection": this.record_ref,
            "object": record,
            "actionStatus": "completedActionStatus",
            "timeStart": new Date(),
            "timeEnd": new Date()
        }

        const newEvent = new CustomEvent("kr-updateAction", { detail: eventRecord });
        this.dispatchEvent(newEvent)

        const newEventAll = new CustomEvent("kr-all", { detail: eventRecord });
        this.dispatchEvent(newEventAll)

    }


    // -----------------------------------------------------
    //  Mutation observer 
    // -----------------------------------------------------

    setMutationObserver() {

        const callback = (mutationList, observer) => {
            for (const mutation of mutationList) {
                if (mutation.type === "childList") {
                }
            }
        };


        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);

        const config = { attributes: true, attributeOldValue: true, childList: true, subtree: true };

        // Start observing the target node for configured mutations
        observer.observe(this, config);

    }



    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------


    connectedCallback() {
        this.classList.add('kr-state')
        this.initObject()
    }

    disconnectedCallback() {
    }

    adoptedCallback() {
    }

    attributeChangedCallback(name, oldValue, newValue) {
    }

}

customElements.define("kr-state", KrStateElement);





function flattenThings(record) {

    let results = []

    if (Array.isArray(record)) {

        for (let r of record) {
            results = results.concat(flattenThings(r))
        }

    } else if (typeof record === 'object') {

        if (record['@type']) {
            results.push(record)
        }

        for (let k in record) {
            results = results.concat(flattenThings(record[k]))
        }
    }
    return results
}


