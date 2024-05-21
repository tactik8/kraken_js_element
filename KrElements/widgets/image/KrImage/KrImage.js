
import { KrThingElement } from '../../../baseElements/KrThingElement/KrThingElement.js'

import { image } from './template/image.js'
import { imageAvatar } from './template/imageAvatar.js'
import { imageSm } from './template/imageSm.js'
import { imageMd } from './template/imageMd.js'
import { imageLg } from './template/imageLg.js'



// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------


export class KrImage extends KrThingElement {
    constructor() {
        super();

        this.htmlTemplate = image()

    }

    async initObject() {

        await super.initObject()

    }
}
customElements.define("kr-image", KrImage);


// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------


export class KrImageAvatar extends KrThingElement {
    constructor() {
        super();

        this.htmlTemplate = imageAvatar()

    }

    async initObject() {

        await super.initObject()

    }
}
customElements.define("kr-image-avatar", KrImageAvatar);


// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------


export class KrImageSm extends KrThingElement {
    constructor() {
        super();

        this.htmlTemplate = imageSm()

    }

    async initObject() {

        await super.initObject()

    }
}
customElements.define("kr-image-sm", KrImageSm);


// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------


export class KrImageMd extends KrThingElement {
    constructor() {
        super();

        this.htmlTemplate = imageMd()

    }

    async initObject() {

        await super.initObject()

    }
}
customElements.define("kr-image-md", KrImageMd);



// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------


export class KrImageLg extends KrThingElement {
    constructor() {
        super();

        this.htmlTemplate = imageLg()

    }

    async initObject() {

        await super.initObject()

    }
}
customElements.define("kr-image-lg", KrImageLg);