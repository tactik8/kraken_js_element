import { KrElements } from './src/index.js'




import { getSampleRecord } from './src/sample_record.js'
import { getSampleRecords } from './src/sample_record.js'

import { getAction } from './src/sample_record.js'


import { KrThing, KrThings } from 'krakenthing'



import { tests } from './src/baseElements/KrThingElement/tests/KrThingElement.test.js'

function runTests(){

    tests()
    
}
runTests()


function test1() {

    // Test 1

    let d1 = document.getElementById('test2')
    let kr1 = document.querySelector('kr-thing')
    kr1.record = getSampleRecord()
}

function test2() {
    // Test 2

    let r = {
        "@type": "ListItem",
        "@id": "id2",
        "position": 3,
        "item": getSampleRecord()
    }

    let itemList = document.createElement('kr-list-item')
    itemList.itemTemplate = 'kr-thing'
    itemList.record = r

    let d2 = document.getElementById('test2')
    d2.appendChild(itemList)
}


function test3() {
    // Test 3

    let record = {
        "@type": "ItemList",
        "@id": "ItemList1",
        "name": "ItemList1",
        "itemListElement": getSampleRecords(10)
    }

    let things = document.createElement('kr-things')
    things.listItemTemplate = 'kr-list-item'
    things.listItem_itemTemplate = 'kr-thing'
    things.record = record

    let d3 = document.getElementById('test3')
    d3.appendChild(things)
}



function test4() {


    // Test 4

    let d4 = document.getElementById('test4')
    let kr4 = document.querySelector('kr-action')
    kr4.record = getAction()
}



function test5() {
    // Test 3



    // Generate list portion
    let record = {
        "@type": "ItemList",
        "@id": "ItemList1",
        "name": "ItemList1",
        "itemListElement": getSampleRecords(10)
    }

    let things = document.createElement('kr-things')
    things.listItemTemplate = 'kr-list-item'
    things.listItem_itemTemplate = 'kr-thing'
    things.listItemRecordTemplate = getSampleRecord()
    things.record = record

    let d3 = document.getElementById('test5.1')
    d3.appendChild(things)


    // Generate record portion
    let t = document.createElement('kr-thing')
    t.setTemplate('record')

    things.addEventListener('kr-click', event => {

        //console.log('a', event, event.detail)
        t.record = event.detail

    })

    let d5_2 = document.getElementById('test5.2')
    d5_2.appendChild(t)



    //
    let record2 = {
        "@type": "ItemList",
        "@id": "ItemList2",
        "name": "ItemList2",
        "itemListElement": []
    }
    let things2 = document.createElement('kr-things')
    things2.listItemTemplate = 'kr-list-item'
    things2.listItem_itemTemplate = 'kr-thing'
    things2.record = record2
    things2.listItemRecordTemplate = getSampleRecord()
    let d6 = document.getElementById('test5.3')
    d6.appendChild(things2)

}
function test6() {


    // Test 4


    let v = document.cr

    let d6 = document.getElementById('test6')
    d6.appendChild(things)

}

function test7() {


    // Test 7

    let record = {
        "@type": "ItemList",
        "@id": "ItemList1",
        "name": "ItemList1",
        "itemListElement": getSampleRecords(10)
    }

    let table = document.createElement('kr-table')
    table.record = record

    let d7 = document.getElementById('test7')
    d7.appendChild(table)

}

function test8() {


    // Test 8

    let record = {
        "@type": "action",
        "@id": "action",
        "name": "ItemList1",
        "actionStatus": ""
    }

    let a = document.createElement('kr-action-status')
    //a.record=record


    let d8 = document.getElementById('test8')
    //d8.appendChild(a)

    let t = document.createElement('kr-thing')


    t.appendChild(a)


    t.setTemplate('record')
    t.record = record
    d8.appendChild(t)

}

function test9() {

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
    a.record = record


    let d = document.getElementById('test9')
    d.appendChild(a)


}




function test10() {

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

    let d = document.getElementById('test10')

    let a


    
    a = document.createElement('kr-image-avatar')
    a.record = record
    d.appendChild(a)


    a = document.createElement('kr-image-sm')
    a.record = record
    d.appendChild(a)
    
    a = document.createElement('kr-image-md')
    a.record = record
    d.appendChild(a)


     a = document.createElement('kr-image-lg')
    a.record = record
    d.appendChild(a)

     a = document.createElement('kr-image')
    a.record = record
    d.appendChild(a)


}



function test11() {

    let record = {
        "@type": 'name',
        "@id": String(crypto.randomUUID()),
        "name":  'name',
        "image": {"@type": "ImageObject", "contentUrl": 'test'},
        "object": null,
        "url": "",
        "actionStatus": "potentialActionStatus",
        "target": '',
    }

    let k = new KrThing()
    k.record = record
    console.log(k.record)

}


function test12Setup(){

    // Generate list portion
    let record = {
        "@type": "ItemList",
        "@id": "ItemList12_3",
        "name": "ItemList12_3",
        "itemListElement": getSampleRecords(10)
    }

  
    let things = new KrThings("ItemList", "ItemList12_3")
    things.record = record


    console.log('start', things.getSystemRecord())

    
    things.api_post().then(result => {

        let things2 = new KrThings("ItemList", "ItemList12_3")
        things2.api_get().then( result =>

            console.log('vv', things2.getSystemRecord())
        )
    }
    )
    
}


//test12Setup()


function test12() {


    // Generate list portion
    

    let things = new KrThings("ItemList", "ItemList12_3")
    things.api_get().then( result => {

        console.log('r', things.record)
          let thingsElement = document.createElement('kr-things')
          thingsElement.listItemTemplate = 'kr-list-item'
          thingsElement.listItem_itemTemplate = 'kr-thing'
          thingsElement.listItemRecordTemplate = getSampleRecord()
          thingsElement.thing = things
          thingsElement.initObject()

          let d3 = document.getElementById('test12.1')
          d3.appendChild(thingsElement)




        // Generate record portion
        let t = document.createElement('kr-form-sm')
        //t.setTemplate('record')

        thingsElement.addEventListener('kr-click', event => {

            console.log('a', event, event.detail)
            t.record = event.detail.item

        })

        let d5_2 = document.getElementById('test12.2')
        d5_2.appendChild(t)








        
    })


    

    return
    //
    let record2 = {
        "@type": "ItemList",
        "@id": "ItemList2",
        "name": "ItemList2",
        "itemListElement": []
    }
    let things2 = document.createElement('kr-things')
    things2.listItemTemplate = 'kr-list-item'
    things2.listItem_itemTemplate = 'kr-thing'
    things2.record = record2
    things2.listItemRecordTemplate = getSampleRecord()
    let d6 = document.getElementById('test5.3')
    d6.appendChild(things2)


}



function test13() {

    let record = {
        "@type": "action",
        "@id": "action",
        "name": "ItemList1",
        "actionStatus": ""
    }

    let a = document.createElement('kr-value-ref')
    a.record = record


    let d = document.getElementById('test13')
    d.appendChild(a)


}



function test14() {

    let record = {
        "@type": "action",
        "@id": "action",
        "name": "ItemList1",
        "actionStatus": ""
    }

    let a = document.createElement('kr-value-ref')
    a.record = record


    let d = document.getElementById('test14')
    d.appendChild(a)


}



function test15() {

    let things = new KrThings("ItemList", "ItemList12_3")


    let pa1 = {
        "@type": "addAction",
        "@id": "add",
        "name": "addAction",
        "targetCollection": {
            "@type": things.record_type,
            "@id": things.record_id
        },
        "object": {
            "@type": "digitalDocument",
            "name": "test_add"
        },
        "image": {
            "@type": "imageObject",
            "@id": "plus",
            "contentUrl": "./icons/plus.svg"
        }
    }
    things.addProperty('potentialAction', pa1 )


    
    let thingsElement = document.createElement('kr-things')
    thingsElement.listItemTemplate = 'kr-list-item'
    thingsElement.listItem_itemTemplate = 'kr-thing'
    thingsElement.listItemRecordTemplate = getSampleRecord()
    thingsElement.thing = things
    thingsElement.initObject()
    
    
    let d = document.getElementById('test15')
    d.appendChild(thingsElement)


}

//test1()
//test2()
//test3()
//test4()

//test5()

//test6()

//test7()

//test8()
//test9()
//test10()
//test11()
//test12()
//test13()
//test14()
test15()




