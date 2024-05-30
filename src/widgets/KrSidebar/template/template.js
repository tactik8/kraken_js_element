


export function template(){


    return `
    


{% for part in item.hasPart %}

    {% if part['@type'] == "WPSidebar" %}
                                    
        
        <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 280px;">
        
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">

                <kr-image-xs data-record-type="{{ part['@type'] }}" data-record-id="{{ part['@id'] }}">
                </kr-image-xs>
               
                
                <span class="fs-4">{{ part.name }}</span>
            </a>
            <hr>
            <ul class="nav nav-pills flex-column mb-auto">


                {% for partSidebar in part['hasPart'] %}
                    <li class="nav-item">
                        <a 
                            href="{{ partSidebar.url }}" 
                            class="nav-link" 
                            aria-current="page"
                        >
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#home"></use>
                            </svg>
                          {{ partSidebar.name }}
                        </a>
                    </li>
                {% endfor %}
                
            </ul>
   
          </div>
        

    {% endif %}
{% endfor %}


    
    `
}