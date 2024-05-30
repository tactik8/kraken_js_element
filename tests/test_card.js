import { KrElements } from '../src/index.js'




import { getSampleRecord } from '../src/sample_record.js'
import { getSampleRecords } from '../src/sample_record.js'

import { getAction } from '../src/sample_record.js'


import { KrThing, KrThings } from 'krakenthing'




export function test_card(testNo) {



        // Test 2

        let r = getSampleRecord()

        console.log(r)
        let itemList = document.createElement('kr-card')
        //itemList.itemTemplate = 'kr-thing'
        itemList.thing = r


        let d2 = document.getElementById(testNo)
        d2.appendChild(itemList)

        console.log('zz', itemList.record_type, itemList.record_id)



}