import { KrElements } from "../src/index.js";

import { getSampleRecord } from "../src/sample_record.js";
import { getSampleRecords } from "../src/sample_record.js";

import { getAction } from "../src/sample_record.js";

import { KrThing, KrThings } from "krakenthing";

export function test_header(testNo) {
    
    let record = {
        "@type": "WebSite",
        "@id": "id1",
        name: "WebsiteName",
        hasPart: [
            {
                "@type": "WPHeader",
                "@id": "Header1",
                name: "header",
                hasPart: [
                    {
                        "@type": "WebPage",
                        "@id": "WebPage1",
                        name: "Webpage1",
                        url: "/webpage1"
                    },
                    {
                        "@type": "WebPage",
                        "@id": "WebPage2",
                        name: "Webpage2",
                        url: "/webpage2"
                    },
                    {
                        "@type": "WebPage",
                        "@id": "WebPage3",
                        name: "Webpage3",
                        url: "/webpage3"
                    },
                    {
                        "@type": "WebPage",
                        "@id": "WebPage4",
                        name: "Webpage4",
                        url: "/webpage4"
                    }
                ]
            },
            {
                "@type": "WPFooter",
                "@id": "Footer1",
                name: "Footer",
                hasPart: [
                    {
                        "@type": "WebPage",
                        "@id": "WebPage1",
                        name: "Webpage1",
                        url: "/webpage1"
                    },
                    {
                        "@type": "WebPage",
                        "@id": "WebPage2",
                        name: "Webpage2",
                        url: "/webpage2"
                    },
                    {
                        "@type": "WebPage",
                        "@id": "WebPage3",
                        name: "Webpage3",
                        url: "/webpage3"
                    },
                    {
                        "@type": "WebPage",
                        "@id": "WebPage4",
                        name: "Webpage4",
                        url: "/webpage4"
                    }
                ]
            }
        ]
    }

    let a = document.createElement("kr-header")
    a.thing = record
    //a.record = record

    let d = document.getElementById(testNo)

    d.appendChild(a)
}
