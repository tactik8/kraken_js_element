import { KrElements } from '../src/index.js'

import { getSampleRecord } from '../src/sample_record.js'
import { getSampleRecords } from '../src/sample_record.js'

import { getAction } from '../src/sample_record.js'


import { KrThing, KrThings } from 'krakenthing'




export function test_avatar(testNo) {

    
    let record = {
        "@type": "Person",
        "@id": "p1",
        "name": "John Smith",
        "description": "Software analyst",
        "image": {
            "@type": "imageObject",
            "contentUrl": "./kraken.png"
        }
    }

    let a = document.createElement('kr-avatar')
    a.thing = record
    //a.record = record


    let d = document.getElementById(testNo)


    
    d.appendChild(a)

}