


export function template(){
    return ` 


        
    <span>
    {% if item.object.value['@type'] %}

        {% if config.valueTemplate %}
    
            <div class="">
            <{{ config.valueTemplate }} data-record-type="{{ item.object.value['@type'] }}" data-record-id="{{ item.object.value['@id'] }}"> </{{ config.valueTemplate }}>
            </div>

        {% else %}
            <div class="">
           
                <kr-thing data-record-type="{{ item.object.value['@type']}}" data-record-id="{{ item.object.value['@id']}}">

                </kr-thing>

         </div>


        {% endif %}

    {% else %}

        {{ item.object.value }}

    {% endif %}
   
    
 `
}


