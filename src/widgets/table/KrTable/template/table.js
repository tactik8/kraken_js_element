




export function table() {

    return `
        
        <table class="table table-hover">
          <thead class="table-dark">
            <tr>
        
            {% for key in config.keys %} 
                    
                    
                    <th scope="col">{{ key }}</th>
            {% endfor %}
            
            </tr>
          </thead>

          
          <tbody>
        
        
            {% for record in item.itemListElement %}
                <tr>
            
                {% for pair in record %} 
                    {% assign key = pair[0] %} 
                    {% assign value = pair[1] %} 
        
        


                    {% if record[key][0]['@type']  %}

        
                        <td scope="col"><kr-avatar data-test="test1" data-record={{ record[key][0] | json }}> </kr-avatar></td>
                        
                  


                    {% elsif record[key]['@type']  %}


                        <td scope="col"><kr-avatar data-test="test1" data-record={{ record[key] | json }}> </kr-avatar></td>

                    {% else %}

                    
                        <td scope="col">{{record[key]}}</td>
                    
                    {% endif %}
        
                    
        
        
        
                {% endfor %}
        
                </tr>
            {% endfor %}
           
          </tbody>
        </table>
        
        `

}



