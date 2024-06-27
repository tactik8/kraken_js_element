import { KrElements } from "../src/index.js";

import { getSampleRecord } from "../src/sample_record.js";
import { getSampleRecords } from "../src/sample_record.js";

import { getAction } from "../src/sample_record.js";

import { KrThing, KrThings } from "krakenthing";

export function test_eventListener(testNo) {

    let record = {
        "@type": "Thing",
        "@id": "Thing",
        name: "Thing1"
    }



    let thing = new KrThing()
    thing.record = record

    thing.addEventListener('all', event =>{
        console.log('event from thing', event)
    })
    
    let a = document.createElement("kr-card")
    a.thing = thing

    
    //a.record = record

    let d = document.getElementById(testNo)

    d.appendChild(a)


    thing.setProperty('name', 'Thing1new')
}
