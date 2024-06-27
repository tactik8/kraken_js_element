import { KrElements } from '../src/index.js'




import { getSampleRecord } from '../src/sample_record.js'
import { getSampleRecords } from '../src/sample_record.js'

import { getAction } from '../src/sample_record.js'


import { KrThing, KrThings } from 'krakenthing'




export function test_simple(testNo) {



        // Test 2

        let r = {
                "@type": "Thing",
                "@id": "abc",
                "name": "name1",
                itemListElement: {
                                "@type": "ListItem",
                                "@id": "def",
                                "name": "parent1",
                                "position": 0
                               
                                }
                }

        
        let itemList = document.createElement('kr-simple')
        //itemList.itemTemplate = 'kr-thing'
        itemList.thing = r


        let d2 = document.getElementById(testNo)
        d2.appendChild(itemList)

        

        let parent2 = {
                        "@type": "ListItem",
                        "@id": "ghi",
                        "name": "parent2",
                        "position": 1
                        }
        let parent3 = {
                "@type": "ListItem",
                "@id": "jkl",
                "name": "parent3",
                "position": 0
                }

        setTimeout(function(){
                 itemList.thing.addProperty('itemListElement', parent2)
        }, 1000);

        setTimeout(function(){
                let parents = itemList.thing.getProperty('itemListElement').values
                for(let p of parents){

                        if(p.getProperty('position').value == 0){
                                p.replaceProperty('position', 0, 2)
                        }
                        else if(p.getProperty('position').value == 1){
                                p.replaceProperty('position', 1, 0)
                        }
                
                }
        }, 2000);
       

        setTimeout(function(){
                 itemList.thing.addProperty('itemListElement', parent3)
        }, 3000);

        

        console.log('zz', itemList.record_type, itemList.record_id)



}