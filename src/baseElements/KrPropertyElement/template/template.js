

export function template(){

    

    
    return `
    
    
    
    {% for v in item %}
       
        <kr-value data-record-type="{{ v['@type'] }}" data-record-id="{{ v['@id'] }}" data-position="{{ forloop.index0 }}">

        </kr-value>

    {% endfor %}
    
    
    `
}