
import { KrThingElement } from '../KrThingElement.js';

import { KrThing, KrThings } from 'krakenthing';



// Run the test
export function tests(){

    testBasics()
    
}

function testBasics(){

    let thing = new KrThing()

    let record = {
        "@type": "Thing",
        "@id": "testid1",
        "name": "testname1"
    }
    thing.record = record

    let k = document.createElement('kr-thing')
    k.thing = thing

    tests = []
    let c1 = k.record_type == 'Thing'
    tests.push(c1)
    console.assert('c1', c1)

    let c2 = k.record_id == 'testid1'
    tests.push(c2)
    console.assert('c2', c2)

    let c3 = k.getProperty('name').value == 'testname1'
    tests.push(c3)
    console.assert('c3', c3)

    console.log('Tests', tests.filter(el => el== true).length, '/', tests.length)

}


function testState(){

    let thing = new KrThing()
    
    let record = {
        "@type": "Thing",
        "@id": "testid1",
        "name": "testname1"
    }
    thing.record = record

    
    let k =  document.createElement('kr-thing')
    k.thing = thing


    

    
    
}