import {KrThing as $5OpyM$KrThing} from "krakenthing";
import {Liquid as $5OpyM$Liquid} from "liquidjs";
import {KrakenSchemas as $5OpyM$KrakenSchemas} from "krakenschema";


class $e1d2d0ad7c039b95$export$5f9669fd1f9421b0 extends HTMLElement {
    /**
     * State manager 
     */ constructor(){
        super();
        this._db = [];
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
        if (record_type && record_type != null) {
            if (record_id && record_id != null) return this._get_record(record_type, record_id);
            else return this._get_records_for_type(record_type);
        } else return this._get_records_all();
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
        if (!(record instanceof (0, $5OpyM$KrThing))) {
            let v = new (0, $5OpyM$KrThing)();
            v.record = record;
            record = v;
        }
        this._db.push(record);
        this.setListenerOnThing(record);
        for (let r of record.things)if (record.record_id != r.record_id) this.setThing(r);
        return record;
    }
    setListenerOnThing(thing) {
        thing.addEventListener("all", (event)=>{
            let t = event.target;
        //console.log('Saving thing', t.record_type, t.record_id, t)
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



function $c3baf891cea9dcd0$export$aa3e815946b80764() {
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


function $7b15e2c553bcd155$export$e5185e241753e543() {
    return `<div class="container">
        <h1>Record: {{ item.name }}</h1>
        <h2>{{ item["@type"] }}</h2>


        {% if item.contentUrl %}

            <img src="{{ item.contentUrl }}" class="img-fluid rounded-start" alt="..." onerror='this.style.display = "none"'>

        {% endif %}

        {% if item.image and image.contentUrl  %}
        
            <img src="{{ item.image.contentUrl }}" class="img-fluid rounded-start" alt="..." onerror='this.style.display = "none"'>
        
        {% endif %}
        
        Values:
        


        <kr-action-status></kr-action-status>
        
        {% for pair in item %} 
            {% assign key = pair[0] %} 
            {% assign value = pair[1] %} 
            
            
            <div class="row">
                <div class="col col-3">
                   {{ key }}:
                </div>
        
                <div class="col col-9">

                    {% if value['@type'] %}

                        {{value.name}}
                        {{value.givenName}} {{value.familyName}}
                        {{value.url}}
                        {{value.contentUrl}}
                    
                    {% elsif value.first %}

                        {% for v in value %}

                            {% if v['@type'] %}
                            
                                {{v.name}}
                                {{v.givenName}} {{v.familyName}}
                                {{v.url}}
                                {{v.contentUrl}}

                            {% else  %}
                                 {{ v }}
                            {% endif %}
                            
                        {% endfor %}
                    
                    
                    {% else  %}
                         {{ value}}
                    {% endif %}
                
                  
                </div>
        
            </div>
        {% endfor %}

    </div>
    `;
}



const $39f45085ee66ea88$var$engine = new $5OpyM$Liquid();
class $39f45085ee66ea88$export$b0d3c692106194fc extends HTMLElement {
    constructor(){
        super();
        this._thing = null;
        this._record = null;
        this.htmlTemplate = (0, $c3baf891cea9dcd0$export$aa3e815946b80764)() // HTML content as template
        ;
        this.htmlContent = null // Actual HTML content
        ;
        this.config = {};
        this.useBestRecord = false;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        this.initKrState();
        this.setDefaultId();
        await this.renderHTML();
        this.showContent();
    }
    setDefaultId() {
        if (!this.id || this.id == null) this.id = String(crypto.randomUUID());
    }
    setTemplate(templateID) {
        if (templateID == "card") this.htmlTemplate = (0, $c3baf891cea9dcd0$export$aa3e815946b80764)();
        if (templateID == "record") this.htmlTemplate = (0, $7b15e2c553bcd155$export$e5185e241753e543)();
    }
    initKrState() {
        let krState = document.getElementsByClassName("KR-STATE");
        if (!krState) document.body.appendChild(document.createElement("KR-STATE"));
    }
    loadRecordFromAttribute() {
        if (this.dataset.record) this.record = JSON.parse(this.dataset.record);
        if (this.dataset.recordType) this.record_type = this.dataset.recordType;
        if (this.dataset.recordId) this.record_id = this.dataset.recordId;
    }
    loadRecordFromValueElement() {
        if (this.closest(".kr-value")) this.record = this.closest(".kr-value")?.value;
    }
    // -----------------------------------------------------
    //  Content renderer 
    // -----------------------------------------------------
    get elementRecord() {
        // Record with added 
        if (!this.thing) return {};
        let elementRecord = this.thing.record || {};
        //elementRecord.potentialAction = this.potentialActions
        return elementRecord;
    }
    async renderHTML() {
        console.log(this.record_type, this.elementRecord);
        let tpl = await $39f45085ee66ea88$var$engine.parse(this.htmlTemplate);
        this.htmlContent = await $39f45085ee66ea88$var$engine.render(tpl, {
            item: this.elementRecord,
            config: this.config
        });
    }
    showContent() {
        this.innerHTML = this.htmlContent;
    }
    // -----------------------------------------------------
    //  Attributes 
    // -----------------------------------------------------
    get krState() {
        let krState = document.getElementsByTagName("KR-STATE")?.[0];
        if (!krState || krState == null) krState = document.body.appendChild(document.createElement("KR-STATE"));
        return krState;
    }
    get record_type() {
        return this.getAttribute("data-record-type") || null;
    }
    set record_type(value) {
        this._record_type = value;
        this.setAttribute("data-record-type", value);
    }
    get record_id() {
        return this.getAttribute("data-record-id") || null;
    }
    set record_id(value) {
        this._record_id = value;
        this.setAttribute("data-record-id", value);
    }
    get record() {
        if (!this.thing) return {};
        this._record = this.thing.record;
        return $39f45085ee66ea88$var$simplify(this.thing.record);
    }
    set record(value) {
        if (!value || value == null) return;
        if (!this.thing) {
            let thing = new (0, $5OpyM$KrThing)();
            thing.record = value;
            this.thing = thing;
        }
        if (!value["@type"]) value["@type"] = "Thing";
        this.thing.record = value;
        this.record_type = this.thing.record_type;
        this.record_id = this.thing.record_id;
        this.initObject();
    }
    get thing() {
        console.log("get thing", this.record_type);
        if (!this.record_type || this.record_type == null) return null;
        if (!this.record_id || this.record_id == null) return null;
        return this.krState.getThing(this.record_type, this.record_id);
    }
    set thing(value) {
        if (!(value instanceof (0, $5OpyM$KrThing))) {
            let k = new (0, $5OpyM$KrThing)();
            k.record = value;
            value = k;
        }
        this._thing = value;
        this.krState.setThing(value);
        this.record_type = value.record_type;
        this.record_id = value.record_id;
        value.addEventListener("all", (event)=>{
            if (this._record != value.record) {
                this._record = value.record;
                this.initObject();
            }
        });
    }
    // -----------------------------------------------------
    //  Properties 
    // -----------------------------------------------------
    getValues(propertyID) {
        if (!this.thing) return [];
        let values = this.thing.record?.[propertyID] || [];
        values = $39f45085ee66ea88$var$ensureArray(values);
        return values;
    }
    getProperty(propertyID) {
        if (!this.thing) return [];
        return this.thing.getProperty(propertyID);
    }
    setProperty(propertyID, value) {
        return this.thing.replaceProperty(propertyID, null, value);
    }
    replaceProperty(propertyID, oldValue, newValue, refreshFlag = true) {
        if (this.thing) return this.thing.replaceProperty(propertyID, oldValue, newValue);
        else return null;
    }
    addProperty(propertyID, value) {
        if (this.thing) return this.thing.addProperty(propertyID, value);
        else return null;
    }
    deleteProperty(propertyID, value) {
        if (this.thing) return this.thing.deleteProperty(propertyID, value);
        else return null;
    }
    // -----------------------------------------------------
    //  Potential actions 
    // -----------------------------------------------------
    findPotentialAction(actionID) {
        for (let i of this.potentialActions){
            if (i?.["@id"] == actionID) return i;
        }
        return null;
    }
    get potentialActions() {
        let actions = [];
        actions.push(this.deleteAction);
        return actions;
    }
    get deleteAction() {
        let record = {
            "@type": "deleteAction",
            "@id": "deleteAction",
            "name": "delete",
            "image": {
                "@type": "ImageObject",
                "contentUrl": "./delete.svg"
            },
            "object": this.record,
            "url": "",
            "actionStatus": "potentialActionStatus",
            "targetCollection": "listItemElement",
            "target": ""
        };
        return record;
    }
    deleteAction() {}
    // -----------------------------------------------------
    //  State management 
    // -----------------------------------------------------
    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------
    connectedCallback() {
        this.classList.add("kr-thing");
        this.style.display = "block";
        this.loadRecordFromAttribute();
        this.loadRecordFromValueElement();
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
customElements.define("kr-thing", $39f45085ee66ea88$export$b0d3c692106194fc);
class $39f45085ee66ea88$export$7a38d02d9f0ef203 extends $39f45085ee66ea88$export$b0d3c692106194fc {
    constructor(){
        super();
        this.htmlTemplate = (0, $c3baf891cea9dcd0$export$aa3e815946b80764)();
    }
}
customElements.define("kr-card", $39f45085ee66ea88$export$7a38d02d9f0ef203);
function $39f45085ee66ea88$var$simplify(data, count = 0, origData = null) {
    if (origData == null) origData = data;
    //return data
    // Remove arrays of 1
    if (Array.isArray(data)) {
        // If the array has exactly one element, return that element
        if (data.length === 1) return $39f45085ee66ea88$var$simplify(data[0], count + 1, origData);
        else // Otherwise, process each element in the array
        return data.map($39f45085ee66ea88$var$simplify);
    } else if (data !== null && typeof data === "object") {
        // If the data is an object, process each key
        const newData = {};
        for(const key in data)if (data.hasOwnProperty(key)) newData[key] = $39f45085ee66ea88$var$simplify(data[key], count + 1, origData);
        return newData;
    } else // If the data is neither an array nor an object, return it as is
    return data;
}
function $39f45085ee66ea88$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}



function $ead5f1a7057892c7$export$58bd19dc602f5e9a() {
    return `
        <!-- Title -->
        <div class="row border p-3">
            <div class="col">
                 <h1>List {{ name }} </h1>
            </div>
        
        </div>

        
        <div class="row border p-3">

            <!-- Selection -->
            <div class="col col-1">
                <kr-select-all>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                </kr-select-all>
            </div>


            <!-- TBD -->
            <div class="col col-1">
                        P
            </div>


            <!-- Items -->
            <div class="col col-9">
            </div>



            <!-- Actions -->
            <div class="col col-1 ">


                <kr-action-menu>
                </kr-action-menu>
               
            </div>

            
        </div>
        
        
        <div class="row border ">

            <div class="col m-0 p-0">
                {{ itemListElement }}
            </div>

        </div>`;
}



//import { Liquid } from 'liquidjs'
const $0aaa9cc48db105f4$var$engine = new $5OpyM$Liquid();
class $0aaa9cc48db105f4$export$883e42d7df0f36f7 extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        // Set template and content for list
        this.htmlTemplate = (0, $ead5f1a7057892c7$export$58bd19dc602f5e9a)();
        // Set template for listItems
        this.listItemTemplate = null;
        this.listItemRecordTemplate = null // Template record for new list items elements
        ;
        // Set template for listItem.item content
        this.listItem_itemTemplate = null;
        // Set options
        this.showSelect = true;
        this.showPosition = true;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        await super.initObject();
        this.loadRecords();
        this.setEventListenerSelect();
        this.setEventListenerDrop();
    }
    loadRecords() {
        if (!this.records) return;
        for (let record of $0aaa9cc48db105f4$var$ensureArray(this.records))this.upsertItemElement(record);
    }
    // -----------------------------------------------------
    //  Element navigation 
    // -----------------------------------------------------
    get krItemListElement() {
        return this.querySelector(".krItemListElement");
    }
    // -----------------------------------------------------
    //  Content renderer 
    // -----------------------------------------------------
    async renderHTML() {
        let tpl = await $0aaa9cc48db105f4$var$engine.parse(this.htmlTemplate);
        let r = JSON.parse(JSON.stringify(this.elementRecord));
        r["itemListElement"] = '<span class="krItemListElement"></span>';
        this.htmlContent = await $0aaa9cc48db105f4$var$engine.render(tpl, r);
    }
    // -----------------------------------------------------
    //  Select section 
    // -----------------------------------------------------
    getSelecteditems() {
        let items = [];
        for (let e of this.krItemListElement.children)if (e.isSelected == true) items.push(e);
        return items;
    }
    get KrSelect() {
        return this.querySelector("kr-select-all > input");
    }
    get isSelected() {
        return this.KrSelect.checked;
    }
    set isSelected(value) {
        this.KrSelect.checked = value;
    }
    selectAll() {
        for (let e of this.krItemListElement.children)if (e.isSelected == false) e.isSelected = true;
    }
    selectNone() {
        for (let e of this.krItemListElement.children)if (e.isSelected == true) e.isSelected = false;
    }
    setEventListenerSelect() {
        let m = this;
        this.KrSelect.addEventListener("click", (event)=>{
            if (m.isSelected == true) this.selectAll();
            else this.selectNone();
        });
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
            if (element.tagName == "KR-LIST-ITEM" && element.things.record_id != this.record_id) {
                let itemDrop = event.target.closest("KR-LIST-ITEM");
                // Add record
                this.record.itemListElement.push(element.record);
                // Create new element
                let newElement = this.upsertItemElement(element.record);
                // Insert before other item if dropped on one
                if (itemDrop) {
                    itemDrop.before(newElement);
                    newElement.resetPosition();
                }
            }
        });
    }
    // -----------------------------------------------------
    //  CRUD - Elements
    // -----------------------------------------------------
    createItemElement(record) {
        record = this.recordToListItem(record);
        let newItem = document.createElement(this.listItemTemplate);
        newItem.itemTemplate = this.listItem_itemTemplate;
        newItem.record = record;
        this.setItemEventListeners(newItem);
        this.krItemListElement.appendChild(newItem);
        return newItem;
    }
    getItemRecord(record_id) {
        for(let r in this.record.itemListElement){
            if (r?.["@id"] == record_id) return r;
        }
        return null;
    }
    getItemElement(record_type, record_id) {
        for (let i of this.krItemListElement?.children || []){
            if (i.record_type == record_type && i.record_id == record_id) return i;
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
        if (record["@type"] == "ListItem") return record;
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
    get potentialActions() {
        let actions = [];
        actions.push(this.addAction);
        actions.push(this.deleteAction);
        return actions;
    }
    get addAction() {
        let item = this;
        let record = {
            "@type": "addAction",
            "@id": "addAction",
            "name": "add",
            "image": {
                "@type": "ImageObject",
                "contentUrl": "./icons/plus.svg"
            },
            "object": this.listItemRecordTemplate,
            "url": "",
            "actionStatus": "potentialActionStatus",
            "targetCollection": "listItemElement",
            "target": "executeAddAction"
        };
        return record;
    }
    get deleteAction() {
        let item = this;
        let record = {
            "@type": "deleteAction",
            "@id": "deleteAction",
            "name": "delete",
            "image": {
                "@type": "ImageObject",
                "contentUrl": "./icons/delete.svg"
            },
            "object": "",
            "url": "",
            "actionStatus": "potentialActionStatus",
            "targetCollection": "listItemElement",
            "target": "executeDeleteAction"
        };
        return record;
    }
    // -----------------------------------------------------
    //  Attributes 
    // -----------------------------------------------------
    get itemListElement() {
        return this._record?.itemListElement || [];
    }
    set itemListElement(value) {
        this._record.itemListElement = value;
    }
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




const $076366d6bcc385fe$var$engine = new $5OpyM$Liquid();
class $076366d6bcc385fe$export$877632ce842a560a extends HTMLElement {
    constructor(){
        super();
        this.htmlTemplate = "" // HTML content as template
        ;
        this.htmlContent = null // Actual HTML content
        ;
        this.config = {};
        this.values = null;
    }
    async initObject() {
        this.setDefaultId();
        this.config.propertyID = this.propertyID;
        this.krakenSchema = (0, $5OpyM$KrakenSchemas).get(this.propertyID);
        await this.renderHTML();
        this.showContent();
    }
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------
    setDefaultId() {
        if (!this.id || this.id == null) this.id = String(crypto.randomUUID());
    }
    async renderHTML() {
        if (this.thing) {
            let tpl = await $076366d6bcc385fe$var$engine.parse(this.htmlTemplate);
            this.htmlContent = await $076366d6bcc385fe$var$engine.render(tpl, {
                item: this.values,
                config: this.config
            });
        }
    }
    showContent() {
        this.innerHTML = this.htmlContent;
    }
    // -----------------------------------------------------
    //  potentialActions 
    // -----------------------------------------------------
    addPropertyValueAction(value) {
        // Get current value
        if (!this.thing) return;
        if (!value || value == null) {
            if (this.krakenSchema?.expectedType?.htmlType == "object") value = {
                "@type": this.krakenSchema?.expectedType?.record_id,
                "@id": String(crypto.randomUUID())
            };
            else value = "test";
        }
        this.thing.thing.addProperty(this.propertyID, value);
    }
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------
    get thing() {
        let t = this.closest(".kr-thing");
        return t;
    }
    get record() {
        return this.thing.record;
    }
    get elementRecord() {
        return this.thing.elementRecord;
    }
    get propertyID() {
        return this.getAttribute("data-property-id");
    }
    set propertyID(value) {
        return this.setAttribute("data-property-id", value);
    }
    get values() {
        if (!this.thing) return null;
        let values = this.thing.getValues(this.propertyID);
        return values;
    }
    set values(value) {
        return this.setAttribute("data-value", value);
    }
    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------
    connectedCallback() {
        this.classList.add("kr-property");
        this.initObject();
    }
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback(name, oldValue, newValue) {}
}
customElements.define("kr-property", $076366d6bcc385fe$export$877632ce842a560a);


class $6260eb9c6959f3a9$export$e08f919799ed3a88 extends HTMLElement {
    constructor(){
        super();
        this._value = null;
    //this.position = 0
    }
    async initObject() {
        this.setDefaultId();
        this.setMutationObserver();
    }
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------
    setDefaultId() {
        if (!this.id || this.id == null) this.id = String(crypto.randomUUID());
    }
    loadValueFromAttribute() {
        if (this.dataset.value && this.dataset.value != null && this.dataset.value != "") this.value = JSON.parse(this.dataset.value);
    }
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------
    get contentElement() {
        if (!this.children || this.children.length == 0) {
            let contentElement = document.createElement("div");
            this.appendChild(contentElement);
            contentElement.classList.add("kr-value-span");
        }
        let element = this.querySelector(".kr-value-span");
        return element;
    }
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------
    get thing() {
        return this.closest(".kr-thing");
    }
    get record() {
        return this.thing.record;
    }
    get propertyID() {
        return this.getAttribute("data-property-id");
    }
    set propertyID(value) {
        return this.setAttribute("data-property-id", value);
    }
    get property() {
        return this.closest(".kr-property");
    }
    get position() {
        return this.getAttribute("data-position");
    }
    set position(value) {
        return this.setAttribute("data-position", value);
    }
    get values() {
        let values = this.property?.values;
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
    get valueElement() {
        return this.contentElement.innerText;
    }
    set valueElement(value) {
        this.contentElement.innerText = value;
    }
    // -----------------------------------------------------
    //  potentialActions 
    // -----------------------------------------------------
    addPropertyValueAction(value) {
        this.thing.addProperty(this.propertyID, value);
        this.value = value;
    }
    replacePropertyValueAction(value, refreshFlag = true) {
        if (this.value != value) this.thing.replaceProperty(this.propertyID, this.value, value, refreshFlag);
    }
    deletePropertyValueAction(value) {
        this.thing.removeProperty(this.propertyID, value);
        this.value = null;
        this.remove();
    }
    // -----------------------------------------------------
    //  Mutation observer 
    // -----------------------------------------------------
    setMutationObserver() {
        const callback = (mutationList, observer)=>{
            for (const mutation of mutationList){
                if (mutation.type === "childList") ;
                else if (mutation.type === "attributes") ;
                else if (mutation.type === "characterData") this.thing.record[this.propertyID] = mutation.target.innerText;
            }
        };
        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);
        const config = {
            attributes: true,
            attributeOldValue: true,
            characterData: true,
            characterDataOldValue: true,
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
        this.classList.add("kr-value");
        this.loadValueFromAttribute();
        this.initObject();
    }
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback(name, oldValue, newValue) {}
}
customElements.define("kr-value", $6260eb9c6959f3a9$export$e08f919799ed3a88);


function $2e00f1f904a5eba2$export$aa3e815946b80764() {
    return `
    <div class="row border ps-3 pe-3 pt-0 pb-0 hover m-0">
        
        <div class="col col-1 mt-3">
            <kr-select>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            </kr-select>
         </div>
        
        <div class="col col-1 mt-3">
            <p>{{ position | default: "" }}</p>
        </div>

        <div class="col col-12 col-md-9 pt-0 pb-0">
            {{ item }}
        </div>
        <div class="col col-1 p-1 ">
            <kr-potential-actions style="visibility: hidden"> 

                <kr-action-menu>
               
                </kr-action-menu>
            
            </kr-potential-actions>
        </div>

    </div>`;
}




const $db950ef1f1a2dc28$var$engine = new $5OpyM$Liquid();
class $db950ef1f1a2dc28$export$cc7bc883e2674a15 extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        // Override template
        this.htmlTemplate = (0, $2e00f1f904a5eba2$export$aa3e815946b80764)();
        // Set template for item content
        this.itemTemplate = null;
        // 
        this._isSelected = false;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    async initObject() {
        //
        await super.initObject();
        this.showItemContent();
        this.setEventListenerPotentialActions();
        this.setEventListenerSelect();
        this.setEventListenerClick();
        this.setEventListenerReorder();
    }
    async refreshObject() {
        await this.initObject();
    }
    resetPosition() {
        let oldValue = this.record.position;
        let newValue = this.position;
        if (oldValue != newValue) {
            this.record.position = this.position;
            if (this.thing) this.thing.replaceProperty("position", this.position);
            this.refreshObject();
        }
        if (this.nextItem) this.nextItem.resetPosition();
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
    get KrSelect() {
        return this.querySelector("kr-select > input");
    }
    // -----------------------------------------------------
    //  Content 
    // -----------------------------------------------------
    async renderHTML() {
        let tpl = await $db950ef1f1a2dc28$var$engine.parse(this.htmlTemplate);
        let r = JSON.parse(JSON.stringify(this.record));
        r["item"] = '<span class="krItemElement"></span>';
        this.htmlContent = await $db950ef1f1a2dc28$var$engine.render(tpl, r);
    }
    showItemContent() {
        let itemElement = document.createElement(this.itemTemplate);
        itemElement.record = this.record?.item;
        this.krItemElement.innerHTML = "";
        this.krItemElement.appendChild(itemElement);
    }
    // -----------------------------------------------------
    //  Select section 
    // -----------------------------------------------------
    get isSelected() {
        return this.KrSelect.checked;
    }
    setEventListenerSelect() {
        let m = this;
        this.KrSelect.addEventListener("click", (event)=>{
            if (m.isSelected == true) {
                m.firstElementChild.classList.add("bg-body-tertiary");
                this.isSelected = true;
            } else {
                m.firstElementChild.classList.remove("bg-body-tertiary");
                this.isSelected = false;
            }
        });
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
    get isSelected() {
        return this._isSelected;
    }
    set isSelected(value) {
        let oldValue = this._isSelected;
        this._isSelected = value;
        if (value != oldValue) {
            const event = new CustomEvent("kr-select", {
                detail: this.record
            });
            this.dispatchEvent(event);
            this.KrSelect.checked = value;
        }
    }
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
        if (this.previousItem == null) return 0;
        else return this.previousItem.position + 1;
    }
    get firstItem() {
        let item = this;
        while(item.previousItem)item = item.previousItem;
        return item;
    }
    get previousItem() {
        let item = this.previousSibling;
        while(item && item.tagName != this.tagName)item = item.previousSibling || null;
        return item;
    }
    get nextItem() {
        let item = this.nextSibling;
        while(item && item.tagName != this.tagName)item = item.nextSibling || null;
        return item;
    }
    get things() {
        return this.closest("kr-things");
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
customElements.define("kr-list-item", $db950ef1f1a2dc28$export$cc7bc883e2674a15);



function $54340a425f3e570d$export$1ca1ec8b29a4ce27() {
    return `

{{item | json }}
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
        this.htmlTemplate = (0, $54340a425f3e570d$export$1ca1ec8b29a4ce27)();
        this.initialized = false;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    initObject() {
        super.initObject();
        this.initEventListeners();
    }
    getPropertiesfromAttributes() {
        let actionName = this.getAttribute("data-action-name");
        //this.thing = this.krState.getThing(this.record_type, this.record_id)
        let record2 = {
            "@type": actionName,
            "@id": String(crypto.randomUUID()),
            "name": actionName,
            "image": {
                "@type": "ImageObject",
                "contentUrl": this.getIcon(actionName)
            },
            "url": "",
            "actionStatus": "potentialActionStatus"
        };
    //this.record = record
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
                console.log("click action", this.id);
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
        console.log("add", this.record_type);
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
        this.initObject();
        this.getPropertiesfromAttributes();
    }
}
customElements.define("kr-action", $903112dd48b35547$export$3702ed23437adb2c);



function $3c9a2fa96e7a0162$export$b1e5508a851be14d() {
    return `
    <div class="btn-group p-0 m-0">

      <a href="#" role="button"  class="btn  p-0" data-bs-toggle="dropdown" aria-expanded="false">
     
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
        </svg>
      </a>

     
      <ul class="dropdown-menu">


        {% for action in item %}
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
        this.htmlTemplate = (0, $3c9a2fa96e7a0162$export$b1e5508a851be14d)();
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    initObject() {
        this.propertyID = "potentialAction";
        super.initObject();
    }
    // -----------------------------------------------------
    //  Process action 
    // -----------------------------------------------------
    // -----------------------------------------------------
    //  Events 
    // -----------------------------------------------------
    connectedCallback() {
        this.initObject();
    }
}
customElements.define("kr-action-menu", $99a74800607e7f7b$export$d7e59d17540b14b);



class $d0e6389b231f00ae$export$61f029a88b5e2c25 extends (0, $6260eb9c6959f3a9$export$e08f919799ed3a88) {
    constructor(){
        super();
        // Override template
        this.setEventListenerClick();
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    // -----------------------------------------------------
    //  Set listener 
    // -----------------------------------------------------
    setEventListenerClick() {
        this.addEventListener("click", (event)=>{
            this.isClicked();
        });
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
    setRecord(value) {
        if (this?.thing?.record) this.thing.record.actionStatus = value;
    }
    setPotentialActionStatus() {
        this._value = "potentialActionStatus";
        this.setRecord("potentialActionStatus");
        this.contentElement.innerHTML = this.potentialActionStatusIcon();
    }
    setActiveActionStatus() {
        this._value = "activeActionStatus";
        this.setRecord("activeActionStatus");
        this.contentElement.innerHTML = this.activeActionStatusIcon();
    }
    setCompletedActionStatus() {
        this._value = "completedActionStatus";
        this.setRecord("completedActionStatus");
        this.contentElement.innerHTML = this.completedActionStatusIcon();
    }
    setFailedActionStatus() {
        this._value = "failedActionStatus";
        this.setRecord("failedActionStatus");
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
        
            {% for pair in item.itemListElement[0] %} 
                    {% assign key = pair[0] %} 
                    {% assign value = pair[1] %} 
                    
                    <th scope="col">{{ key }}</th>
            {% endfor %}
            
            </tr>
          </thead>

          
          <tbody>
        
        
            {% for record in item.itemListElement %}
                <tr>
            
                {% for pair in record %} 
                    {% assign key = pair[0] %} 
                    {% assign value = pair[1] %} 
        
        


                    {% if record[key][0]['@type']  %}

        
                        <td scope="col"><kr-avatar data-test="test1" data-record={{ record[key][0] | json }}> </kr-avatar></td>
                        
                  


                    {% elsif record[key]['@type']  %}


                        <td scope="col"><kr-avatar data-test="test1" data-record={{ record[key] | json }}> </kr-avatar></td>

                    {% else %}

                    
                        <td scope="col">{{record[key]}}</td>
                    
                    {% endif %}
        
                    
        
        
        
                {% endfor %}
        
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
    // -----------------------------------------------------
    //  Attr 
    // -----------------------------------------------------
    // -----------------------------------------------------
    //  Custom Element Events 
    // -----------------------------------------------------
    isClicked() {
        const event = new CustomEvent("kr-click", {
            detail: this.record
        });
        this.dispatchEvent(event);
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
customElements.define("kr-table", $c9792c3d0c357cf1$export$709c89605c2a432);



function $43f7c9b88194ea1f$export$345c5736c8054f22() {
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
        this.htmlTemplate = (0, $43f7c9b88194ea1f$export$345c5736c8054f22)();
        // 
        this._isSelected = false;
        this.setEventListenerDrag();
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



function $e116a4cddb4bfef5$export$5c452ff88e35e47d() {
    return `
    
    {% if item.contentUrl %}
        <div class=" me-2 bg-label-secondary">
            
            <img 
                class="img-fluid" 
                src="{{ item.contentUrl}}" 
                alt="{{ item.name }}"  
                onerror='this.style.display = "none"'
                >
        
        </div>


    {% elsif item.image %}
        <div class=" me-2 bg-label-secondary">
            
            <img
                class="rounded-2 img-fluid" 
                src="{{ item.image.contentUrl }}" 
                alt="{{ item.image.name }}" 
                onerror='this.style.display = "none"'
                >
        
        </div>


    {% endif %}

    `;
}


function $9a60740ab1b50031$export$e374bdb6c978dba2() {
    return `
    
    {% if item.contentUrl %}
        <div class=" me-2 rounded-2 bg-label-secondary">
            
            <img 
                class="rounded-2" 
                height="38px" 
                width="38px"
                src="{{ item.contentUrl}}" 
                alt="{{ item.name }}"  
                onerror='this.style.display = "none"'
                >
        
        </div>


    {% elsif item.image %}
            <div class=" me-2 rounded-2 bg-label-secondary">
                
                <img
                    class="rounded-2" 
                    height="38px" 
                    width="38px"
                    src="{{ item.image.contentUrl }}" 
                    alt="{{ item.image.name }}" 
                    onerror='this.style.display = "none"'
                    >
            
            </div>


    {% endif %}

    `;
}


function $524f51e1384d8491$export$4f2643accb7fda89() {
    return `
    
    {% if item.contentUrl %}
        <div class=" me-2 rounded-2 bg-label-secondary">
            
            <img 
                style="max-height:100px; max-width:100px; height:auto; width:auto;"
                src="{{ item.contentUrl}}" 
                alt="{{ item.name }}"  
                onerror='this.style.display = "none"'
                >
        
        </div>


    {% elsif item.image %}
        <div class=" me-2 rounded-2 bg-label-secondary">
            
            <img
                style="max-height:100px; max-width:100px; height:auto; width:auto;"
                src="{{ item.image.contentUrl }}" 
                alt="{{ item.image.name }}" 
                onerror='this.style.display = "none"'
                >
        
        </div>


    {% endif %}

    `;
}


function $c5ced9334b4362ed$export$8b3e21510c4d35a8() {
    return `
    
    {% if item.contentUrl %}
        <div class=" me-2 rounded-2 bg-label-secondary">
            
            <img 
                style="max-height:400px; max-width:400px; height:auto; width:auto;"
                src="{{ item.contentUrl}}" 
                alt="{{ item.name }}"  
                onerror='this.style.display = "none"'
                >
        
        </div>


    {% elsif item.image %}
        <div class=" me-2 rounded-2 bg-label-secondary">
            
            <img
                style="max-height:400px; max-width:400px; height:auto; width:auto;"
                src="{{ item.image.contentUrl }}" 
                alt="{{ item.image.name }}" 
                onerror='this.style.display = "none"'
                >
        
        </div>


    {% endif %}

    `;
}


function $2f0f3eb57fad99cf$export$1f6f1030f085bd6() {
    return `
    
    {% if item.contentUrl %}
        <div class="me-2 bg-label-secondary">
            
            <img 
                style="max-height:1200px; max-width:800px; height:auto; width:auto;"
                src="{{ item.contentUrl}}" 
                alt="{{ item.name }}"  
                onerror='this.style.display = "none"'
                >
        
        </div>


    {% elsif item.image %}
        <div class=" me-2 bg-label-secondary">
            
            <img
                style="max-height:1200px; max-width:800px; height:auto; width:auto;"
                src="{{ item.image.contentUrl }}" 
                alt="{{ item.image.name }}" 
                onerror='this.style.display = "none"'
                >
        
        </div>


    {% endif %}

    `;
}


class $80a3819c05b5f986$export$7a9e7b07acd55f8a extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        this.htmlTemplate = (0, $e116a4cddb4bfef5$export$5c452ff88e35e47d)();
    }
    async initObject() {
        await super.initObject();
    }
}
customElements.define("kr-image", $80a3819c05b5f986$export$7a9e7b07acd55f8a);
class $80a3819c05b5f986$export$b1785d3b1349d6c6 extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        this.htmlTemplate = (0, $9a60740ab1b50031$export$e374bdb6c978dba2)();
    }
    async initObject() {
        await super.initObject();
    }
}
customElements.define("kr-image-avatar", $80a3819c05b5f986$export$b1785d3b1349d6c6);
class $80a3819c05b5f986$export$c76d8adf7e09a74d extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        this.htmlTemplate = (0, $524f51e1384d8491$export$4f2643accb7fda89)();
    }
    async initObject() {
        await super.initObject();
    }
}
customElements.define("kr-image-sm", $80a3819c05b5f986$export$c76d8adf7e09a74d);
class $80a3819c05b5f986$export$1c543d8ae4367950 extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        this.htmlTemplate = (0, $c5ced9334b4362ed$export$8b3e21510c4d35a8)();
    }
    async initObject() {
        await super.initObject();
    }
}
customElements.define("kr-image-md", $80a3819c05b5f986$export$1c543d8ae4367950);
class $80a3819c05b5f986$export$584c9b86c5b95275 extends (0, $39f45085ee66ea88$export$b0d3c692106194fc) {
    constructor(){
        super();
        this.htmlTemplate = (0, $2f0f3eb57fad99cf$export$1f6f1030f085bd6)();
    }
    async initObject() {
        await super.initObject();
    }
}
customElements.define("kr-image-lg", $80a3819c05b5f986$export$584c9b86c5b95275);




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
    KrImage: (0, $80a3819c05b5f986$export$7a9e7b07acd55f8a),
    KrImageSm: (0, $80a3819c05b5f986$export$c76d8adf7e09a74d),
    KrImageMd: (0, $80a3819c05b5f986$export$1c543d8ae4367950),
    KrImageLg: (0, $80a3819c05b5f986$export$584c9b86c5b95275),
    KrImageAvatar: (0, $80a3819c05b5f986$export$b1785d3b1349d6c6),
    KrFormInput: (0, $edeae80b39d6ccb0$export$f9d1eda03b3fdf10),
    KrFormSm: (0, $abadb7053c2542a7$export$1224b350cb6b2979)
};


export {$cf838c15c8b009ba$export$f2dab6d0f1f79ab0 as KrElements};
//# sourceMappingURL=main.js.map
