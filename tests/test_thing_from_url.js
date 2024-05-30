import { KrElements } from "../src/index.js";

import { getSampleRecord } from "../src/sample_record.js";
import { getSampleRecords } from "../src/sample_record.js";

import { getAction } from "../src/sample_record.js";

import { KrThing, KrThings } from "krakenthing";

export function test_thing_from_url(testNo) {
    
    let record = {
        "@type": "Thing",
        "@id": "id1",
        name: "WebsiteName",
        url: "https://www.test.com/"
        }

    let d = document.getElementById(testNo)

    
    let a = document.createElement("kr-card")
    a.thing = record
    d.appendChild(a)
    
    let b = document.createElement("kr-card")
    
    d.appendChild(b)

    
}
