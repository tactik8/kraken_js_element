
//import { krakenschema } from 'krakenschema'

    
export function extractFromText(content){

    let values = []
    
    if(!content || content == null || content == ""){
        return null
    }

    // Extract json from entire content
    if(content.startsWith('{') || content.startsWith('[')){
        values = values.concat(extractJSON(content))
        return values
    }


    
    let key = getKey(content)

    let rawValue = getValue(content)
    values = values.concat(extractAction(rawValue))

    // Extract json from rawValue
    values = values.concat(extractJSON(rawValue))

    if(values.length > 0){
        return values
    } else {
        return []
    }

    
}


function getKey(content){

    if(!content.includes(':')){ return null }
    
    let key = content.split(':')[0]

    return key
    
}



function getValue(content){

    if(!content.includes(':')){ return content }

    let parts = content.split(':')

    if (parts.length < 2){ return null }

    let value = parts[1]

    return value

}


function extractAction(content){

    let rawContent = content.trim()

    if(!rawContent || rawContent == null){ return }

    
    if(!rawContent.startsWith('*')){ return [] }

    rawContent = rawContent.slice(1)

    
    let agents = extractMentions(content)

    let name = rawContent.split('@')[0]
    
    let record = {
        "@type": "Action",
        "@id": String(crypto.randomUUID()),
        "name": name,
        "agent": agents,
        "actionStatus": "ActiveActionStatus"
    }

    return [record]

    
}

function extractMentions(content){

    let results = []
    
    let rawContent = content.trim()

    if(!rawContent || rawContent == null){ return }

    // Add space after non standard characters
    let nonStandardCharacters = ['(', ')', ',']
    for (let n of nonStandardCharacters){
        rawContent = rawContent.replace(n, n + ' ')
    }
   
    let parts = rawContent.split(' ')

    for(let part of parts){

        if(part.startsWith('@')){

            let record =  {
                "@type": "Person",
                "@id": part,
                "name": part
            }
            results.push(record)
        }
        
    }
    return results
    
}


function extractJSON(content){

    let results = []


    let rawContent = content.trim()

    try{
        let jsonContent = JSON.parse(rawContent)
        jsonContent = ensureArray(jsonContent)
        results = results.concat(jsonContent)
       
    } catch(error) {
        //console.error('error', rawContent, error)
    }
    return results
    
}




function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}