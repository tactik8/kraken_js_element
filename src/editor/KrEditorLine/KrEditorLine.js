import { KrThingElement } from "../../baseElements/KrThingElement/KrThingElement.js";

import { KrThingsElement } from "../../baseElements/KrThingsElement/KrThingsElement.js";

import { template } from "./template/template.js";

import { extractFromText } from '../../extractFromText/extractFromText.js'


var CURSORPOSITION = null;
var ITEMPOSITION = null;

export class KrEditorLine extends KrThingElement {
    constructor() {
        super();

        // Override template
        this.htmlTemplate = template();

        //
        this._isSelected = false;
        this._level = 0;
        this._tabSpacing = 40;
        this._oldRecord = null
        this._oldValue = null
        this._oldValueObjects = []

        this._isInitialized = false
        
        
    }

    // -----------------------------------------------------
    //  Init
    // -----------------------------------------------------

    async initObject() {
        //
        if (this._isInitialized == false){
           
            this.config.best = this.thing.getBestRecord()
            this.classList.add("kr-editor-line");
            this._isInitialized = true
            await super.initObject();
            
        }
        
        this.refreshElement();
        this.setKeydownListeners();
        this.startObserver();
    }

    refreshElement() {

        if(!this.thing || this.thing == null) { return }

        let level = this.thing.getProperty('level').value
        //if(!level ){
        //    this.thing.replaceProperty('level', null, 0)
        //}

        
        if(this._oldRecord == this.thing?.getBestRecord()){
            return 
        }
        this._oldRecord = this.thing.getBestRecord()
       
        if (this.inputField) {
            this.refreshAll()
        }
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

        if(text && text != null){
            text = text.trim()
        }
        
        return text;
    }

    set text(value) {
      
        this.thing.replaceProperty('text', null, value)
        this.inputField.textContent = value;
    }

    get previousLine() {
        return (
            this.listItemElement?.previousItem?.querySelector(
                ".kr-editor-line",
            ) || null
        );
    }

    get nextLine() {
        
        return (
            this.listItemElement?.nextItem?.querySelector(
                ".kr-editor-line",
            ) || null
        );
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

    get linearThingsSection(){

        return this.querySelector(".kr-linear-things-section");
    }

    
    // -----------------------------------------------------
    //  Focus
    // -----------------------------------------------------

    focusPreviousLine() {
        let cursorPosition = this.cursorPosition;
        if (this.previousLine) {
            this.previousLine.setFocus()
            this.previousLine.cursorPosition = cursorPosition;
        }
    }

    focusNextLine() {
        let cursorPosition = this.cursorPosition;
        if (this.nextLine) {
            this.nextLine.setFocus()
            this.nextLine.cursorPosition = cursorPosition;
        }
    }

    // -----------------------------------------------------
    //  Line selection
    // -----------------------------------------------------

    get parentLine() {
        let item = this;
        while (item) {
            if (item.level < this.level) {
                return item;
            }
            item = item.previousLine;
        }
        return null;
    }

    get childrenLines() {
        let childrenLines = [];

        let item = this.nextLine;
        while (item) {
            if (item.level > this.level) {
                if(item.level == this.level + 1){
                    childrenLines.push(item);
                }
                item = item.nextLine;
            } else {
                return childrenLines;
            }
        }
        return childrenLines;
    }

    // -----------------------------------------------------
    //  Level
    // -----------------------------------------------------

    get level() {
        let level = this.thing.getProperty("level").value || 0;
    
        return level
    }

    set level(value) {

        if(this.level == value){ return }
        this.thing.replaceProperty("level", null, value);
        this.style.paddingLeft = String(value * this._tabSpacing) + "px";
    }

    incrementLevel() {
        
        let childrenLines = this.childrenLines;
        
        if (this.previousLine && this.level <= this.previousLine.level) {
            this.level = this.level + 1;
            if(childrenLines && childrenLines != null){
                for (let c of childrenLines) {
                    
                    c.incrementLevel();
                }
            }
        }
        this.refreshElement()
    }

    decrementLevel() {
        let childrenLines = this.childrenLines;
        if (this.level > 0) {
            this.level = this.level - 1;
            if(childrenLines && childrenLines != null){
                for (let c of childrenLines) {
                    c.decrementLevel();
                }
            }
        }
        this.refreshElement()
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

        CURSORPOSITION = cursorPosition;
        return cursorPosition;
    }

    set cursorPosition(value) {
        if (this.inputField.childNodes.length == 0) {
            value = 0;
        } else if (this.inputField.childNodes[0] == null) {
            value = 0;
        } else if (this.inputField.childNodes[0].length < value) {
            value = this.inputField.childNodes[0].length;
        }

        if (value == -1) {
            value = this.inputField.childNodes[0].length;
        }

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


        
        let text = this.text
        if(this.thing.getProperty('text').value == this.text){ return }

        // Handle json

        let isJson = false
        if(text.startsWith('[') || text.startsWith('{')){
            isJson = this.processJson(text)
        } else {
        }

        
        
        this.thing.replaceProperty('text', null, this.text)
        this.refreshProperty();
        this.refreshValue();
        this.refreshLinearThing()
    }


    processJson(text){
        
        try{
            let jsonContent = JSON.parse(text)
            jsonContent = ensureArray(jsonContent)

            let level = this.level
            if(!level || level == null){ level = 0 }
            
            let line = this
            for(let record of jsonContent){

                for(let k of Object.keys(record)){
                    let content = k + ': ' + record[k]
                    line = line.addLine(content, level + 1)
                }
            }
            return true
        } catch(error) {
            return false
        }
        
    }


    
    refreshAll() {
        //this.refreshLineno();
        this.refreshProperty();
        this.refreshValue();
        this.refreshLevel();
        this.refreshLinearThing()
    }

    refreshLineno() {
        if (this.linenoElement.textContent != String(this.lineno)) {
            this.linenoElement.textContent = String(this.lineno);
            if (this.nextElementSibling) {
                this.nextElementSibling.lineno;
            }
        }
    }

    refreshProperty() {
        this.propertyElement.textContent = this.property;
    }

    refreshValue() {
        this.valueElement.textContent = this.value;
        
    }

    refreshLevel() {
        let level = this.thing.getProperty('level').value || 0
        this.level = level
        this.levelElement.textContent = level
    }

    refreshLinearThing(){

        
        let section = this.linearThingsSection

        if(!section || section == null){
            return
        }

        
        //section.innerHTML = null

        let values = this.valueObjects
        if(!values || values == null){ return }

        /*
        for(let v of values){
            let newElement = document.createElement('kr-linear-thing')
            
            
            section.appendChild(newElement)
            newElement.thing = v
            newElement.refreshElement()
        }
        */
    }

    get property(){

          if(this.text && this.text != null && this.text.includes(':')){
               return this.text.split(':')[0] 
          }

          if(this.parentLine){
               return this.parentLine.property
          }

          if(this._isHeadline){
               return 'headline'
          }

          return 'text'

     }

     get isProperty(){
          // returns true if property field

          if(this.text.endsWith(':')){
               return true
          }
          return false

     }

     get value(){

         let text = this.text
         
         if(!text || text == null) { return null }

         
         if(!text.includes(':')){ return text }

         let parts = text.split(':')

         if(parts.length > 1 ){
             return parts[1]
         }

         return null
         
           
     }

    get valueObjects(){

        if(this.text == this._oldValue) { return this._oldValueObjects }

        this._oldValue = this.text
        let value = extractFromText(this.text)
        
        this._oldValueObjects = value
        this.thing.replaceProperty('hasPart', null, value)


        
        return this._oldValueObjects
        
     }
    

     get isValue(){

          if(this.text.endsWith(':')){
               return false
          } else {
               return true
          }

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
            level: level,
        };

        let newItem = await this.listItemElement.thingElement.insertAfterItemElement(
                this.listItemElement,
                record
            );

        let newLine = newItem.querySelector('.kr-editor-line')
        
        return newLine

        
       //return itemElement

    }

    async splitLine(cursorPosition = null) {
        if (cursorPosition == null) {
                cursorPosition = this.cursorPosition;
        }

        // Deal with items

        if (this.text && this.text.startsWith("-")) {
            let nextLevel = this.level;
            if (
                this.previousElementSibling &&
                this.previousElementSibling.level <= this.level
            ) {
                this.incrementLevel();
            }

            let newLine2;

            let newLine1 = this.addLine(this.text.substring(1), this.level + 1);

            if (
                newLine1.text &&
                newLine1.text.length > 0 &&
                newLine1.text != " "
            ) {
                newLine2 = newLine1.splitLine(cursorPosition - 1);
            } else {
                newLine2 = newLine1;
            }

            this.text = "-";

            return newLine2;
        }

        
        
        let leftContent = this.text?.substring(0, cursorPosition) || null;
        
        let rightContent = this.text?.substring(cursorPosition) || null;


        this.text = leftContent;


        let newLevel = this.level;
        if (this.text && this.text.endsWith(":")) {
            newLevel = newLevel + 1;
        }

        
        let newLine = await this.addLine(rightContent, newLevel)
      

        newLine.setFocus()
        return newLine
            
        

       
    }

    mergeLine() {
        if (!this.previousElementSibling) {
            return;
        }

        let position = this.previousElementSibling.text.length;

        if (this.text) {
            this.previousElementSibling.text += " " + this.text;
        }

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
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type == "characterData") {
                    debounce(element.processContentChange());
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

    // -----------------------------------------------------
    //  Content listener
    // -----------------------------------------------------

    setKeydownListeners() {
        this.addEventListener("keydown", (event) => {

            
            if (event.key == "Enter") {
                event.preventDefault();
                event.stopPropagation();
                debounce_leading(this.splitLine())
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
                debounce_leading(this.incrementLevel());
            }
            if (event.shiftKey == true && event.key == "Tab") {
                event.preventDefault();
                event.stopPropagation();
                debounce_leading(this.decrementLevel());
            }

            if (event.key == "Backspace" && this.cursorPosition == 0) {
                event.preventDefault();
                event.stopPropagation();
                debounce_leading(this.mergeLine());
            }

            if (event.ctrlKey == true && event.key == "b") {
                event.preventDefault();
                event.stopPropagation();
                this.toggleHeadline();
               
            }

            
        });
    }
}

customElements.define("kr-editor-line", KrEditorLine);

function createRange(node, chars, range) {
    if (!range) {
        range = document.createRange();
        range.selectNode(node);
        range.setStart(node, 0);
    }

    if (chars.count === 0) {
        range.setEnd(node, chars.count);
    } else if (node && chars.count > 0) {
        if (node.nodeType === Node.TEXT_NODE) {
            if (node.textContent.length < chars.count) {
                chars.count -= node.textContent.length;
            } else {
                range.setEnd(node, chars.count);
                chars.count = 0;
            }
        } else {
            for (var lp = 0; lp < node.childNodes.length; lp++) {
                range = createRange(node.childNodes[lp], chars, range);

                if (chars.count === 0) {
                    break;
                }
            }
        }
    }

    return range;
}

function isChildOf(node, parentId) {
    while (node !== null) {
        if (node.id === parentId) {
            return true;
        }
        node = node.parentNode;
    }

    return false;
}

function getCurrentCursorPosition(parentId) {
    var selection = window.getSelection(),
        charCount = -1,
        node;

    if (selection.focusNode) {
        if (isChildOf(selection.focusNode, parentId)) {
            node = selection.focusNode;
            charCount = selection.focusOffset;

            while (node) {
                if (node.id === parentId) {
                    break;
                }

                if (node.previousSibling) {
                    node = node.previousSibling;
                    charCount += node.textContent.length;
                } else {
                    node = node.parentNode;
                    if (node === null) {
                        break;
                    }
                }
            }
        }
    }

    return charCount;
}

function getDirectChilds(element, className) {
    // returns direct childs, not grandchilds
    let results = [];

    for (let child of element.children) {
        if (child.classList && child.classList.contains(className)) {
            results.push(child);
        } else {
            results = results.concat(getDirectChilds(child, className));
        }
    }
    return results;
}

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}

function debounce_leading(func, timeout = 300){
  let timer;
  return (...args) => {
    if (!timer) {
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
}




function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}



function waitForElement(condition, callback) {
    let result = condition
  if (result && result != null ) {
    callback();
  } else {
    setTimeout(() => waitForElement(selector, callback), 500);
  }
}