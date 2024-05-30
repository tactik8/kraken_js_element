import { KrElements } from "../src/index.js";

import { getSampleRecord } from "../src/sample_record.js";
import { getSampleRecords } from "../src/sample_record.js";

import { getAction } from "../src/sample_record.js";

import { KrThing, KrThings } from "krakenthing";



function headline(){

    return ` - Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
}
function text(){

    return ` - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
}


export function test_article(testNo) {
    
    let record = {
        "@type": "digitalDocument",
        "@id": "id1",
        name: "name1",
        headline: "Headline1" + headline(),
        text:  "text 1" + text(),
        image: {
            "@type": "imageObject",
            "@id": "img1",
            "contentUrl": "./kraken.png"
        },
        hasPart: [
            {
                "@type": "digitalDocument",
                "@id": "id11",
                name: "name11",
                headline: "Headline11"+ headline(),
                text: "text 11"+ text(),
                image: {
                    "@type": "imageObject",
                    "@id": "img1",
                    "contentUrl": "./kraken.png"
                },
                hasPart: [
                    {
                        "@type": "digitalDocument",
                        "@id": "id111",
                        name: "name111",
                        image: {
                            "@type": "imageObject",
                            "@id": "img1",
                            "contentUrl": "./kraken.png"
                        },
                        headline: "Headline111"+ headline(),
                        text: "text 111"+ text()
                    },
                    {
                        "@type": "digitalDocument",
                        "@id": "id112",
                        name: "name112",
                        image: {
                            "@type": "imageObject",
                            "@id": "img1",
                            "contentUrl": "./kraken.png"
                        },
                        headline: "Headline112"+ headline(),
                        text: "text 112"+ text()
                    }
                ]
            },
            {
                "@type": "digitalDocument",
                "@id": "id12",
                name: "name12",
                headline: "Headline12"+ headline(),
                text: "text 12"+ text(),
                image: {
                    "@type": "imageObject",
                    "@id": "img1",
                    "contentUrl": "./kraken.png"
                },
                hasPart: [
                    {
                        "@type": "digitalDocument",
                        "@id": "id121",
                        name: "name121",
                        image: {
                            "@type": "imageObject",
                            "@id": "img1",
                            "contentUrl": "./kraken.png"
                        },
                        headline: "Headline121"+ headline(),
                        text: "text 121"+ text()
                    },
                    {
                        "@type": "digitalDocument",
                        "@id": "id122",
                        name: "name122",
                        image: {
                            "@type": "imageObject",
                            "@id": "img1",
                            "contentUrl": "./kraken.png"
                        },
                        headline: "Headline122"+ headline(),
                        text: "text 122" + text()
                    }
                ]
            }
        ]
    }


    let a = document.createElement('kr-article')
    a.thing = record

    let d = document.getElementById(testNo)
    
    
    d.appendChild(a)


    
    
 

    
}
