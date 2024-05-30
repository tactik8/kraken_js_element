
import { KrThingElement } from '../../baseElements/KrThingElement/KrThingElement.js'

import { template } from './template/template.js'



// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------


export class KrImage extends KrThingElement {
    constructor() {
        super();

        this.htmlTemplate = template()

    }

    async initObject() {

        await super.initObject()

    }
}
customElements.define("kr-image", KrImage);


// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------


export class KrImageAvatar extends KrImage {
    constructor() {
        super();

        

    }

    async initObject() {

        this.config.size = "xs"
        await super.initObject()

    }
}
customElements.define("kr-image-avatar", KrImageAvatar);


// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------


export class KrImageSm extends KrImage {
    constructor() {
        super();

      

    }

    async initObject() {
        this.config.size = "sm"
        await super.initObject()

    }
}
customElements.define("kr-image-sm", KrImageSm);


// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------


export class KrImageMd extends KrImage {
    constructor() {
        super();
       

    }

    async initObject() {

         this.config.size = "md"

        await super.initObject()

    }
}
customElements.define("kr-image-md", KrImageMd);



// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------


export class KrImageLg extends KrImage {
    constructor() {
        super();
        
      

    }

    async initObject() {
        this.config.size = "lg"
        await super.initObject()

    }
}
customElements.define("kr-image-lg", KrImageLg);


export class KrImageXs extends KrImage {
    constructor() {
        super();

    }

    async initObject() {
        this.config.size = "xs"
        await super.initObject()

    }
}
customElements.define("kr-image-xs", KrImageXs);