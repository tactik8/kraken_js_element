

export function template() {

    return `
    <div class="row border ps-3 pe-3 pt-0 pb-0 hover m-0">


        {% if config.showSelect == true %}
            <div class="col col-1 mt-3">
                <kr-select>
                  
                </kr-select>
             </div>
         {% endif %}

        
        {% if config.showPosition == true %}
            <div class="col col-1 mt-3">
                <kr-property data-record-type="{{ item['@type'] }}" data-record-id="{{ item['@id'] }}" data-property-id="position">
                    
                </kr-property>
                
            </div>
        {% endif %}
        
        <div class="col  pt-0 pb-0">
            <kr-property data-record-type="{{ item['@type'] }}" data-record-id="{{ item['@id'] }}" data-property-id="item" data-value-template="{{ config.elementTemplate }}">
    
            </kr-property>
            
            
        </div>

        {% if config.showActions == true %}
            <div class="col col-1 p-1 text-end">
                <kr-potential-actions style="visibility: hidden"> 
    
                    <kr-action-menu>
                   
                    </kr-action-menu>
                
                </kr-potential-actions>
            </div>
        {% endif %}

    </div>`

}