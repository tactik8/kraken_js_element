


import { KrThingElement } from '../../baseElements/KrThingElement/KrThingElement.js'

import { template } from './template/template.js'


export class KrArticleContentElement extends KrThingElement {
    constructor() {
        super();

        // Set html template
        this.htmlTemplate = template()
        this._level = null

    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async initObject() {

        // Configuration prior to generation
        this.config.level = this.level

        // Generation
        await super.initObject()


        // Configuration after generation


    }

    // -----------------------------------------------------
    //  Other attributes 
    // -----------------------------------------------------

    get level(){

        if(this._level && this._level != null){
            return this._level
        }

        if(!this._level || this._level == null){
            let l = this.getAttribute('data-level')
            if(l && l!= null){
                this._level = Number(l)
            }
        }

        if(!this._level || this._level == null){
            return 1
        }

        return this._level
        
    }
    

}

customElements.define("kr-article-content", KrArticleContentElement);