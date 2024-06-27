import { KrElements } from "../src/index.js";

import { getSampleRecord } from "../src/sample_record.js";
import { getSampleRecords } from "../src/sample_record.js";

import { getAction } from "../src/sample_record.js";

import { KrThing, KrThings } from "krakenthing";

export function test_editor(testNo) {

    let record = {
        "@type": "ItemList",
        "@id": "Itemlist1",
        name: "Itemlist1",
        itemListElement: [
            {
                "@type": "DigitalDocument",
                "@id": "dig1",
                "name": "name1",
                "headline": "test headline 1",
                "text": "text 1"
            },
            {
                "@type": "DigitalDocument",
                "@id": "dig2",
                "name": "name2",
                "headline": "test headline 2",
                "text": "text 2"
            },
            {
                "@type": "DigitalDocument",
                "@id": "dig3",
                "name": "name3",
                "headline": "test headline 3",
                "text": "text 3"
            },
            {
                "@type": "DigitalDocument",
                "@id": "dig4",
                "name": "name4",
                "headline": "test headline 4",
                "text": "text 4"
            }  
        ]
    }


    let a = document.createElement("kr-editor")
    a.thing = record
    //a.elementTemplate = 'kr-editor-line'
    
    //a.recordTemplate = {
    //    "@type": "DigitalDocument",
     //   "headline": "new headline",
    //    "text": "new text"
    //}
    //a.record = record

    let d = document.getElementById(testNo)

    d.appendChild(a)
}
