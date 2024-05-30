import { KrElements } from '../src/index.js'




import { getSampleRecord } from '../src/sample_record.js'
import { getSampleRecords } from '../src/sample_record.js'

import { getAction } from '../src/sample_record.js'


import { KrThing, KrThings } from 'krakenthing'




export function test_table(testNo) {


    let record = {
        "@type": "ItemList",
        "@id": "ItemList1",
        "name": "ItemList1",
        "itemListElement": [
            {
                "@type": "Thing",
                "@id": "t1",
                "name": "name1",
                "url": "url1",
                "parent": {
                    "@type": "Thing",
                    "@id": "t11",
                    "name": "name11"
                },
                "potentialAction":[
                    {
                        "@type": "deleteAction",
                        "@id": "someid11",
                        "name": "delete"
                    },
                    {
                        "@type": "deleteAction",
                        "@id": "someid12",
                        "name": "delete"
                    }
                ]
            },
            {
                "@type": "Thing",
                "@id": "t2",
                "name": "name1",
                "url": "url1",
                "parent": {
                    "@type": "Thing",
                    "@id": "t21",
                    "name": "name11",
                    "image": {
                        "@type": "ImageObject",
                        "@id": "img1",
                        "contentUrl": "./kraken.png"
                    }
                },
                "potentialAction":[
                    {
                        "@type": "deleteAction",
                        "@id": "someid13",
                        "name": "delete"
                    },
                    {
                        "@type": "deleteAction",
                        "@id": "someid22",
                        "name": "delete"
                    }
                ]
            },
            {
                "@type": "Thing",
                "@id": "t3",
                "name": "name1",
                "url": "url1",
                "parent": {
                    "@type": "Thing",
                    "@id": "t31",
                    "name": "name11"
                },
                "potentialAction":[
                    {
                        "@type": "deleteAction",
                        "@id": "someid33",
                        "name": "delete"
                    },
                    {
                        "@type": "deleteAction",
                        "@id": "someid34",
                        "name": "delete"
                    }
                ]
            }
        ]
    }

    let k = new KrThing()
    k.record = record

    let table = document.createElement('kr-table')
    table.thing = k


    table.keys = ['name', 'url']
    table.headers = ['nom', 'lien']
    
    let d = document.getElementById(testNo)
    d.appendChild(table)

}