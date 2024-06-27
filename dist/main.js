import {KrDb as $5OpyM$KrDb, KrThing as $5OpyM$KrThing, KrThings as $5OpyM$KrThings} from "krakenthing";
import {Liquid as $5OpyM$Liquid} from "liquidjs";
import "krakenrecord";
import {KrakenSchemas as $5OpyM$KrakenSchemas} from "krakenschema";


class $e1d2d0ad7c039b95$export$5f9669fd1f9421b0 extends HTMLElement {
    /**
     * State manager
     * attributes:
     * -
     * methods:
     * - getThing:
     * - setThing:
     * 
     */ constructor(){
        super();
        this._db = new (0, $5OpyM$KrDb)("https://data.krknapi.com/api/test7");
        this.record_type = "ItemList";
        this.record_id = String(crypto.randomUUID());
        this.record_ref = {
            "@type": this.record_type,
            "@id": this.record_id
        };
    }
    async initObject() {
        this.setDefaultId();
        //this.contentElement.contentEditable = true
        this.setMutationObserver();
    }
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------
    setDefaultId() {
        if (!this.id || this.id == null) this.id = String(crypto.randomUUID());
    }
    // -----------------------------------------------------
    //  get set 
    // -----------------------------------------------------
    getThing(record_type, record_id) {
        let thing = this._db.getFromCache(record_type, record_id);
        if (!thing || thing == null) this._db.getFromApi(record_type, record_id);
        console.log("got ", thing);
        return thing;
    }
    _get_records_all() {
        let results = [];
        for (let t of this._db)results.push(t);
        return results;
    }
    _get_records_for_type(record_type) {
        let results = [];
        for (let t of this._db)if (t.record_type == record_type) results.push(t);
        return results;
    }
    _get_record(record_type, record_id) {
        for (let t of this._db){
            if (t.record_type == record_type && t.record_id == record_id) return t;
        }
        return null;
    }
    setThing(record) {
        if (!record || record == null) return null;
        if (!(record instanceof (0, $5OpyM$KrThing))) {
            let v;
            if (record["@type"] == "ItemList") v = new (0, $5OpyM$KrThings)();
            else v = new (0, $5OpyM$KrThing)();
            v.record = record;
            record = v;
        }
        // Convert to things if itemlist
        if (record.record_type == "ItemList" && !(record instanceof (0, $5OpyM$KrThings))) {
            let v = new (0, $5OpyM$KrThings)();
            v.record = record.record;
            record = v;
        }
        // Check if already there
        if (this.getThing(record.record_type, record.record_id)) return record;
        // Set to cache
        this._db.postToCache(record);
        //this._db.push(record)
        this.setListenerOnThing(record);
        for (let r of record.things)if (record.record_id != r.record_id) this.setThing(r);
        return record;
    }
    setListenerOnThing(thing) {
        let element = this;
        thing.addEventListener("all", (event)=>{
            let thing = event.target.record_type;
            for (let r of event.target.things)this.setThing(r);
            element.setThing(event.target);
        //t.api_post()
        });
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
        };
        const newEvent = new CustomEvent("kr-addAction", {
            detail: eventRecord
        });
        this.dispatchEvent(newEvent);
        const newEventAll = new CustomEvent("kr-all", {
            detail: eventRecord
        });
        this.dispatchEvent(newEventAll);
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
        };
        const newEvent = new CustomEvent("kr-deleteAction", {
            detail: eventRecord
        });
        this.dispatchEvent(newEvent);
        const newEventAll = new CustomEvent("kr-all", {
            detail: eventRecord
        });
        this.dispatchEvent(newEventAll);
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
        };
        const newEvent = new CustomEvent("kr-updateAction", {
            detail: eventRecord
        });
        this.dispatchEvent(newEvent);
        const newEventAll = new CustomEvent("kr-all", {
            detail: eventRecord
        });
        this.dispatchEvent(newEventAll);
    }
    // -----------------------------------------------------
    //  Mutation observer 
    // -----------------------------------------------------
    setMutationObserver() {
        const callback = (mutationList, observer)=>{
            for (const mutation of mutationList)mutation.type;
        };
        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);
        const config = {
            attributes: true,
            attributeOldValue: true,
            childList: true,
            subtree: true
        };
        // Start observing the target node for configured mutations
        observer.observe(this, config);
    }
    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------
    connectedCallback() {
        this.classList.add("kr-state");
        this.initObject();
    }
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback(name, oldValue, newValue) {}
}
customElements.define("kr-state", $e1d2d0ad7c039b95$export$5f9669fd1f9421b0);
function $e1d2d0ad7c039b95$var$flattenThings(record) {
    let results = [];
    if (Array.isArray(record)) for (let r of record)results = results.concat($e1d2d0ad7c039b95$var$flattenThings(r));
    else if (typeof record === "object") {
        if (record["@type"]) results.push(record);
        for(let k in record)results = results.concat($e1d2d0ad7c039b95$var$flattenThings(record[k]));
    }
    return results;
}




const $f8f777b7d537305b$var$engine = new $5OpyM$Liquid();
class $f8f777b7d537305b$export$6937c6a84099f1b6 extends HTMLElement {
    /**
     * Attributes:
     * - record_type (str): returns @type
     * - record_id (str): returns @id
     * - thing (KrThing): returns KrThing
     * - propertyID (str): return property name if relevant
     * - position (int): return theposition of thevalue to use in a list of values
     * - values (): returns values (if valueelement)
     * - value (): returns value in position of values list
     *
     * - thingElement: returns relevant thingElement (.kr-thing)
     * - propertyElement: returns closest propertyElement (.kr-property)
     * - valueElement: returns closest valueElemenet (.kr-value)
     * - stateElement: returns steteElement (kr-state)
     * - isSelected (bool): returns true if is selected
     *
     * - potentialAction: return record of poeential actions
     * 
     * Methods:
     * - select: set to isSelected true, sends event
     * - deselect: set to isSelected false, sends event
     */ constructor(){
        super();
        this._base_type = null;
        this._thing = null;
        this._record_type = null;
        this._record_id = null;
        this._propertyID = null;
        this._value = null;
        this._position = null;
        this._stateElement = null;
        this._thingElement = null;
        this._propertyElement = null;
        this._valueElement = null;
        this._isSelected = false;
        this.htmlTemplate = null // HTML content as template
        ;
        this.htmlContent = null // Actual HTML content
        ;
        this.config = {};
        this.useBestRecord = false;
        this.isInitialized = false;
        this.isBinded = false;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        let s = this.stateElement;
        this.setDefaultId();
        this.loadFromAttributes();
        this.loadFromValueElement();
        await this.renderHTML();
        this.showContent();
        this.bindToThing();
    }
    setDefaultId() {
        if (!this.id || this.id == null) this.id = String(crypto.randomUUID());
    }
    loadFromAttributes() {
        if (this.dataset.record) this.record = JSON.parse(this.dataset.record);
        if (this.getAttribute("data-record-type")) this.record_type = this.getAttribute("data-record-type");
        if (this.getAttribute("data-record-id")) this.record_id = this.getAttribute("data-record-id");
        if (this.getAttribute("data-property-id")) this.propertyID = this.getAttribute("data-property-id");
        if (this.getAttribute("data-value")) this.value = this.JSON.parse(getAttribute("data-value")) || null;
        if (this.getAttribute("data-position")) this._position = this.getAttribute("data-position");
    }
    loadFromValueElement() {
        if (this._base_type != "KrThing") return;
        if (!this.valueElement || this.valueElement == null) return;
        if (!this.valueElement.value || this.valueElement.value == null) return;
        if (this.valueElement.value["@type"]) {
            this.record_type = this.valueElement.value["@type"];
            this.record_id = this.valueElement.value["@id"];
        }
        if (this.valueElement.value?.record_type) {
            this.record_type = this.valueElement.record_type;
            this.record_id = this.valueElement.record_id;
        }
    }
    // -----------------------------------------------------
    //  Content renderer 
    // -----------------------------------------------------
    get elementRecord() {
        // Record with added 
        if (!this.thing || this.thing == null) return {};
        if (this._base_type == "KrThing") return $f8f777b7d537305b$var$simplify(this.thing.record) || {};
        if (this._base_type == "KrProperty") {
            if (this.thing && this.thing != null) {
                let v = [];
                let values = this.thing.getProperty(this.propertyID)?.propertyValuesNet || [];
                // Sort items if itemListElement
                if (this.propertyID == "itemListElement") {
                    function compareFn(a, b) {
                        if (a.value.position < b.value.position) return -1;
                        else if (a.value.position > b.value.position) return 1;
                        // a must be equal to b
                        return 0;
                    }
                    values.sort(compareFn);
                }
                for (let value of values)v.push(value.getSystemRecord(5) || value);
                return v;
            }
        }
        if (this._base_type == "KrValue") {
            let pvs = this.thing.getProperty(this.propertyID)?.propertyValuesNet;
            if (!pvs || pvs == null) return;
            pvs = $f8f777b7d537305b$var$ensureArray(pvs);
            for (let pv of pvs){
                if (pv.record_id == this.record_id) return pv.getSystemRecord();
            }
            return null;
        }
    }
    async renderHTML() {
        if (!this.htmlTemplate || this.htmlTemplate == null) return;
        let tpl = await $f8f777b7d537305b$var$engine.parse(this.htmlTemplate);
        this.htmlContent = await $f8f777b7d537305b$var$engine.render(tpl, {
            item: this.elementRecord,
            config: this.config
        });
    }
    showContent() {
        this.innerHTML = this.htmlContent;
    }
    refreshElement() {
        this.initObject();
    }
    // -----------------------------------------------------
    //  Attributes 
    // -----------------------------------------------------
    get record_type() {
        if (this._record_type && this._record_type != null) return this._record_type;
        if (!this._record_type || this._record_type == null) this._record_type = this.getAttribute("data-record-type") || null;
        if (!this._record_type || this._record_type == null) this._record_type = this?._thing?.record_type || null;
        return this._record_type;
    }
    set record_type(value) {
        this._record_type = value;
        this.setAttribute("data-record-type", value);
    }
    get record_id() {
        if (this._record_id && this._record_id != null) return this._record_id;
        if (!this._record_id || this._record_id == null) this._record_id = this.getAttribute("data-record-id") || null;
        if (!this._record_id || this._record_id == null) this._record_id = this?._thing?.record_id || null;
        return this._record_id;
    }
    set record_id(value) {
        this._record_id = value;
        this.setAttribute("data-record-id", value);
    }
    get position() {
        if (this._position && this._position != null) return this._position;
        if (!this._position || this._position == null) this._position = this.getAttribute("data-position") || null;
        return this._record_id;
    }
    set position(value) {
        this._position = Number(value);
        this.setAttribute("data-position", value);
    }
    get thing() {
        if (this._thing && this._thing != null) return this._thing;
        if (!this._thing || this._thing == null) {
            if (this.record_type != null && this.record_id != null) this._thing = this.stateElement.getThing(this.record_type, this.record_id) || null;
        }
        // If value, get parent KrValueElement value
        if (!this._thing || this._thing == null) {
            if (this._base_type == "KrThing") this._thing = this.valueElement?.value || null;
        }
        if (!this._thing || this._thing == null) {
            if (this._base_type == "KrThing") // Create new thing
            {
                if (this.record_type && this.record_id) {
                    this._thing = new (0, $5OpyM$KrThing)(this.record_type, this.record_id);
                    this.stateElement.setThing(this._thing);
                }
            }
        }
        // If value, get parent KrPropertyElement
        if (!this._thing || this._thing == null) {
            if (this._base_type == "KrValue") this._thing = this.propertyElement?.thing || null;
        }
        // Get parent thing element
        if (!this._thing || this._thing == null) this._thing = this.thingElement?.thing || null;
        if (!this._thing || this._thing == null) {
            const searchParams = new URLSearchParams(window.location.search);
            this._record_type = searchParams.get("@type");
            this._record_id = searchParams.get("@id");
            this._thing = this.stateElement.getThing(this.record_type, this.record_id) || null;
        }
        return this._thing;
    }
    set thing(value) {
        let newThing = this.stateElement.setThing(value);
        this._thing = newThing;
        this.record_type = this._thing?.record_type || null;
        this.record_id = this._thing?.record_id || null;
        this.bindToThing();
    }
    get thingElement() {
        return this?.parentElement?.closest(".kr-thing") || null;
    }
    get propertyElement() {
        return this?.parentElement?.closest(".kr-property") || null;
    }
    get valueElement() {
        return this?.parentElement?.closest(".kr-value") || null;
    }
    get stateElement() {
        if (this._stateElement && this._stateElement != null) return this._stateElement;
        if (!this._stateElement || this._stateElement == null) this._stateElement = document.getElementsByTagName("KR-STATE")?.[0];
        if (!this._stateElement || this._stateElement == null) {
            this._stateElement = document.createElement("KR-STATE");
            document.body.appendChild(this._stateElement);
        }
        return this._stateElement || null;
    }
    get childThingElements() {
        return $f8f777b7d537305b$var$getDirectChilds(this, "kr-thing");
    }
    get childPropertyElements() {
        return $f8f777b7d537305b$var$getDirectChilds(this, "kr-property");
    }
    getChildPropertyElement(propertyID) {
        if (!propertyID || propertyID == null) return null;
        let childs = this.childPropertyElements;
        for (let child of childs){
            if (child.propertyID == propertyID) return child;
        }
        return null;
    }
    get childValueElements() {
        return $f8f777b7d537305b$var$getDirectChilds(this, "kr-value");
    }
    getChildValueElement(record_id) {
        let valueElements = this.childValueElements;
        for (let v of valueElements){
            if (v.record_id == record_id) return v;
        }
        return null;
    }
    get propertyID() {
        if (this._propertyID && this._propertyID == null) return this._propertyID;
        if (!this._propertyID || this._propertyID != null) this._propertyID = this.getAttribute("data-property-id") || null;
        if (!this._propertyID || this._propertyID != null) {
            if (this._base_type == "KrValue") this._propertyID = this.propertyElement?.propertyID || null;
        }
        return this._propertyID;
    }
    set propertyID(value) {
        return this.setAttribute("data-property-id", value);
    }
    get values() {
        if (!this.propertyID || this.propertyID == null) return [];
        if (!this.thing || this.thing == null) return [];
        let values = this.thing.getProperty(this.propertyID)?.values || [];
        return values;
    }
    set values(value) {
        this._value = value;
    }
    get value() {
        let values = this.values;
        if (Array.isArray(values)) return values?.[Number(this.position)];
        else {
            if (Number(this.position) == 0 || !this.position || this.position == "") return values;
            else return null;
        }
    }
    set value(value) {
        this._value = value;
    }
    // -----------------------------------------------------
    //  Actions 
    // -----------------------------------------------------
    get potentialActions() {
        let actions = this.thing.getProperty("potentialAction").values;
        if (!actions || actions == null || actions == [] || actions.length == 0) return this.defaultActions;
        else return actions;
    }
    get defaultActions() {
        return null;
    }
    getAction(record_type, record_id) {
        let actions = this.potentialActions;
        for (let action of actions){
            if (action?.["@type"] == record_type && action?.["@id"] == record_id) return action;
        }
        return null;
    }
    // -----------------------------------------------------
    //  State management 
    // -----------------------------------------------------
    bindToThing() {
        if (!this.thing || this.thing == null) return;
        if (this._base_type != "KrThing") return;
        if (this.isBinded == true) return;
        this.isBinded = true;
        let element = this;
        this.thing.addEventListener("all", (event)=>{
            element.eventManager(event);
        });
    }
    eventManager(event) {
        let target = event?.target;
        if (!target || target == null) return;
        if (target.record_type != this.record_type) return;
        if (target.record_id != this.record_id) return;
        if (event.type == "replaceAction") this.eventReplace(event);
        if (event.type == "addAction") this.eventReplace(event);
        if (event.type == "deleteAction") this.eventReplace(event);
    }
    eventReplace(event) {
        if (this._base_type == "KrThing") {
            let p = this.getChildPropertyElement(event.data.propertyID);
            if (p && p != null) p.refreshElement();
            else this.refreshElement();
            if (event.data.propertyID == "position") {
                if (this.propertyElement) this.propertyElement.refreshElement();
            }
        }
    }
    // -----------------------------------------------------
    //  element selection 
    // -----------------------------------------------------
    get isSelected() {
        return this._isSelected;
    }
    select() {
        if (this._isSelected == false) {
            this._isSelected = true;
            this.classList.add("active");
            const newEvent = new CustomEvent("kr-selected", {
                detail: this.record
            });
            this.dispatchEvent(newEvent);
        }
    }
    deselect() {
        if (this._isSelected == true) {
            this._isSelected = false;
            this.classList.remove("active");
            const newEvent = new CustomEvent("kr-deselected", {
                detail: this.record
            });
            this.dispatchEvent(newEvent);
        }
    }
    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------
    connectedCallback() {
        this.style.display = "block";
        this.initObject();
    }
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback(name, oldValue, newValue) {
        [
            "data-record-type",
            "data-record-id"
        ].includes(name);
    }
}
customElements.define("kr-base", $f8f777b7d537305b$export$6937c6a84099f1b6);
function $f8f777b7d537305b$var$simplify(data, count = 0, origData = null) {
    if (origData == null) origData = data;
    //return data
    // Remove arrays of 1
    if (Array.isArray(data)) {
        // If the array has exactly one element, return that element
        if (data.length === 1) return $f8f777b7d537305b$var$simplify(data[0], count + 1, origData);
        else // Otherwise, process each element in the array
        return data.map($f8f777b7d537305b$var$simplify);
    } else if (data !== null && typeof data === "object") {
        // If the data is an object, process each key
        const newData = {};
        for(const key in data)if (data.hasOwnProperty(key)) newData[key] = $f8f777b7d537305b$var$simplify(data[key], count + 1, origData);
        return newData;
    } else // If the data is neither an array nor an object, return it as is
    return data;
}
function $f8f777b7d537305b$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}
function $f8f777b7d537305b$var$getDirectChilds(element, className) {
    // returns direct childs, not grandchilds
    let results = [];
    for (let child of element.children)if (child.classList && child.classList.contains(className)) results.push(child);
    else results = results.concat($f8f777b7d537305b$var$getDirectChilds(child, className));
    return results;
}
function $f8f777b7d537305b$var$debounce(func, timeout = 300) {
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(this, args);
        }, timeout);
    };
}


function $433e0cd6cd1f24ec$export$ce69bd05624d0c48() {
    return `

        
            <input class="form-check-input krselect" type="checkbox" value="" >
        
    
    `;
}


class $896299da9ed01fc7$export$96d1f7ac72ab9056 extends (0, $f8f777b7d537305b$export$6937c6a84099f1b6) {
    constructor(){
        super();
        this.htmlTemplate = (0, $433e0cd6cd1f24ec$export$ce69bd05624d0c48)() // HTML content as template
        ;
        this._schema = null;
        this._eventListenerSelectSet = false;
        this._eventListenerParentSet = false;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        this.classList.add("kr-state");
        super.initObject();
        this._base_type = "KrState";
        this.setEventListenerSelect();
        this.setEventListenerParent();
    }
    // -----------------------------------------------------
    //  Additional attributes 
    // -----------------------------------------------------
    get checkbox() {
        return this.querySelector(".krselect");
    }
    setEventListenerParent() {
        this._eventListenerParentSet = true;
        this._eventListenerParentSet = true;
        let element = this;
        if (!this.thingElement || this.thingElement == null) return;
        this.thingElement.addEventListener("kr-selected", (event)=>{
            element.checkbox.checked = true;
        });
        this.thingElement.addEventListener("kr-deselected", (event)=>{
            element.checkbox.checked = false;
        });
    }
    setEventListenerSelect() {
        this._eventListenerSelectSet = true;
        this._eventListenerSelectSet = true;
        let element = this;
        this.addEventListener("click", (event)=>{
            if (element.checkbox.checked == true) element.thingElement.select();
            else element.thingElement.deselect();
        });
    }
    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
    }
}
customElements.define("kr-select", $896299da9ed01fc7$export$96d1f7ac72ab9056);




function $0aee5846507dd741$export$ce69bd05624d0c48() {
    return `



        <div class="">

           
            {% if item['@type'] == "Action" %}

                <kr-action-status></kr-action-status> {{ item.name }} {{ item.agent.name }}



            {% elsif item['@type'] == "Person" %}

                <kr-image-sm></kr-image-sm> {{ item.name }} {{ item.givenName }} {{ item.familyName }} 

            {% else %}

                {{ item.text }}

            {% endif %}


        </div>



    `;
}


class $39f45085ee66ea88$export$b0d3c692106194fc extends (0, $f8f777b7d537305b$export$6937c6a84099f1b6) {
    constructor(){
        super();
        this.htmlTemplate = (0, $0aee5846507dd741$export$ce69bd05624d0c48)() // HTML content as template
        ;
        this._record = null;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        let newRecord = this?.thing?.record;
        if (newRecord == this._record) return;
        this.classList.add("kr-thing");
        super.initObject();
        this._base_type = "KrThing";
    }
    refreshElement() {
        let newRecord = this.thing.record;
        if (newRecord == this._record) return;
        this._record = newRecord;
        this.initObject();
    }
}
customElements.define("kr-thing", $39f45085ee66ea88$export$b0d3c692106194fc);




function $56a83992c4a8b3bf$export$ce69bd05624d0c48() {
    return `
        <!-- Title -->
        <div class="row border p-3">
            <div class="col">
                 <h1>List {{ name }} </h1>
            </div>
        
        </div>

        
        <div class="row border p-3">

            <!-- Selection -->
            {% if config.showSelect == true %}
                <div class="col col-1">
                    <kr-select>
                    </kr-select>
                </div>
            {% endif %}


            <!-- TBD -->
            {% if config.showPosition == true %}
                <div class="col col-1">
                            P
                </div>
            {% endif %}


            <!-- Items -->
            <div class="col">
            </div>



            <!-- Actions -->
            <div class="col col-1 text-end ">


                <kr-action-menu>
                </kr-action-menu>
               
            </div>

            
        </div>
        
        
        <div class="row border ">

            <div class="col m-0 p-0 krItemListElement">


                <kr-property data-record-type={{item['@type']}} data-record-id={{item['@id']}} data-property-id="itemListElement" data-value-template="kr-list-item">
                </kr-property>
               
            
                
            </div>

        </div>`;
}
function $56a83992c4a8b3bf$export$bcd59d8da39209fc() {
    return `
        <!-- Title -->
        <div class="row border p-3">
            <div class="col">
                 <h1>List {{ name }} </h1>
            </div>

        </div>


        <div class="row border p-3">

            <!-- Selection -->
            {% if config.showSelect == true %}
                <div class="col col-1">
                    <kr-select>
                    </kr-select>
                </div>
            {% endif %}


            <!-- TBD -->
            {% if config.showPosition == true %}
                <div class="col col-1">
                            P
                </div>
            {% endif %}


            <!-- Items -->
            <div class="col">
            </div>



            <!-- Actions -->
            <div class="col col-1 text-end ">


                <kr-action-menu>
                </kr-action-menu>

            </div>


        </div>


        <div class="row border ">

            <div class="col m-0 p-0 krItemListElement">


                <kr-property property-id="itemListElement">
                </kr-property>
                {% assign elements = item.itemListElement | sort: "position" %}
                {% for element in elements %}

                    <kr-list-item data-record-type="{{ element['@type'] }}" data-record-id="{{ element['@id'] }}">

                    </kr-list-item>

                {% endfor %}


            </div>

        </div>`;
}


class $0aaa9cc48db105f4$export$883e42d7df0f36f7 extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    /**
     *
     * Attributes:
     * - recordTemplate (): template for new listItem.item records
     * - elementTemplate (): template for new listItem.item element
     * 
     */ constructor(){
        super();
        // Set template and content for list
        this.htmlTemplate = (0, $56a83992c4a8b3bf$export$ce69bd05624d0c48)();
        // Set templates
        this._recordTemplate = null;
        this._defaultRecordTemplate = {
            "@type": "Thing",
            "name": "newElement"
        };
        this._elementTemplate = null;
        this._defaultElementTemplate = "kr-card";
        // Set options
        this._showSelect = null;
        this._defaultShowSelect = true;
        this._showPosition = null;
        this._defaultShowPosition = true;
        this._showActions = null;
        this._defaultShowActions = true;
        this.listItemTemplate = "kr-list-item";
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        this.classList.add("kr-things");
        this.config.showSelect = this.showSelect;
        this.config.showPosition = this.showPosition;
        this.config.elementTemplate = this.elementTemplate;
        this.config.potentialActions = this.potentialActions || this.defaultActions;
        await super.initObject();
        this.setEventListenerDrop();
    }
    // -----------------------------------------------------
    //  Additional attributes - Config
    // -----------------------------------------------------
    get recordTemplate() {
        // Retrieves record template for creation of new items
        if (this._recordTemplate && this._recordTemplate != null) return this._recordTemplate;
        if (!this._recordTemplate || this._recordTemplate == null) {
            let recordTemplate = this.getAttribute("data-record-template") || null;
            if (recordTemplate && recordTemplate != null) this._recordTemplate = JSON.parse(recordTemplate);
        }
        if (!this._recordTemplate || this._recordTemplate == null) return this._defaultRecordTemplate;
        return this._recordTemplate;
    }
    set recordTemplate(value) {
        this._recordTemplate = value;
        this.setAttribute("data-record-template", value);
    }
    get elementTemplate() {
        // Retrieves element template for creation of new items
        if (this._elementTemplate && this._elementTemplate != null) return this._elementTemplate;
        if (!this._elementTemplate || this._elementTemplate == null) this._elementTemplate = this.getAttribute("data-element-template") || null;
        if (!this._elementTemplate || this._elementTemplate == null) return this._defaultElementTemplate;
        return this._elementTemplate;
    }
    set elementTemplate(value) {
        this._elementTemplate = value;
        this.setAttribute("data-element-template", value);
    }
    get showSelect() {
        // Retrieves if select should be shown
        if (this._showSelect && this._showSelect != null) return this._showSelect;
        if (!this._showSelect || this._showSelect == null) this._showSelect = this.getAttribute("data-show-select") || null;
        if (!this._showSelect || this._showSelect == null) return this._defaultShowSelect;
        return this._showSelect;
    }
    set showSelect(value) {
        this._showSelect = value;
        this.setAttribute("data-show-select", value);
    }
    get showPosition() {
        // Retrieves if position should be shown
        if (this._showPosition && this._showPosition != null) return this._showPosition;
        if (!this._showPosition || this._showPosition == null) this._showPosition = this.getAttribute("data-show-position") || null;
        if (!this._showPosition || this._showPosition == null) return this._defaultShowPosition;
        return this._showPosition;
    }
    set showPosition(value) {
        this._showPosition = value;
        this.setAttribute("data-show-position", value);
    }
    get showActions() {
        // Retrieves if position should be shown
        if (this._showActions && this._showActions != null) return this._showActions;
        if (!this._showActions || this._showActions == null) this._showActions = this.getAttribute("data-show-actions") || null;
        if (!this._showActions || this._showActions == null) return this._defaultShowActions;
        return this._showActions;
    }
    set showActions(value) {
        this._showActions = value;
        this.setAttribute("data-show-actions", value);
    }
    // -----------------------------------------------------
    //  Element navigation 
    // -----------------------------------------------------
    get krItemListElement() {
        return this.querySelector(".krItemListElement");
    }
    // -----------------------------------------------------
    //  Select section 
    // -----------------------------------------------------
    select() {
        super.select();
        for (let e of this.krItemListElement.children)e.select();
    }
    deselect() {
        super.deselect();
        for (let e of this.krItemListElement.children)e.deselect();
    }
    getSelecteditems() {
        let items = [];
        for (let e of this.krItemListElement.children)if (e.isSelected == true) items.push(e);
        return items;
    }
    // -----------------------------------------------------
    //  Drag drop 
    // -----------------------------------------------------
    setEventListenerDrop() {
        this.addEventListener("dragover", (event)=>{
            event.preventDefault();
        });
        this.addEventListener("drop", (event)=>{
            let elementID = event.dataTransfer.getData("text/plain");
            let element = document.getElementById(elementID);
            if (element && element.tagName == "KR-LIST-ITEM" && element.things.record_id != this.record_id) {
                let itemDrop = event.target.closest("KR-LIST-ITEM");
                // Add record
                this.record.itemListElement.push(element.record);
                // Create new element
                let newElement = this.upsertItemElement(element.record);
                // Insert before other item if dropped on one
                if (itemDrop) itemDrop.before(newElement);
            }
        });
    }
    // -----------------------------------------------------
    //  CRUD - Elements
    // -----------------------------------------------------
    createItemElement(record) {
        record = this.recordToListItem(record);
        let newItem = document.createElement(this.listItemTemplate);
        newItem.thing = record;
        this.setItemEventListeners(newItem);
        this.krItemListElement.appendChild(newItem);
        return newItem;
    }
    async insertAfterItemElement(referenceElement, record) {
        /**Insert a new item in itemListElement. Returns new item  
        * 
        */ let item = this.thing.insertAfter(referenceElement.thing, record);
        //this.stateElement.setThing(item)
        //this.getChildPropertyElement('itemListElement')?.refreshElement()
        return await this.getItemElementWait(item.record_type, item.record_id);
    }
    async getItemElementWait(record_type, record_id) {
        return new Promise((resolve)=>{
            const intervalId = setInterval(()=>{
                let result = this.getItemElement(record_type, record_id);
                if (result && result != null) {
                    clearInterval(intervalId);
                    resolve(result);
                }
            }, 100);
        });
    }
    getItemRecord(record_id) {
        for(let r in this.record.itemListElement){
            if (r?.["@id"] == record_id) return r;
        }
        return null;
    }
    getItemElementByPosition(position) {
        for (let i of this.krItemListElement?.children || []){
            let p = i.thing.getProperty("position")?.value;
            if (p == position) return i;
        }
        return null;
    }
    getItemElement(record_type, record_id) {
        let propertyElement = this.getChildPropertyElement("itemListElement");
        for (let i of propertyElement?.children || []){
            let g = i.querySelector(".kr-list-item");
            if (g && g != null) {
                if (g.record_type == record_type && g.record_id == record_id) return g;
            }
        }
        return null;
    }
    updateItemElement(record) {
        let itemElement = this.getItemElement(record["@type"], record["@id"]);
        itemElement.record = record;
        return itemElement;
    }
    upsertItemElement(record) {
        let itemElement = this.getItemElement(record["@type"], record["@id"]);
        if (itemElement && itemElement != null) return this.updateItemElement(record);
        else return this.createItemElement(record);
    }
    deleteItemRecord(record_ID) {
        this.record.itemListElement = this.record.itemListElement.filter((item)=>item?.["@id"] != record_ID);
    }
    deleteItemElement(record) {
        let itemElement = this.getItemElement(record["@type"], record["@id"]);
        itemElement.remove();
    }
    recordToListItem(record) {
        if (record?.["@type"] == "ListItem") return record;
        let listItem = {
            "@type": "ListItem",
            "@id": String(crypto.randomUUID()),
            "item": record,
            "position": this.krItemListElement?.children.length || 0
        };
        return listItem;
    }
    setItemEventListeners(item) {
        item.addEventListener("kr-click", (event)=>{
            let detail = event.detail;
            const newEvent = new CustomEvent("kr-click", {
                detail: detail
            });
            this.dispatchEvent(newEvent);
        });
        item.addEventListener("kr-select", (event)=>{
            const newEvent = new CustomEvent("kr-select", {
                detail: event.detail
            });
            this.dispatchEvent(newEvent);
        });
    }
    // -----------------------------------------------------
    //  Default actions 
    // -----------------------------------------------------
    get defaultActions() {
        let records = [];
        records.push(this.defaultActionDelete);
        return records;
    }
    get defaultActionDelete() {
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
            "collection": {
                "@type": this.record_type,
                "@id": this.record_id
            }
        };
        return record;
    }
    get defaultActionCopy() {
        let record = {
            "@type": ""
        };
    }
    // -----------------------------------------------------
    //  Potential actions 
    // -----------------------------------------------------
    executeAddAction() {
        this.record?.listItemElement;
        this.record.listItemElement = [];
        let element = this.createItemElement(this.listItemRecordTemplate);
        this.record.listItemElement.push(element);
    }
    executeDeleteAction() {
        for (let i of this.getSelecteditems())this.deleteItemElement(i.record);
        this.isSelected = false;
    }
    findAction(actionID) {
        for (let i of this.potentialActions){
            if (i?.["@id"] == actionID) return i;
        }
        return null;
    }
    // -----------------------------------------------------
    //  Attributes 
    // -----------------------------------------------------
    get records() {
        return this.itemListElement;
    }
    set records(value) {
        this._record = this.recordToList(value);
    }
    recordToList(record) {
        if (Array.isArray(record)) record = {
            "@type": "ItemList",
            "@id": String(crypto.randomUUID()),
            "name": "untitledlist",
            "itemListElement": record
        };
        return record;
    }
}
customElements.define("kr-things", $0aaa9cc48db105f4$export$883e42d7df0f36f7);
function $0aaa9cc48db105f4$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}



function $2ebb757f2998d061$export$ce69bd05624d0c48() {
    return `
    
    
    
    {% for v in item %}
       
        <kr-value data-record-type="{{ v['@type'] }}" data-record-id="{{ v['@id'] }}" data-position="{{ forloop.index0 }}">

        </kr-value>

    {% endfor %}
    
    
    `;
}


class $076366d6bcc385fe$export$877632ce842a560a extends (0, $f8f777b7d537305b$export$6937c6a84099f1b6) {
    /**
     * attribute:
     * data-value-template: the html tag ot use for value elements
     */ constructor(){
        super();
        this.htmlTemplate = null //template()            // HTML content as template
        ;
        this._values = null;
        this._valueElements = {};
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        this.classList.add("kr-property");
        //super.initObject()
        this._base_type = "KrProperty";
        this.refreshElement();
    }
    // -----------------------------------------------------
    //  Additional attribute 
    // -----------------------------------------------------
    get valueTemplate() {
        let valueTemplate = this.getAttribute("data-value-template");
        if (!valueTemplate || valueTemplate == null) valueTemplate = null;
        return valueTemplate;
    }
    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------
    refreshElement() {
        let propertyID = this.propertyID;
        let property = this.thing.getProperty(propertyID);
        let pvs = property.propertyValues;
        let newValues = property.values;
        if (this._values == newValues) return;
        this._values;
        let record_ids = pvs.map((item)=>item.record_id);
        // Sort items if itemListElement
        if (propertyID == "itemListElement") {
            function compareFn(a, b) {
                let positionA = a.value.getProperty("position")?.value || 0;
                let positionB = b.value.getProperty("position")?.value || 0;
                if (positionA == null) positionA = 0;
                if (positionB == null) positionB = 0;
                if (positionA < positionB) return -1;
                else if (positionA > positionB) return 1;
                // a must be equal to b
                return 0;
            }
            pvs.sort(compareFn);
        }
        // Remove elements no longer there
        for (let record_id of Object.keys(this._valueElements)){
            let v = this.retrieveValueElement(record_id);
            if (v && v != null && !record_ids.includes(record_id)) {
                v.remove();
                delete this._valueElements[record_id];
            }
        }
        // Add new elements
        let previousItemId = null;
        let previousItemElement = null;
        if (!pvs || pvs == null || pvs.length == 0) return;
        for (let p of pvs){
            let position;
            let name;
            let pType = p.record_type;
            let pId = p.record_id;
            let element = this.retrieveValueElement(pId);
            if (!element || element == null) element = this.newValueElement(pType, pId);
            if (previousItemElement && previousItemElement != null) //previousItemElement.after(element)
            {
                if (previousItemElement.nextElementSibling?.id != element?.id) previousItemElement.after(element);
            } else //this.prepend(element)
            if (this.firstElementChild?.id != element?.id) this.prepend(element);
            previousItemId = pId;
            previousItemElement = element;
        }
    }
    retrieveValueElement(record_id) {
        if (!record_id || record_id == null) return null;
        return this._valueElements[record_id];
    }
    newValueElement(record_type, record_id) {
        let element = document.createElement("kr-value");
        element.record_type = record_type;
        element.record_id = record_id;
        this._valueElements[record_id] = element;
        return element;
    }
}
customElements.define("kr-property", $076366d6bcc385fe$export$877632ce842a560a);



function $a862a6e19e3a1cb3$export$ce69bd05624d0c48() {
    return ` 


        
    <span>
    {% if item.object.value['@type'] %}

        {% if config.valueTemplate %}
    
            <div class="">
            <{{ config.valueTemplate }} data-record-type="{{ item.object.value['@type'] }}" data-record-id="{{ item.object.value['@id'] }}"> </{{ config.valueTemplate }}>
            </div>

        {% else %}
            <div class="">
           
                <kr-thing data-record-type="{{ item.object.value['@type']}}" data-record-id="{{ item.object.value['@id']}}">

                </kr-thing>

         </div>


        {% endif %}

    {% else %}

        {{ item.object.value }}

    {% endif %}
   
    
 `;
}


class $6260eb9c6959f3a9$export$e08f919799ed3a88 extends (0, $f8f777b7d537305b$export$6937c6a84099f1b6) {
    constructor(){
        super();
        this.htmlTemplate = (0, $a862a6e19e3a1cb3$export$ce69bd05624d0c48)(); // HTML content as template
        this._schema = null;
        this._value = null;
    }
    // -----------------------------------------------------
    //  Init
    // -----------------------------------------------------
    async initObject() {
        this.classList.add("kr-value");
        this.config.valueTemplate = this.propertyElement?.valueTemplate || null;
        super.initObject();
        this.propertyID;
        this._base_type = "KrValue";
        //this.startObserver();
        this._value = null;
    }
    refreshElement() {
        let newValue = this.value;
        if (this._value == newValue) return;
        this._value = newValue;
        let childThings = this.getChildThingElements();
        if (!childThings || childThings == null) this.initObject();
        let childThing = childThings[0];
        if (childThing && childThing.record_type == newValue?.record_type && childThing.record_id == newValue?.record_id) return;
        this.initObject();
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
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type == "characterData") element.processContentChange();
            });
        });
        // configuration of the observer:
        var config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        // pass in the target node, as well as the observer options
        observer.observe(this, config);
    }
    processContentChange() {
        console.log(this.dataElement.textContent);
        if (!this.propertyID) return;
        let oldValue = this._value;
        let newValue = this.dataElement.textContent;
        this._value = newValue;
        this.thing.replaceProperty(this.propertyID, oldValue, newValue);
    }
}
customElements.define("kr-value", $6260eb9c6959f3a9$export$e08f919799ed3a88);


function $a5b8a13656af2810$export$ce69bd05624d0c48() {
    return `
    <div class="row border ps-3 pe-3 pt-0 pb-0 hover m-0">


        {% if config.showSelect == true %}
            <div class="col col-1 mt-3">
                <kr-select>
                  
                </kr-select>
             </div>
         {% endif %}

        
        {% if config.showPosition == true %}
            <div class="col col-1 mt-3">
                <kr-property data-record-type="{{ item['@type'] }}" data-record-id="{{ item['@id'] }}" data-property-id="position">
                    
                </kr-property>
                
            </div>
        {% endif %}
        
        <div class="col  pt-0 pb-0">
            <kr-property data-record-type="{{ item['@type'] }}" data-record-id="{{ item['@id'] }}" data-property-id="item" data-value-template="{{ config.elementTemplate }}">
    
            </kr-property>
            
            
        </div>

        {% if config.showActions == true %}
            <div class="col col-1 p-1 text-end">
                <kr-potential-actions style="visibility: hidden"> 
    
                    <kr-action-menu>
                   
                    </kr-action-menu>
                
                </kr-potential-actions>
            </div>
        {% endif %}

    </div>`;
}




const $db950ef1f1a2dc28$var$engine = new $5OpyM$Liquid();
class $db950ef1f1a2dc28$export$cc7bc883e2674a15 extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        // Override template
        this.htmlTemplate = (0, $a5b8a13656af2810$export$ce69bd05624d0c48)();
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        //
        this.classList.add("kr-list-item");
        if (this.things && this.things != null) {
            this.config.elementTemplate = this.things.elementTemplate;
            this.config.showSelect = this.things.showSelect;
            this.config.showPosition = this.things.showPosition;
            this.config.showActions = this.things.showActions;
            this.config.potentialAction = this.potentialActions || this.defaultActions;
            this.isInitialized = true;
        }
        await super.initObject();
        this.setEventListenerPotentialActions();
        //this.setEventListenerSelect()
        //this.setEventListenerClick()
        this.setEventListenerReorder();
    }
    refreshElement() {
        super.refreshElement();
    }
    eventManager(event) {
        if (event.data.propertyID == "previousItem") return;
        if (event.data.propertyID == "nextItem") return;
        super.eventManager(event);
    }
    resetPosition() {
        return;
    }
    // -----------------------------------------------------
    //  Element navigation 
    // -----------------------------------------------------
    get krItemElement() {
        return this.querySelector(".krItemElement");
    }
    get KrPotentialActions() {
        return this.querySelector("kr-potential-actions");
    }
    // -----------------------------------------------------
    //  Click section 
    // -----------------------------------------------------
    setEventListenerClick() {
        let m = this;
        this.addEventListener("click", (event)=>{
            this.isClicked();
        });
    }
    // -----------------------------------------------------
    //  Potential actions section 
    // -----------------------------------------------------
    setEventListenerPotentialActions() {
        let m = this;
        this.addEventListener("mouseenter", (event)=>{
            m.KrPotentialActions.style.visibility = "visible";
            m.firstElementChild.classList.add("bg-body-tertiary");
            m.addEventListener("mouseleave", (event)=>{
                m.KrPotentialActions.style.visibility = "hidden";
                if (this.isSelected == false) m.firstElementChild.classList.remove("bg-body-tertiary");
            });
        });
    }
    // -----------------------------------------------------
    //  Attributes 
    // -----------------------------------------------------
    recordToListItem(record) {
        if (record["@type"] == "ListItem") return record;
        let listItem = {
            "@type": "ListItem",
            "@id": String(crypto.randomUUID()),
            "item": record
        };
        return listItem;
    }
    get position() {
        let position = this.thing.position;
        if (position == null) position = 0;
        return position;
    }
    set position(value) {
        if (value == null) value = 0;
        this.thing.position = value;
    }
    get firstItem() {
        let item = this;
        while(item.previousItem)item = item.previousItem;
        return item;
    }
    get previousItem() {
        let value = this.thing.getProperty("previousItem")?.value;
        if (!value || value == null) return null;
        let itemElement = this.things.getItemElement(value.record_type, value.record_id);
        return itemElement;
    }
    get nextItem() {
        let value = this.thing.getProperty("nextItem")?.value;
        if (!value || value == null) return null;
        let itemElement = this.things.getItemElement(value.record_type, value.record_id);
        return itemElement;
    }
    get things() {
        return this.closest(".kr-things");
    }
    // -----------------------------------------------------
    //  Default actions 
    // -----------------------------------------------------
    get defaultActions() {
        let records = [];
        records.push(this.defaultActionDelete);
        return records;
    }
    get defaultActionDelete() {
        let record = {
            "@type": "DeleteAction",
            "name": "DeleteStuff",
            "actionStatus": "potentialActionStatus",
            "object": {
                "@type": this.record_type,
                "@id": this.record_id
            },
            "collection": {
                "@type": this.things.record_type,
                "@id": this.things.record_id
            }
        };
        return record;
    }
    get defaultActionCopy() {
        let record = {
            "@type": ""
        };
    }
    // -----------------------------------------------------
    //  Drag reorder 
    // -----------------------------------------------------
    setEventListenerReorder() {
        this.draggable = "true";
        this.addEventListener("dragstart", (event)=>{
            event.dataTransfer.setData("text/plain", event.currentTarget.id);
            event.currentTarget.classList.add("dragging");
        });
        this.addEventListener("dragend", (event)=>{
            event.currentTarget.classList.remove("dragging");
        });
        this.addEventListener("dragenter", (event)=>{});
        this.addEventListener("dragleave", (event)=>{});
        this.addEventListener("dragover", (event)=>{
            event.preventDefault();
        });
        this.addEventListener("drop", (event)=>{
            event.preventDefault();
            let elementID = event.dataTransfer.getData("text/plain");
            let element = document.getElementById(elementID);
            // If not same list
            if (element.things.record_id != event.currentTarget.things.record_id) return;
            //             
            event.currentTarget.before(element);
            // Reset positions
            this.firstItem.resetPosition();
            // Broadcast event
            const newEvent = new CustomEvent("kr-reorder", {
                detail: this.record
            });
            this.dispatchEvent(newEvent);
        });
    }
    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------
    isClicked() {
        const event = new CustomEvent("kr-click", {
            detail: this.record
        });
        this.dispatchEvent(event);
    }
}
customElements.define("kr-list-item", $db950ef1f1a2dc28$export$cc7bc883e2674a15);



function $61d6eb329d8c9f44$export$ce69bd05624d0c48() {
    return `


        <span>
            <span>
                
                    <img src="{{ item.image.contentUrl }}" width="32px" height="32px" class="" alt="..." onerror='this.style.display="none"'> 
    
    
            </span>
    
            <span>
    
    
                {{ item.name }}
    
            </span>
        </span>
    `;
}


class $903112dd48b35547$export$3702ed23437adb2c extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        this.htmlTemplate = (0, $61d6eb329d8c9f44$export$ce69bd05624d0c48)();
        this.initialized = false;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    initObject() {
        if (this.thingElement) {
            let record = this.thingElement.getAction(this.record_type, this.record_id);
            this.thing = this.thingElement.getAction(this.record_type, this.record_id);
        }
        super.initObject();
        this.initEventListeners();
    }
    getIcon(actionName) {
        switch(actionName){
            case "addAction":
                return "./icons/plus.svg";
            case "addPropertyValueAction":
                return "./icons/plus.svg";
            case "deletePropertyValueAction":
                return "./icons/delete.svg";
            default:
                return "./icons/test.svg";
        }
    }
    initEventListeners() {
        if (this.initialized == false) {
            this.addEventListener("click", (event)=>{
                this.actionExecute();
            });
            this.initialized = true;
        }
    }
    // -----------------------------------------------------
    //  Process action 
    // -----------------------------------------------------
    actionExecute() {
        if (this.record_type == "addAction") this.executeAddAction();
        else {
            let actionName = this.getAttribute("data-action-name");
            let property = this.closest(".kr-property");
            switch(actionName){
                case "addAction":
                    this.thing.addAction();
                case "addPropertyValueAction":
                    property.addPropertyValueAction();
            }
        }
    }
    executeAddAction() {
        let o = this.thing.getProperty("object").value;
        let collection = this.thing.getProperty("targetCollection").value;
        let collectionObject = this.krState.getThing(collection.record_type, collection.record_id);
        collectionObject.addProperty("itemListElement", o);
    }
    executeDeleteAction() {}
    // -----------------------------------------------------
    //  Events 
    // -----------------------------------------------------
    connectedCallback() {
        super.connectedCallback();
    }
}
customElements.define("kr-action", $903112dd48b35547$export$3702ed23437adb2c);



function $33e47cc60779cfdb$export$ce69bd05624d0c48() {
    return `
    
    <div class="btn-group p-0 m-0">

      <a href="#" role="button"  class="btn  p-0" data-bs-toggle="dropdown" aria-expanded="false">
     
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
        </svg>
      </a>

     
      <ul class="dropdown-menu">

        
        {% for action in config.potentialActions %}
        <li class="dropdown-item">
       
          <kr-action data-record-type="{{ action['@type'] }}" data-record-id="{{ action['@id'] }}">
          </kr-action>
        
        </li>

        {% endfor %}

        
      </ul>
</div>`;
}


class $99a74800607e7f7b$export$d7e59d17540b14b extends (0, $076366d6bcc385fe$export$877632ce842a560a) {
    constructor(){
        super();
        this.htmlTemplate = (0, $33e47cc60779cfdb$export$ce69bd05624d0c48)();
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    initObject() {
        this.propertyID = "potentialAction";
        this.config.potentialActions = this?.thingElement?.potentialActions;
        super.initObject();
    }
    // -----------------------------------------------------
    //  Events 
    // -----------------------------------------------------
    connectedCallback() {
        super.connectedCallback();
    }
}
customElements.define("kr-action-menu", $99a74800607e7f7b$export$d7e59d17540b14b);



class $d0e6389b231f00ae$export$61f029a88b5e2c25 extends (0, $076366d6bcc385fe$export$877632ce842a560a) {
    constructor(){
        super();
        // Override template
        this.propertyID = "actionStatus";
        this.setEventListenerClick();
        this._value = null;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    initObject() {
        //super.initObject()
        this.refreshElement();
    }
    refreshElement() {
        let newValue = this.thing.getProperty("actionStatus").value;
        if (newValue != this._value) {
            this._value = newValue;
            if (this._value == "potentialActionStatus") this.contentElement.innerHTML = this.potentialActionStatusIcon();
            else if (this._value == "completedActionStatus") this.contentElement.innerHTML = this.completedActionStatusIcon();
            else if (this._value == "activeActionStatus") this.contentElement.innerHTML = this.activeActionStatusIcon();
            else if (this._value == "failedActionStatus") this.contentElement.innerHTML = this.failedActionStatusIcon();
            else this.contentElement.innerHTML = this.potentialActionStatusIcon();
        }
    }
    // -----------------------------------------------------
    //  Set listener 
    // -----------------------------------------------------
    setEventListenerClick() {
        this.addEventListener("click", (event)=>{
            this.isClicked();
        });
    }
    // -----------------------------------------------------
    //  Additional attributes 
    // -----------------------------------------------------
    get contentElement() {
        return this;
    }
    // -----------------------------------------------------
    //  Status 
    // -----------------------------------------------------
    assignNextStatus() {
        if (this._value == "potentialActionStatus") this.setCompletedActionStatus();
        else if (this._value == "completedActionStatus") this.setActiveActionStatus();
        else if (this._value == "activeActionStatus") this.setFailedActionStatus();
        else if (this._value == "failedActionStatus") this.setPotentialActionStatus();
        else this.setPotentialActionStatus();
    }
    setPotentialActionStatus() {
        this._value = "potentialActionStatus";
        this.thing.replaceProperty("actionStatus", "potentialActionStatus");
        this.contentElement.innerHTML = this.potentialActionStatusIcon();
    }
    setActiveActionStatus() {
        this._value = "activeActionStatus";
        this.thing.replaceProperty("actionStatus", "activeActionStatus");
        this.contentElement.innerHTML = this.activeActionStatusIcon();
    }
    setCompletedActionStatus() {
        this._value = "completedActionStatus";
        this.thing.replaceProperty("actionStatus", "completedActionStatus");
        this.contentElement.innerHTML = this.completedActionStatusIcon();
    }
    setFailedActionStatus() {
        this._value = "failedActionStatus";
        this.thing.replaceProperty("actionStatus", "failedActionStatus");
        this.contentElement.innerHTML = this.failedActionStatusIcon();
    }
    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------
    isClicked() {
        console.log("click");
        this.assignNextStatus();
        const event = new CustomEvent("kr-click", {
            detail: this._value
        });
        this.dispatchEvent(event);
    }
    connectedCallback() {
        //console.log("Custom element added to page.");
        super.connectedCallback();
        if (!this._value || this._value == null) this.setPotentialActionStatus();
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
    completedActionStatusIcon() {
        // checked square 
        return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
            </svg>`;
    }
    potentialActionStatusIcon() {
        // squre
        return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
</svg>`;
    }
    activeActionStatusIcon() {
        //dash square
        return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg>`;
    }
    failedActionStatusIcon() {
        //dash square
        return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>`;
    }
}
customElements.define("kr-action-status", $d0e6389b231f00ae$export$61f029a88b5e2c25);



function $1d9ccfc9ae737f9a$export$9852986a3ec5f6a0() {
    return `
       
        <table class="table table-hover">
            <thead class="table-dark">
                <tr>

                    <th scope="col"><div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
                                  
                                    </div></th>
        
                    {% for key in config.headers %}     
                        <th scope="col">
                            {{ key }}
                        </th>
                    {% endfor %}

                    <th scope="col"></th>
                </tr>
            </thead>

          
            <tbody>
        
                
                {% for r in item.itemListElement %}

                    
                    <tr>

                        
                       
                        <td>
                        
                            <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
                                  
                                    </div>
                        </td>
    
    
    
                        {% for k in config.keys %}   
                                <td>
                               
                                    <kr-table-property data-record-type="{{ r['@type'] }}" data-record-id="{{ r['@id'] }}" data-property-id="{{ k }}">
                
                               
                                      
                                   <kr-table-property>
                                </td>
                        {% endfor %}

                        <td class="text-end">
                            <kr-action-menu data-record-type="{{ r['@type'] }}" data-record-id="{{ r['@id'] }}" >
                            </kr-action-menu>
                        </td>
                             
                    </tr>
                    
                {% endfor %}
               
            </tbody>
        </table>
        
        `;
}


class $c9792c3d0c357cf1$export$709c89605c2a432 extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        // Override template
        this.htmlTemplate = (0, $1d9ccfc9ae737f9a$export$9852986a3ec5f6a0)();
        this._keys = null;
        this._headers = null;
        //
        this._isSelected = false;
    }
    // -----------------------------------------------------
    //  Init
    // -----------------------------------------------------
    async initObject() {
        //
        if (!this.thing) {
            console.log("no thing");
            return;
        }
        this.config.keys = this.keys;
        this.config.headers = this.headers;
        await super.initObject();
    }
    get keys() {
        if (this._keys && this._keys != null && this._keys != []) return this._keys;
        if (!this._keys || this._keys == null || this._keys == []) this._keys = this.getAttribute("data-keys");
        if (!this._keys || this._keys == null || this._keys == []) this._keys = this.getKeysFromRecord();
        return this._keys || [];
    }
    set keys(value) {
        this._keys = value;
        this.setAttribute("data-keys", value);
    }
    getKeysFromRecord() {
        let items = this.thing.getProperty("itemListElement").values;
        let keys = [];
        for (let item of items){
            for (let k of Object.keys(item.record))if (!keys.includes(k)) keys.push(k);
        }
        return keys;
    }
    get headers() {
        if (this._headers && this._headers != null && this._headers != []) return this._headers;
        if (!this._headers || this._headers == null || this._headers == []) this._headers = this.getAttribute("data-headers");
        if (!this._headers || this._headers == null || this._headers == []) this._headers = this.keys;
        return this._headers || [];
    }
    set headers(value) {
        this._headers = value;
        this.setAttribute("data-headers", value);
    }
    // -----------------------------------------------------
    //  Custom Element Events
    // -----------------------------------------------------
    isClicked() {
        const event = new CustomEvent("kr-click", {
            detail: this.record
        });
        this.dispatchEvent(event);
    }
}
customElements.define("kr-table", $c9792c3d0c357cf1$export$709c89605c2a432);



function $225f1fad7b29d4b7$export$b12d1d6acae2d5f2() {
    return `

    <kr-table-value data-position="0">

      </kr-table-value>
    
    `;
}


class $b68fa0c9a9141cd6$export$a55e4f66833eec3f extends (0, $076366d6bcc385fe$export$877632ce842a560a) {
    constructor(){
        super();
        this.htmlTemplate = (0, $225f1fad7b29d4b7$export$b12d1d6acae2d5f2)();
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    initObject() {
        super.initObject();
    }
}
customElements.define("kr-table-property", $b68fa0c9a9141cd6$export$a55e4f66833eec3f);



function $a9bac7a2da7ad5fa$export$4dc001434a26a063() {
    return `

              

                {% if item['@type']  %}

                       

                        <kr-avatar data-record-type={{ item['@type'] }} data-record-id={{ item['@id'] }}> 

                        </kr-avatar>


                {% elsif item[0]['@type']  %}

                              

                        <kr-avatar data-record-type={{ item[0]['@type'] }} data-record-id={{ item[0]['@id'] }}> 
                        </kr-avatar>


                {% else %}



                        {{ item }}


                {% endif %}





    `;
}


class $9552932126a19786$export$827bcfa69b7b9ad8 extends (0, $6260eb9c6959f3a9$export$e08f919799ed3a88) {
    constructor(){
        super();
        // Override template
        this.htmlTemplate = (0, $a9bac7a2da7ad5fa$export$4dc001434a26a063)();
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        //
        await super.initObject();
    }
}
customElements.define("kr-table-value", $9552932126a19786$export$827bcfa69b7b9ad8);



function $436a32aebfa41a4d$export$ce69bd05624d0c48() {
    return `
        <div class="d-flex justify-content-start align-items-center">
            <div class="">

                {% if item.contentUrl %}
                    <div class=" me-2 rounded-2 bg-label-secondary"><img height="38px" width="38px"
                            src="{{ item.contentUrl}}" alt="{{ item.name }}" class="rounded-2"></div>
                    
                {% endif %}

                {% if item.image %}
                        <div class=" me-2 rounded-2 bg-label-secondary"><img height="38px" width="38px"
                                src="{{ item.image.contentUrl }}" alt="{{ item.image.name }}" class="rounded-2"></div>
                        

                {% endif %}
            </div>
            
            <div class="d-flex flex-column">
                <p class="text-body text-nowrap mb-0">{{ item.name }}</p>
                <small class="text-muted text-truncate d-none d-sm-block"> {{ item.description }}</small>
            </div>
        </div>

`;
}


class $2f2108af387115a9$export$e3ffc3224576be06 extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        // Override template
        this.htmlTemplate = (0, $436a32aebfa41a4d$export$ce69bd05624d0c48)();
        // 
        this._isSelected = false;
    //this.setEventListenerDrag()
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        //
        await super.initObject();
    }
    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------
    setEventListenerDrag() {
        this.draggable = true;
        this.addEventListener("dragstart", (event)=>{
            event.preventDefault();
            event.dataTransfer.setData("text", JSON.stringify(this.record, null, 4));
        });
    }
}
customElements.define("kr-avatar", $2f2108af387115a9$export$e3ffc3224576be06);



function $2fac505d24d450a8$export$ce69bd05624d0c48() {
    return `

        
        {% if config.size == "xs" %}
            {% assign style="max-height:38px; max-width:38px; height:auto; width:auto;" %}
            {% assign class="" %}
        {% elsif config.size == "sm" %}
            {% assign style="max-height:100px; max-width:100px; height:auto; width:auto;" %}
            {% assign class="" %}
        {% elsif config.size == "md" %}
            {% assign style="max-height:400px; max-width:400px; height:auto; width:auto;" %}
            {% assign class="" %}
        {% elsif config.size == "lg" %}
            {% assign style="max-height:1200px; max-width:800px; height:auto; width:auto;" %}
            {% assign class="" %}
        {% else %}
            {% assign style="" %}
            {% assign class="img-fluid" %}
        {% endif %}


        {% if item.contentUrl %}

            {% assign isImage = true %}
            {% assign url = item.contentUrl %}
            {% assign name = item.name %}
    
        {% elsif item.image %}
            {% assign isImage = true %}
            {% assign url = item.image.contentUrl %}
            {% assign name = item.image.name %}

        {% else %}
            {% assign isImage = false %}
            {% assign url = "" %}
            {% assign name = "" %}

        {% endif %}


        {% if item.contentUrl contains "<svg" %}
            {% assign isSvg = true %}
            {% assign svgValue = item.contentUrl %}
        {% elsif item.image contains "<svg" %}
            {% assign isSvg = true %}
            {% assign svgValue = item.image %}
        {% elsif item.image.contentUrl contains "<svg" %}
            {% assign isSvg = true %}
            {% assign svgValue = item.image.contentUrl %}
        {% endif %}
    


        {% if isSvg == true %}

            <div class="{{ class }}" style="{{ style }}">
                {{ svgValue }}
            </div>

        
        
        {% elsif isImage == true %}
    
            <div class=" me-2 bg-label-secondary">
                
                <img 
                    class="{{ class }}" 
                    style="{{ style }}"
                    src="{{ url }}" 
                    alt="{{ name }}"  
                    onerror='this.style.display = "none"'
                    >
            
            </div>

        {% endif %}

    `;
}


class $56c57cbb5755b4a7$export$7a9e7b07acd55f8a extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        this.htmlTemplate = (0, $2fac505d24d450a8$export$ce69bd05624d0c48)();
    }
    async initObject() {
        await super.initObject();
    }
}
customElements.define("kr-image", $56c57cbb5755b4a7$export$7a9e7b07acd55f8a);
class $56c57cbb5755b4a7$export$b1785d3b1349d6c6 extends $56c57cbb5755b4a7$export$7a9e7b07acd55f8a {
    constructor(){
        super();
    }
    async initObject() {
        this.config.size = "xs";
        await super.initObject();
    }
}
customElements.define("kr-image-avatar", $56c57cbb5755b4a7$export$b1785d3b1349d6c6);
class $56c57cbb5755b4a7$export$c76d8adf7e09a74d extends $56c57cbb5755b4a7$export$7a9e7b07acd55f8a {
    constructor(){
        super();
    }
    async initObject() {
        this.config.size = "sm";
        await super.initObject();
    }
}
customElements.define("kr-image-sm", $56c57cbb5755b4a7$export$c76d8adf7e09a74d);
class $56c57cbb5755b4a7$export$1c543d8ae4367950 extends $56c57cbb5755b4a7$export$7a9e7b07acd55f8a {
    constructor(){
        super();
    }
    async initObject() {
        this.config.size = "md";
        await super.initObject();
    }
}
customElements.define("kr-image-md", $56c57cbb5755b4a7$export$1c543d8ae4367950);
class $56c57cbb5755b4a7$export$584c9b86c5b95275 extends $56c57cbb5755b4a7$export$7a9e7b07acd55f8a {
    constructor(){
        super();
    }
    async initObject() {
        this.config.size = "lg";
        await super.initObject();
    }
}
customElements.define("kr-image-lg", $56c57cbb5755b4a7$export$584c9b86c5b95275);
class $56c57cbb5755b4a7$export$d493f24286260912 extends $56c57cbb5755b4a7$export$7a9e7b07acd55f8a {
    constructor(){
        super();
    }
    async initObject() {
        this.config.size = "xs";
        await super.initObject();
    }
}
customElements.define("kr-image-xs", $56c57cbb5755b4a7$export$d493f24286260912);




function $f3a5e33294b01a2a$export$a747b4cf4e3fc483() {
    return `
    <div class="container-md">
        <form>



            <kr-form-input data-property-id="@type">
                </kr-form-input>

            <kr-form-input data-property-id="@id">
                </kr-form-input>


            {% for p in config.properties %}

                <kr-form-input data-property-id="{{p}}">
                </kr-form-input>
              


            {% endfor %}
              
              
              
        </form>
        </div>
`;
}


class $abadb7053c2542a7$export$1224b350cb6b2979 extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        // Override template
        this.htmlTemplate = (0, $f3a5e33294b01a2a$export$a747b4cf4e3fc483)();
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        //
        if (!this.record_type || this.record_type === null || typeof this.record_type == "undefined") return;
        if (!this.thing) this.record = {
            "@type": this.record_type,
            "@id": String(crypto.randomUUID())
        };
        this.config.recordTypes = this.thing.schema?.expectedTypes;
        this.config.properties = [];
        console.log("a", this.thing, this.thing.schema);
        for (let p of this?.thing?.schema?.propertiesLight || [])this.config.properties.push(p?.record_id);
        await super.initObject();
    }
    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------
    setEventListenerDrag() {
        this.draggable = true;
        this.addEventListener("dragstart", (event)=>{
            event.preventDefault();
            event.dataTransfer.setData("text", JSON.stringify(this.record, null, 4));
        });
    }
    connectedCallback() {
        super.connectedCallback();
    //this.initObject()
    }
}
customElements.define("kr-form-sm", $abadb7053c2542a7$export$1224b350cb6b2979);




function $97fb743c1a9042c8$export$326bce2259f858eb() {
    return `

        <div class="mb-3">



            <div class="row">
                
               
                <div class="col-6  col-md-2">
                        <label for="{{ config.propertyID }}" class="form-label text-capitalize">{{ config.propertyID }}</label>
                </div>
                
                
                <div class="col-12  order-4 col-md-9 order-md-2">
                        {% if item.first %}
                            {% for r in item %}

                                <div class="row">
                                    <div class="col col-12 col-md-1"> 
                                        <h6>{{forloop.index0}}</h6>
                                    </div>
                                    <div class="col col-12 col-md-11">
                                            
                                        <kr-form-input-value data-property-id="{{ config.propertyID }}"  data-position="{{forloop.index0}}"> </kr-form-input-value>
                                           
                                    </div>
                                </div>
                            {% endfor %}
                
                        {% else %}
                
                            <kr-form-input-value data-property-id="{{ config.propertyID }}"  data-position="0"> </kr-form-input-value>
                
                        {% endif %}
                
                </div>
                
                
 


                
                <div class="col order-3 justify-content-end text-end">
                        <span class="kr-add justify-content-end">


                            <kr-action data-action-name="addPropertyValueAction">

                            </kr-action>
                        
                            
                        </span>
                </div>
            </div>
        </div>
                

    `;
}


let $edeae80b39d6ccb0$var$DEFAULTLOCALE = "en-US";
class $edeae80b39d6ccb0$export$f9d1eda03b3fdf10 extends (0, $076366d6bcc385fe$export$877632ce842a560a) {
    constructor(){
        super();
        // Override template
        this.htmlTemplate = (0, $97fb743c1a9042c8$export$326bce2259f858eb)();
    // 
    //this._isSelected = false
    //this.setEventListenerDrag()
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        //
        await super.initObject();
    }
    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------
    setEventListenerDrag() {
        this.draggable = true;
        this.addEventListener("dragstart", (event)=>{
            event.preventDefault();
            event.dataTransfer.setData("text", JSON.stringify(this.record, null, 4));
        });
    }
}
customElements.define("kr-form-input", $edeae80b39d6ccb0$export$f9d1eda03b3fdf10);




let $cee1310907f631a2$var$DEFAULTLOCALE = "en-US";
class $cee1310907f631a2$export$9642a7479f6f8aa7 extends (0, $6260eb9c6959f3a9$export$e08f919799ed3a88) {
    constructor(){
        super();
    // Override template
    //this.htmlTemplate = avatar()
    // 
    //this._isSelected = false
    //this.setEventListenerDrag()
    }
    // -----------------------------------------------------
    //  Attr 
    // -----------------------------------------------------
    get propertyName() {
        let propertyName = this.krakenSchema?.getLocalizedPropertyID($cee1310907f631a2$var$DEFAULTLOCALE, this.propertyID) || this.propertyID;
        propertyName = propertyName.replace(/([A-Z])/g, " $1");
        return propertyName;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        //
        console.log("init property");
        await super.initObject();
        this.setEventListenerValue();
        this.krakenSchema = (0, $5OpyM$KrakenSchemas).get(this.propertyID);
        let enumerations = this.krakenSchema?.expectedType?.enumerationItems || [];
        if (this.propertyID == "@type") // Handle record_type
        this.innerHTML = this.getHtmlRecordType();
        else if (enumerations.length > 0) // Handle enumerations
        this.innerHTML = this.getHtmlEnumeration();
        else if (this.krakenSchema?.expectedType?.htmlType == "object") this.innerHTML = this.getHtmlObject();
        else this.innerHTML = this.getHtmlSimple();
    }
    getHtmlSimple() {
        return `
        
            <input type="${this.krakenSchema?.expectedType.htmlType}" class="kr-value-item form-control" id="exampleInputPassword1" value="${this.value || ""}"  >
       `;
    }
    getHtmlRecordType() {
        let enumerations;
        let parentProperty = this.thing.closest("kr-property");
        if (parentProperty) enumerations = parentProperty.krakenSchema?.expectedTypes || [];
        else enumerations = (0, $5OpyM$KrakenSchemas).get("Thing").record_types || [];
        let enums = [];
        for (let e of enumerations)enums.push(`<option value="${e}">${e}</option>`);
        let id = String(crypto.randomUUID());
        return `
        
        <input class="kr-value-item form-control" list="datalist_${id}" aria-label="Default select example" value="${this.value}">
              <datalist id="datalist_${id}">
             ${enums.join("")}
                </datalist>
            </input>
          `;
    }
    getHtmlEnumeration() {
        let enumerations = this.krakenSchema.expectedType?.enumerationItems || [];
        let enums = [];
        for (let e of enumerations)enums.push(`<option value="${e.name}">${e.name}</option>`);
        return `
       
        <select class="kr-value-item form-select" aria-label="Default select example" value="${this.value}">
              <option selected></option>
              ${enums.join("")}
            </select>
      `;
    }
    getHtmlObject() {
        return `
       
        <div class="ms-5">
            <kr-form-sm data-record-type="${this.krakenSchema.expectedType.record_id}"></kr-form-sm></div>
           `;
    }
    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------
    setEventListenerDrag() {
        this.draggable = true;
        this.addEventListener("dragstart", (event)=>{
            event.preventDefault();
            event.dataTransfer.setData("text", JSON.stringify(this.record, null, 4));
        });
    }
    setEventListenerValue() {
        this.addEventListener("input", (event)=>{
        //this.replacePropertyValueAction(event.target.value, false)
        });
    }
}
customElements.define("kr-form-input-value", $cee1310907f631a2$export$9642a7479f6f8aa7);



function $d464f81e67b1dfe7$export$ce69bd05624d0c48() {
    return `


        <div class="card mb-3 bg-transparent" style="max-width: 300px;">
            <div class="row g-0">



                <div class="col col-sm-4 align-self-center">
                    <a href="#" class="btn h-100" data-bs-toggle="modal" data-bs-target="#modalID">
                        <img src="{{item.image.contentUrl}}" class="img-fluid rounded-start" alt="..." onerror='this.style.display = "none"'>
                    </a>
                </div>



                <div class="col pt-0 col-sm-8 align-self-top">
                    <div class="row  mt-0 me-1">
                        <span
                            class="mt-0 mb-1 align-self-end text-end justify-content-end kr-action">{{kr-action}}</span>
                    </div>
                    <div class="card-body">

                        <div class="row align-self-center">
                            <h5 class="card-title">
                                <font size="-1">{{item.name}}</font>
                            </h5>
                            <p class="card-text">
                                <font size="-1">{{item.url}}</font>
                            </p>

                        </div>
                    </div>


                    {% for c in parent %}

                        <div class="row me-1 mt-0 text-end justify-content-end">
                            <p class="card-text"><small class="text-body-secondary">
                                    <font size="-1">{{ c.name }}</font>
                                </small></p>
                        </div>

                    {% endfor %}



                    {% for c in children %}

                        <div class="row me-1 mt-0 text-end justify-content-end">
                            <p class="card-text"><small class="text-body-secondary">
                                    <font size="-1">{{ c.name }}</font>
                                </small></p>
                        </div>

                    {% endfor %}

                </div>
            </div>
        </div>

        <div class="modal fade" id="modalID" tabindex="-1" aria-labelledby="modalIDLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">{{heading1}}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {{ content }}
                    </div>

                </div>
            </div>
        </div>`;
}


class $1cb5c88a19c6dd43$export$b3bf7ae86e65c4b3 extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        // Override template
        this.htmlTemplate = (0, $d464f81e67b1dfe7$export$ce69bd05624d0c48)();
        // 
        this._isSelected = false;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        //
        await super.initObject();
    }
}
customElements.define("kr-card", $1cb5c88a19c6dd43$export$b3bf7ae86e65c4b3);



function $7ca5810e6caf7560$export$ce69bd05624d0c48() {
    return `


     

    {% for part in item.hasPart %}
       
        {% if part['@type'] == "WPHeader" %}
                {{ ok }}
                <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            
            
                <div class="container col-xxl-8">
                    <a class="navbar-brand" href="/">{{ item.name }}</a>
                    <button class="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavAltMarkup" 
                        aria-controls="navbarNavAltMarkup" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            {% for headerPart in part.hasPart %} 
                                              
                                <a class="nav-link" href="{{ headerPart.url }}">{{ headerPart.name }}</a>
                
                            {% endfor %}
                        
                        </div>
                    </div>
                </div>
            </nav>

        {% endif %}
    {% endfor %}
    
`;
}


class $a15aafbcf3b63e07$export$eeb603ee131c4240 extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        // Set html template
        this.htmlTemplate = (0, $7ca5810e6caf7560$export$ce69bd05624d0c48)();
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        // Configuration prior to generation
        // Generation
        await super.initObject();
    // Configuration after generation
    }
}
customElements.define("kr-header", $a15aafbcf3b63e07$export$eeb603ee131c4240);



function $425bc8922598bdbd$export$ce69bd05624d0c48() {
    return `
    
    
    {% for part in item.hasPart %}

        {% if part['@type'] == "WPFooter" %}
                    
                
            <div class="bg-dark " data-bs-theme="dark">
                <div class="container col-xxl-8">
                    <footer 
                        class="row 
                        row-cols-1 
                        row-cols-sm-2 
                        row-cols-md-5 py-5 my-5 
                        border-top" 
                    >
                   
                        <div class="col mb-3">
                            <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                                <svg class="bi me-2" width="40" height="32">
                                    <use xlink:href="#bootstrap"></use>
                                </svg>
                            </a>
                            <p class="text-body-secondary">\xa9 2024</p>
                        </div>
                
                        <div class="col mb-3">
                    
                        </div>
                
                        <div class="col mb-3">
                         
                        </div>
                    
                        <div class="col mb-3">
                          
                        </div>
                    
                        <div class="col mb-3">
                            <h5>Section</h5>
                            <ul class="nav flex-column">
                
                                {% for footerPart in part.hasPart %} 
                                   
                                    <li class="nav-item">
                                        <a class="nav-link" href="{{ footerPart.url }}">{{ footerPart.name }}</a>
                                    </li>
                                    
                                {% endfor %}
                              
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>


        {% endif %}
    {% endfor %}

    `;
}


class $476a54f40489d8b8$export$8ca501ca20ddea06 extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        // Set html template
        this.htmlTemplate = (0, $425bc8922598bdbd$export$ce69bd05624d0c48)();
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        // Configuration prior to generation
        // Generation
        await super.initObject();
    // Configuration after generation
    }
}
customElements.define("kr-footer", $476a54f40489d8b8$export$8ca501ca20ddea06);



function $d5c601a817d6f9a1$export$ce69bd05624d0c48() {
    return `
    


{% for part in item.hasPart %}

    {% if part['@type'] == "WPSidebar" %}
                                    
        
        <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 280px;">
        
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">

                <kr-image-xs data-record-type="{{ part['@type'] }}" data-record-id="{{ part['@id'] }}">
                </kr-image-xs>
               
                
                <span class="fs-4">{{ part.name }}</span>
            </a>
            <hr>
            <ul class="nav nav-pills flex-column mb-auto">


                {% for partSidebar in part['hasPart'] %}
                    <li class="nav-item">
                        <a 
                            href="{{ partSidebar.url }}" 
                            class="nav-link" 
                            aria-current="page"
                        >
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#home"></use>
                            </svg>
                          {{ partSidebar.name }}
                        </a>
                    </li>
                {% endfor %}
                
            </ul>
   
          </div>
        

    {% endif %}
{% endfor %}


    
    `;
}


class $15e999f467085fc9$export$5db286b569029c8d extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        // Set html template
        this.htmlTemplate = (0, $d5c601a817d6f9a1$export$ce69bd05624d0c48)();
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        // Configuration prior to generation
        // Generation
        await super.initObject();
    // Configuration after generation
    }
}
customElements.define("kr-sidebar", $15e999f467085fc9$export$5db286b569029c8d);



function $73955e72b76ca97f$export$ce69bd05624d0c48() {
    return `

        {% assign nextLevel = config.level | plus: 1 %}

        <div id="{{ item['@id'] }}">

            <div class="justify-content-center text-center">
                <kr-image-lg data-record-type="{{ item['@type'] }}" data-record-id="{{ item['@id'] }}"></kr-image-lg>
            </div>
            
            <h{{ config.level }}>{{ item.headline }}</h{{ config.level }}>
    
            <p>{{ item.text }}</p>

            {% if item.hasPart %}
                {% for part in item.hasPart %}

                    <kr-article-content 
                        data-level="{{ nextLevel }}" 
                        data-record-type="{{ part['@type'] }}"
                        data-record-id="{{ part['@id'] }}"
                    >
                    </kr-article-content>
                
                {% endfor %}
            {% endif %}
    
    `;
}


class $2c20d220ef9646c9$export$812e3878fe82ef5 extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        // Set html template
        this.htmlTemplate = (0, $73955e72b76ca97f$export$ce69bd05624d0c48)();
        this._level = null;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        // Configuration prior to generation
        this.config.level = this.level;
        // Generation
        await super.initObject();
    // Configuration after generation
    }
    // -----------------------------------------------------
    //  Other attributes 
    // -----------------------------------------------------
    get level() {
        if (this._level && this._level != null) return this._level;
        if (!this._level || this._level == null) {
            let l = this.getAttribute("data-level");
            if (l && l != null) this._level = Number(l);
        }
        if (!this._level || this._level == null) return 1;
        return this._level;
    }
}
customElements.define("kr-article-content", $2c20d220ef9646c9$export$812e3878fe82ef5);



function $49ee38e061beb1b7$export$ce69bd05624d0c48() {
    return `
    
    <a class="nav-link p-0 txt-body-secondary" href="#{{ item['@id'] }}">
        
       <small> {{ item.headline }}</small>
        
    </a>
    
    
        {% if item.hasPart %}
            
            {% for part in item.hasPart %}
                <nav class="nav ms-4 nav-underline">
                    <kr-article-toc 
                        data-level="{{ nextLevel }}" 
                        data-record-type="{{ part['@type'] }}"
                        data-record-id="{{ part['@id'] }}"
                    >
                    </kr-article-toc>
                </nav>
            {% endfor %}
            
        {% endif %}

    `;
}


class $c46e6cd7dfd10cc5$export$c88a9b3113f1080c extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        // Set html template
        this.htmlTemplate = (0, $49ee38e061beb1b7$export$ce69bd05624d0c48)();
        this._level = null;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        // Configuration prior to generation
        this.config.level = this.level;
        // Generation
        await super.initObject();
    // Configuration after generation
    }
    // -----------------------------------------------------
    //  Other attributes 
    // -----------------------------------------------------
    get level() {
        if (this._level && this._level != null) return this._level;
        if (!this._level || this._level == null) {
            let l = this.getAttribute("data-level");
            if (l && l != null) this._level = Number(l);
        }
        if (!this._level || this._level == null) return 1;
        return this._level;
    }
}
customElements.define("kr-article-toc", $c46e6cd7dfd10cc5$export$c88a9b3113f1080c);



function $44d45d04d3ce8060$export$ce69bd05624d0c48() {
    return `
    
            <div class="row" data-bs-spy="scroll">
                <div class="col col-12 col-md-10">
                    
                    <div id="test1">
                    <kr-article-content></kr-article-content>
                    </div>
                </div>
                <div class="col col-0 col-md-2">
                
                    <div id="toc" class="sticky-top mt-4">
                        <kr-article-toc></kr-article-toc>
                        
                    </div>
                </div>
            </div>
            
    `;
}


class $9eb45bab49ca5ac7$export$af70e26fc1b139f3 extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        // Override template
        this.htmlTemplate = (0, $44d45d04d3ce8060$export$ce69bd05624d0c48)();
        // 
        this._isSelected = false;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        //
        await super.initObject();
    }
}
customElements.define("kr-article", $9eb45bab49ca5ac7$export$af70e26fc1b139f3);




function $1d81c89a1165737a$export$ce69bd05624d0c48() {
    return `
    
       
    `;
}


class $b2902dd3d04d4ba1$export$f4e4cc53333b806c extends (0, $0aaa9cc48db105f4$export$883e42d7df0f36f7) {
    constructor(){
        super();
        // Override template
        //this.htmlTemplate = null; //template()
        // 
        this._isSelected = false;
        this._defaultElementTemplate = "kr-editor-line";
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        //
        this.elementTemplate = "kr-editor-line";
        await super.initObject();
    }
}
customElements.define("kr-editor", $b2902dd3d04d4ba1$export$f4e4cc53333b806c);




function $bb6ba61763bd5ef3$export$ce69bd05624d0c48() {
    return `
    
        <div class="row">
                   
            
            <div class="col">

                    <div class="kr-input-field" contenteditable="true">
                        {{ config.best.text }}
                    </div>

                <kr-property data-property-id="hasPart">

                </kr-property>
                    <div class="kr-linear-things-section">
                    </div class="kr-linear-things-section">
                      
                
            </div>
                  
            <div class="col col-1">
                <div class="kr-property-field border">
                </div>
            </div>
            
            <div class="col col-1">
                <div class="kr-value-field border">
                </div>
            </div>

            <div class="col col-1">
                <div class="kr-level-field border">
                {{ config.best.level }}
                </div>
            </div>
                
           
        </div>
                  
                  `;
}


//import { krakenschema } from 'krakenschema'
function $550ba901139e3eed$export$b925571badc57b30(content) {
    let values = [];
    if (!content || content == null || content == "") return null;
    // Extract json from entire content
    if (content.startsWith("{") || content.startsWith("[")) {
        values = values.concat($550ba901139e3eed$var$extractJSON(content));
        return values;
    }
    let key = $550ba901139e3eed$var$getKey(content);
    let rawValue = $550ba901139e3eed$var$getValue(content);
    values = values.concat($550ba901139e3eed$var$extractAction(rawValue));
    // Extract json from rawValue
    values = values.concat($550ba901139e3eed$var$extractJSON(rawValue));
    if (values.length > 0) return values;
    else return [];
}
function $550ba901139e3eed$var$getKey(content) {
    if (!content.includes(":")) return null;
    let key = content.split(":")[0];
    return key;
}
function $550ba901139e3eed$var$getValue(content) {
    if (!content.includes(":")) return content;
    let parts = content.split(":");
    if (parts.length < 2) return null;
    let value = parts[1];
    return value;
}
function $550ba901139e3eed$var$extractAction(content) {
    let rawContent = content.trim();
    if (!rawContent || rawContent == null) return;
    if (!rawContent.startsWith("*")) return [];
    rawContent = rawContent.slice(1);
    let agents = $550ba901139e3eed$var$extractMentions(content);
    let name = rawContent.split("@")[0];
    let record = {
        "@type": "Action",
        "@id": String(crypto.randomUUID()),
        "name": name,
        "agent": agents,
        "actionStatus": "ActiveActionStatus"
    };
    return [
        record
    ];
}
function $550ba901139e3eed$var$extractMentions(content) {
    let results = [];
    let rawContent = content.trim();
    if (!rawContent || rawContent == null) return;
    // Add space after non standard characters
    let nonStandardCharacters = [
        "(",
        ")",
        ","
    ];
    for (let n of nonStandardCharacters)rawContent = rawContent.replace(n, n + " ");
    let parts = rawContent.split(" ");
    for (let part of parts)if (part.startsWith("@")) {
        let record = {
            "@type": "Person",
            "@id": part,
            "name": part
        };
        results.push(record);
    }
    return results;
}
function $550ba901139e3eed$var$extractJSON(content) {
    let results = [];
    let rawContent = content.trim();
    try {
        let jsonContent = JSON.parse(rawContent);
        jsonContent = $550ba901139e3eed$var$ensureArray(jsonContent);
        results = results.concat(jsonContent);
    } catch (error) {
    //console.error('error', rawContent, error)
    }
    return results;
}
function $550ba901139e3eed$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}


var $eff5dd4a008af46b$var$CURSORPOSITION = null;
var $eff5dd4a008af46b$var$ITEMPOSITION = null;
class $eff5dd4a008af46b$export$2d2695af85e352b7 extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        // Override template
        this.htmlTemplate = (0, $bb6ba61763bd5ef3$export$ce69bd05624d0c48)();
        //
        this._isSelected = false;
        this._level = 0;
        this._tabSpacing = 40;
        this._oldRecord = null;
        this._oldValue = null;
        this._oldValueObjects = [];
        this._isInitialized = false;
    }
    // -----------------------------------------------------
    //  Init
    // -----------------------------------------------------
    async initObject() {
        //
        if (this._isInitialized == false) {
            this.config.best = this.thing.getBestRecord();
            this.classList.add("kr-editor-line");
            this._isInitialized = true;
            await super.initObject();
        }
        this.refreshElement();
        this.setKeydownListeners();
        this.startObserver();
    }
    refreshElement() {
        if (!this.thing || this.thing == null) return;
        let level = this.thing.getProperty("level").value;
        //if(!level ){
        //    this.thing.replaceProperty('level', null, 0)
        //}
        if (this._oldRecord == this.thing?.getBestRecord()) return;
        this._oldRecord = this.thing.getBestRecord();
        if (this.inputField) this.refreshAll();
    }
    // -----------------------------------------------------
    //  Additional attributes
    // -----------------------------------------------------
    get listItemElement() {
        return this.closest(".kr-list-item");
    }
    get inputField() {
        return this.querySelector(".kr-input-field");
    }
    get text() {
        let text = this.inputField.textContent;
        if (text && text != null) text = text.trim();
        return text;
    }
    set text(value) {
        this.thing.replaceProperty("text", null, value);
        this.inputField.textContent = value;
    }
    get previousLine() {
        return this.listItemElement?.previousItem?.querySelector(".kr-editor-line") || null;
    }
    get nextLine() {
        return this.listItemElement?.nextItem?.querySelector(".kr-editor-line") || null;
    }
    // -----------------------------------------------------
    //  Attributes - elements
    // -----------------------------------------------------
    get propertyElement() {
        return this.querySelector(".kr-property-field");
    }
    get valueElement() {
        return this.querySelector(".kr-value-field");
    }
    get levelElement() {
        return this.querySelector(".kr-level-field");
    }
    get linearThingsSection() {
        return this.querySelector(".kr-linear-things-section");
    }
    // -----------------------------------------------------
    //  Focus
    // -----------------------------------------------------
    focusPreviousLine() {
        let cursorPosition = this.cursorPosition;
        if (this.previousLine) {
            this.previousLine.setFocus();
            this.previousLine.cursorPosition = cursorPosition;
        }
    }
    focusNextLine() {
        let cursorPosition = this.cursorPosition;
        if (this.nextLine) {
            this.nextLine.setFocus();
            this.nextLine.cursorPosition = cursorPosition;
        }
    }
    // -----------------------------------------------------
    //  Line selection
    // -----------------------------------------------------
    get parentLine() {
        let item = this;
        while(item){
            if (item.level < this.level) return item;
            item = item.previousLine;
        }
        return null;
    }
    get childrenLines() {
        let childrenLines = [];
        let item = this.nextLine;
        while(item){
            if (item.level > this.level) {
                if (item.level == this.level + 1) childrenLines.push(item);
                item = item.nextLine;
            } else return childrenLines;
        }
        return childrenLines;
    }
    // -----------------------------------------------------
    //  Level
    // -----------------------------------------------------
    get level() {
        let level = this.thing.getProperty("level").value || 0;
        return level;
    }
    set level(value) {
        if (this.level == value) return;
        this.thing.replaceProperty("level", null, value);
        this.style.paddingLeft = String(value * this._tabSpacing) + "px";
    }
    incrementLevel() {
        let childrenLines = this.childrenLines;
        if (this.previousLine && this.level <= this.previousLine.level) {
            this.level = this.level + 1;
            if (childrenLines && childrenLines != null) for (let c of childrenLines)c.incrementLevel();
        }
        this.refreshElement();
    }
    decrementLevel() {
        let childrenLines = this.childrenLines;
        if (this.level > 0) {
            this.level = this.level - 1;
            if (childrenLines && childrenLines != null) for (let c of childrenLines)c.decrementLevel();
        }
        this.refreshElement();
    }
    // -----------------------------------------------------
    //  cusrsor position
    // -----------------------------------------------------
    get cursorPosition() {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const clonedRange = range.cloneRange();
        clonedRange.selectNodeContents(this.inputField);
        clonedRange.setEnd(range.endContainer, range.endOffset);
        const cursorPosition = clonedRange.toString().length;
        $eff5dd4a008af46b$var$CURSORPOSITION = cursorPosition;
        return cursorPosition;
    }
    set cursorPosition(value) {
        if (this.inputField.childNodes.length == 0) value = 0;
        else if (this.inputField.childNodes[0] == null) value = 0;
        else if (this.inputField.childNodes[0].length < value) value = this.inputField.childNodes[0].length;
        if (value == -1) value = this.inputField.childNodes[0].length;
        if (value > 0) {
            var selectedText = window.getSelection();
            var selectedRange = document.createRange();
            selectedRange.setStart(this.inputField.childNodes[0], value);
            selectedRange.collapse(true);
            selectedText.removeAllRanges();
            selectedText.addRange(selectedRange);
        }
        this.inputField.focus();
    }
    setFocus() {
        this.inputField.focus();
    }
    // -----------------------------------------------------
    //  Content manipulation
    // -----------------------------------------------------
    processContentChange() {
        let text = this.text;
        if (this.thing.getProperty("text").value == this.text) return;
        // Handle json
        let isJson = false;
        if (text.startsWith("[") || text.startsWith("{")) isJson = this.processJson(text);
        this.thing.replaceProperty("text", null, this.text);
        this.refreshProperty();
        this.refreshValue();
        this.refreshLinearThing();
    }
    processJson(text) {
        try {
            let jsonContent = JSON.parse(text);
            jsonContent = $eff5dd4a008af46b$var$ensureArray(jsonContent);
            let level = this.level;
            if (!level || level == null) level = 0;
            let line = this;
            for (let record of jsonContent)for (let k of Object.keys(record)){
                let content = k + ": " + record[k];
                line = line.addLine(content, level + 1);
            }
            return true;
        } catch (error) {
            return false;
        }
    }
    refreshAll() {
        //this.refreshLineno();
        this.refreshProperty();
        this.refreshValue();
        this.refreshLevel();
        this.refreshLinearThing();
    }
    refreshLineno() {
        if (this.linenoElement.textContent != String(this.lineno)) {
            this.linenoElement.textContent = String(this.lineno);
            if (this.nextElementSibling) this.nextElementSibling.lineno;
        }
    }
    refreshProperty() {
        this.propertyElement.textContent = this.property;
    }
    refreshValue() {
        this.valueElement.textContent = this.value;
    }
    refreshLevel() {
        let level = this.thing.getProperty("level").value || 0;
        this.level = level;
        this.levelElement.textContent = level;
    }
    refreshLinearThing() {
        let section = this.linearThingsSection;
        if (!section || section == null) return;
        //section.innerHTML = null
        let values = this.valueObjects;
        if (!values || values == null) return;
    /*
        for(let v of values){
            let newElement = document.createElement('kr-linear-thing')
            
            
            section.appendChild(newElement)
            newElement.thing = v
            newElement.refreshElement()
        }
        */ }
    get property() {
        if (this.text && this.text != null && this.text.includes(":")) return this.text.split(":")[0];
        if (this.parentLine) return this.parentLine.property;
        if (this._isHeadline) return "headline";
        return "text";
    }
    get isProperty() {
        // returns true if property field
        if (this.text.endsWith(":")) return true;
        return false;
    }
    get value() {
        let text = this.text;
        if (!text || text == null) return null;
        if (!text.includes(":")) return text;
        let parts = text.split(":");
        if (parts.length > 1) return parts[1];
        return null;
    }
    get valueObjects() {
        if (this.text == this._oldValue) return this._oldValueObjects;
        this._oldValue = this.text;
        let value = (0, $550ba901139e3eed$export$b925571badc57b30)(this.text);
        this._oldValueObjects = value;
        this.thing.replaceProperty("hasPart", null, value);
        return this._oldValueObjects;
    }
    get isValue() {
        if (this.text.endsWith(":")) return false;
        else return true;
    }
    // -----------------------------------------------------
    //  Line manipulation
    // -----------------------------------------------------
    async addLine(content, level = 0) {
        let record = {
            "@type": "DigitalDocument",
            "@id": String(crypto.randomUUID()),
            text: content,
            name: content,
            level: level
        };
        let newItem = await this.listItemElement.thingElement.insertAfterItemElement(this.listItemElement, record);
        let newLine = newItem.querySelector(".kr-editor-line");
        return newLine;
    //return itemElement
    }
    async splitLine(cursorPosition = null) {
        if (cursorPosition == null) cursorPosition = this.cursorPosition;
        // Deal with items
        if (this.text && this.text.startsWith("-")) {
            let nextLevel = this.level;
            if (this.previousElementSibling && this.previousElementSibling.level <= this.level) this.incrementLevel();
            let newLine2;
            let newLine1 = this.addLine(this.text.substring(1), this.level + 1);
            if (newLine1.text && newLine1.text.length > 0 && newLine1.text != " ") newLine2 = newLine1.splitLine(cursorPosition - 1);
            else newLine2 = newLine1;
            this.text = "-";
            return newLine2;
        }
        let leftContent = this.text?.substring(0, cursorPosition) || null;
        let rightContent = this.text?.substring(cursorPosition) || null;
        this.text = leftContent;
        let newLevel = this.level;
        if (this.text && this.text.endsWith(":")) newLevel = newLevel + 1;
        let newLine = await this.addLine(rightContent, newLevel);
        newLine.setFocus();
        return newLine;
    }
    mergeLine() {
        if (!this.previousElementSibling) return;
        let position = this.previousElementSibling.text.length;
        if (this.text) this.previousElementSibling.text += " " + this.text;
        this.previousElementSibling.cursorPosition = position + 1;
        let nextElement = this.nextElementSibling;
        this.remove();
        nextElement.lineno;
    }
    // -----------------------------------------------------
    //  Content observer
    // -----------------------------------------------------
    startObserver() {
        var target = this.inputField;
        // create an observer instance
        let element = this;
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type == "characterData") $eff5dd4a008af46b$var$debounce(element.processContentChange());
            });
        });
        // configuration of the observer:
        var config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        // pass in the target node, as well as the observer options
        observer.observe(this, config);
    }
    // -----------------------------------------------------
    //  Content listener
    // -----------------------------------------------------
    setKeydownListeners() {
        this.addEventListener("keydown", (event)=>{
            if (event.key == "Enter") {
                event.preventDefault();
                event.stopPropagation();
                $eff5dd4a008af46b$var$debounce_leading(this.splitLine());
                this.focusNextLine();
            }
            if (event.key == "ArrowUp") {
                event.preventDefault();
                event.stopPropagation();
                this.focusPreviousLine();
            }
            if (event.key == "ArrowDown") {
                event.preventDefault();
                event.stopPropagation();
                this.focusNextLine();
            }
            if (event.ctrlKey == true && event.key == "ArrowRight") {
                event.preventDefault();
                event.stopPropagation();
                this.cursorPosition(-1);
            }
            if (event.ctrlKey == true && event.key == "ArrowLeft") {
                event.preventDefault();
                event.stopPropagation();
                this.cursorPosition(0);
            }
            if (event.shiftKey == false && event.key == "Tab") {
                event.preventDefault();
                event.stopPropagation();
                $eff5dd4a008af46b$var$debounce_leading(this.incrementLevel());
            }
            if (event.shiftKey == true && event.key == "Tab") {
                event.preventDefault();
                event.stopPropagation();
                $eff5dd4a008af46b$var$debounce_leading(this.decrementLevel());
            }
            if (event.key == "Backspace" && this.cursorPosition == 0) {
                event.preventDefault();
                event.stopPropagation();
                $eff5dd4a008af46b$var$debounce_leading(this.mergeLine());
            }
            if (event.ctrlKey == true && event.key == "b") {
                event.preventDefault();
                event.stopPropagation();
                this.toggleHeadline();
            }
        });
    }
}
customElements.define("kr-editor-line", $eff5dd4a008af46b$export$2d2695af85e352b7);
function $eff5dd4a008af46b$var$createRange(node, chars, range) {
    if (!range) {
        range = document.createRange();
        range.selectNode(node);
        range.setStart(node, 0);
    }
    if (chars.count === 0) range.setEnd(node, chars.count);
    else if (node && chars.count > 0) {
        if (node.nodeType === Node.TEXT_NODE) {
            if (node.textContent.length < chars.count) chars.count -= node.textContent.length;
            else {
                range.setEnd(node, chars.count);
                chars.count = 0;
            }
        } else for(var lp = 0; lp < node.childNodes.length; lp++){
            range = $eff5dd4a008af46b$var$createRange(node.childNodes[lp], chars, range);
            if (chars.count === 0) break;
        }
    }
    return range;
}
function $eff5dd4a008af46b$var$isChildOf(node, parentId) {
    while(node !== null){
        if (node.id === parentId) return true;
        node = node.parentNode;
    }
    return false;
}
function $eff5dd4a008af46b$var$getCurrentCursorPosition(parentId) {
    var selection = window.getSelection(), charCount = -1, node;
    if (selection.focusNode) {
        if ($eff5dd4a008af46b$var$isChildOf(selection.focusNode, parentId)) {
            node = selection.focusNode;
            charCount = selection.focusOffset;
            while(node){
                if (node.id === parentId) break;
                if (node.previousSibling) {
                    node = node.previousSibling;
                    charCount += node.textContent.length;
                } else {
                    node = node.parentNode;
                    if (node === null) break;
                }
            }
        }
    }
    return charCount;
}
function $eff5dd4a008af46b$var$getDirectChilds(element, className) {
    // returns direct childs, not grandchilds
    let results = [];
    for (let child of element.children)if (child.classList && child.classList.contains(className)) results.push(child);
    else results = results.concat($eff5dd4a008af46b$var$getDirectChilds(child, className));
    return results;
}
function $eff5dd4a008af46b$var$debounce(func, timeout = 300) {
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(this, args);
        }, timeout);
    };
}
function $eff5dd4a008af46b$var$debounce_leading(func, timeout = 300) {
    let timer;
    return (...args)=>{
        if (!timer) func.apply(this, args);
        clearTimeout(timer);
        timer = setTimeout(()=>{
            timer = undefined;
        }, timeout);
    };
}
function $eff5dd4a008af46b$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}
function $eff5dd4a008af46b$var$waitForElement(condition, callback) {
    let result = condition;
    if (result && result != null) callback();
    else setTimeout(()=>$eff5dd4a008af46b$var$waitForElement(selector, callback), 500);
}




function $8d1ac986af9ae74b$export$ce69bd05624d0c48() {
    return `



        <div class="">

            {{ config.best['@type'] }}
            {% if config.best['@type'] == "Action" %}

                <kr-action-status></kr-action-status> {{ config.best.name }} {{ config.best.agent.name }}

          

            {% elsif config.best['@type'] == "Person" %}
            
                <kr-image-sm></kr-image-sm> {{ config.best.name }} {{ config.best.givenName }} {{ config.best.familyName }} 
            
            {% else %}

                {{ config.best.text }}
                
            {% endif %}

           
        </div>

        

    `;
}


class $20e6b62a9d33c0f2$export$37144f924cbee85d extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        // Override template
        this.htmlTemplate = (0, $8d1ac986af9ae74b$export$ce69bd05624d0c48)();
        this._oldRecord = null;
        // 
        this._isSelected = false;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        //
        console.log("br", this.thing.record_type);
        this.config.best = this.thing.getBestRecord();
        await super.initObject();
    }
    refreshElement() {
        let bestRecord = this.thing.getBestRecord();
        console.log("br", this.thing.record_type);
        if (bestRecord == this._oldRecord) {
            console.log("is equal");
            return;
        }
        this._oldrecord = bestRecord;
        this.initObject();
    }
}
customElements.define("kr-linear-thing", $20e6b62a9d33c0f2$export$37144f924cbee85d);



function $7b227d0c07f6adfd$export$ce69bd05624d0c48() {
    return `
    {% for i in item %}
        <div class="row">
            <div class="col col-3">
                <b>{{i[0]}}</b>
            </div>
            <div class="col col-9">
                 <kr-property data-property-id="{{ i[0] }}" data-value-template="kr-simple">
            </kr-property>
            </div>
        </div>      
    {% endfor %}
    <br>
    `;
}


class $17da1274e3226940$export$334b39ef3666f448 extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        // Override template
        this.htmlTemplate = (0, $7b227d0c07f6adfd$export$ce69bd05624d0c48)();
        this._keys = null;
        this._headers = null;
        //
        this._isSelected = false;
    }
}
customElements.define("kr-simple", $17da1274e3226940$export$334b39ef3666f448);


var $cf838c15c8b009ba$export$f2dab6d0f1f79ab0 = {
    KrState: (0, $e1d2d0ad7c039b95$export$5f9669fd1f9421b0),
    KrThing: (0, $39f45085ee66ea88$export$b0d3c692106194fc),
    KrThings: (0, $0aaa9cc48db105f4$export$883e42d7df0f36f7),
    KrProperty: (0, $076366d6bcc385fe$export$877632ce842a560a),
    KrValue: (0, $6260eb9c6959f3a9$export$e08f919799ed3a88),
    KrListItem: (0, $db950ef1f1a2dc28$export$cc7bc883e2674a15),
    KrAction: (0, $903112dd48b35547$export$3702ed23437adb2c),
    KrActionMenu: (0, $99a74800607e7f7b$export$d7e59d17540b14b),
    KrActionStatus: (0, $d0e6389b231f00ae$export$61f029a88b5e2c25),
    KrTable: (0, $c9792c3d0c357cf1$export$709c89605c2a432),
    KrAvatar: (0, $2f2108af387115a9$export$e3ffc3224576be06),
    KrImage: (0, $56c57cbb5755b4a7$export$7a9e7b07acd55f8a),
    KrImageXs: (0, $56c57cbb5755b4a7$export$d493f24286260912),
    KrImageSm: (0, $56c57cbb5755b4a7$export$c76d8adf7e09a74d),
    KrImageMd: (0, $56c57cbb5755b4a7$export$1c543d8ae4367950),
    KrImageLg: (0, $56c57cbb5755b4a7$export$584c9b86c5b95275),
    KrImageAvatar: (0, $56c57cbb5755b4a7$export$b1785d3b1349d6c6),
    KrFormInput: (0, $edeae80b39d6ccb0$export$f9d1eda03b3fdf10),
    KrFormSm: (0, $abadb7053c2542a7$export$1224b350cb6b2979),
    KrCardElement: (0, $1cb5c88a19c6dd43$export$b3bf7ae86e65c4b3),
    KrHeaderElement: (0, $a15aafbcf3b63e07$export$eeb603ee131c4240),
    KrFooterElement: (0, $476a54f40489d8b8$export$8ca501ca20ddea06),
    KrSidebarElement: (0, $15e999f467085fc9$export$5db286b569029c8d),
    KrArticleElement: (0, $9eb45bab49ca5ac7$export$af70e26fc1b139f3),
    KrArticleToCElement: (0, $c46e6cd7dfd10cc5$export$c88a9b3113f1080c),
    KrArticleContentElement: (0, $2c20d220ef9646c9$export$812e3878fe82ef5),
    KrSelectElement: (0, $896299da9ed01fc7$export$96d1f7ac72ab9056),
    KrEditor: (0, $b2902dd3d04d4ba1$export$f4e4cc53333b806c),
    KrEditorLine: (0, $eff5dd4a008af46b$export$2d2695af85e352b7)
};


export {$cf838c15c8b009ba$export$f2dab6d0f1f79ab0 as KrElements};
//# sourceMappingURL=main.js.map
