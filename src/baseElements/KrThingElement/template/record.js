

export function record() {

    return `<div class="container">
        <h1>Record: {{ item.name }}</h1>
        <h2>{{ item["@type"] }}</h2>


        {% if item.contentUrl %}

            <img src="{{ item.contentUrl }}" class="img-fluid rounded-start" alt="..." onerror='this.style.display = "none"'>

        {% endif %}

        {% if item.image and image.contentUrl  %}
        
            <img src="{{ item.image.contentUrl }}" class="img-fluid rounded-start" alt="..." onerror='this.style.display = "none"'>
        
        {% endif %}
        
        Values:
        


        <kr-action-status></kr-action-status>
        
        {% for pair in item %} 
            {% assign key = pair[0] %} 
            {% assign value = pair[1] %} 
            
            
            <div class="row">
                <div class="col col-3">
                   {{ key }}:
                </div>
        
                <div class="col col-9">

                    {% if value['@type'] %}

                        {{value.name}}
                        {{value.givenName}} {{value.familyName}}
                        {{value.url}}
                        {{value.contentUrl}}
                    
                    {% elsif value.first %}

                        {% for v in value %}

                            {% if v['@type'] %}
                            
                                {{v.name}}
                                {{v.givenName}} {{v.familyName}}
                                {{v.url}}
                                {{v.contentUrl}}

                            {% else  %}
                                 {{ v }}
                            {% endif %}
                            
                        {% endfor %}
                    
                    
                    {% else  %}
                         {{ value}}
                    {% endif %}
                
                  
                </div>
        
            </div>
        {% endfor %}

    </div>
    `

}