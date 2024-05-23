





export function getSampleRecords(qty=10){

    let records = []
    for(let i=0; i< qty; i++){
        records.push(getSampleRecord(i))
    }
    return records
}

export function getSampleRecord(recordId=1){

    let record = {
        "@type": "Thing",
        "@id": "id_" + String(recordId),
        "name": "name_" + String(recordId),
        "url": "https://www.url.com/" + String(recordId),
        "image": {
            "@type": "imageObject",
            "contentUrl": "./kraken.png"
        },
        "parent": [{
                "@type": "Thing",
                "@id": "idParent1_" + String(recordId),
                "name": "parentName1",
                "image": {
                    "@type": "imageObject",
                    "contentUrl": "./kraken.png"
                }
            }],
        "children": [
            {
                "@type": "Thing",
                "@id": "idChild1_" + String(recordId),
                "name": "childName1",
                "image": {
                    "@type": "imageObject",
                    "contentUrl": "./kraken.png"
                }
            },
            {
                "@type": "Thing",
                "@id": "idChild2_" + String(recordId),
                "name": "childName2",
                "image": {
                    "@type": "imageObject",
                    "contentUrl": "./kraken.png"
                }
            }
        ]
    }

    return record
        
}




export function getActions(qty=10){

    let records = []
    for(let i=0; i< qty; i++){
        records.push(getAction(i))
    }
    return records
}


export function getAction(recordId=1){

    let record = {
        "@type": "Action",
        "@id": "id_" + String(recordId),
        "name": "ActionName_" + String(recordId),
        "url": "https://www.url1.com/" + String(recordId),
        "image": {
            "@type": "imageObject",
            "contentUrl": "./icons/test.svg"
        }
    }
    return record
}