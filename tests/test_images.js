import { KrElements } from '../src/index.js'

import { getSampleRecord } from '../src/sample_record.js'
import { getSampleRecords } from '../src/sample_record.js'

import { getAction } from '../src/sample_record.js'


import { KrThing, KrThings } from 'krakenthing'




export function test_images(testNo) {

    let record = {
        "@type": "Person",
        "@id": "p1",
        "name": "John Smith",
        "description": "Software analyst",
        "image": {
            "@type": "ImageObject",
            "@id": "imgid1",
            "contentUrl": `./kraken.png`
        }
    }

    let t = new KrThing()
    t.record = record
    console.log('t', t.record)
    let d = document.getElementById(testNo)
    let a



    a = document.createElement('kr-image-avatar')
    a.thing = t


    d.appendChild(a)


    a = document.createElement('kr-image-sm')
    a.thing = t
    d.appendChild(a)

    a = document.createElement('kr-image-md')
    a.thing = t
    d.appendChild(a)


     a = document.createElement('kr-image-lg')
    a.thing = t
    d.appendChild(a)

     a = document.createElement('kr-image')
    a.thing = t
    d.appendChild(a)

}