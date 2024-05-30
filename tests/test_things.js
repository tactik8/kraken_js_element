import { KrElements } from "../src/index.js";

import { getSampleRecord } from "../src/sample_record.js";
import { getSampleRecords } from "../src/sample_record.js";

import { getAction } from "../src/sample_record.js";

import { KrThing, KrThings } from "krakenthing";

export function test_things(testNo) {

    let record = {
        "@type": "ItemList",
        "@id": "Itemlist1",
        name: "Itemlist1",
        itemListElement: getSampleRecords(10)
    }



    let things = new KrThings()
    things.record = record

    console.log(JSON.stringify(things.record, null, 4))

    
    let a = document.createElement("kr-things")
    a.thing = record

    
    //a.record = record

    let d = document.getElementById(testNo)

    d.appendChild(a)
}
