




export function table() {

    return `
       
        <table class="table table-hover">
            <thead class="table-dark">
                <tr>

                    <th scope="col"><div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
                                  
                                    </div></th>
        
                    {% for key in config.headers %}     
                        <th scope="col">
                            {{ key }}
                        </th>
                    {% endfor %}

                    <th scope="col"></th>
                </tr>
            </thead>

          
            <tbody>
        
                
                {% for r in item.itemListElement %}

                    
                    <tr>

                        
                       
                        <td>
                        
                            <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
                                  
                                    </div>
                        </td>
    
    
    
                        {% for k in config.keys %}   
                                <td>
                               
                                    <kr-table-property data-record-type="{{ r['@type'] }}" data-record-id="{{ r['@id'] }}" data-property-id="{{ k }}">
                
                               
                                      
                                   <kr-table-property>
                                </td>
                        {% endfor %}

                        <td class="text-end">
                            <kr-action-menu data-record-type="{{ r['@type'] }}" data-record-id="{{ r['@id'] }}" >
                            </kr-action-menu>
                        </td>
                             
                    </tr>
                    
                {% endfor %}
               
            </tbody>
        </table>
        
        `

}



