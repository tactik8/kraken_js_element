




export function template(){


    return `
    
    <a class="nav-link p-0 txt-body-secondary" href="#{{ item['@id'] }}">
        
       <small> {{ item.headline }}</small>
        
    </a>
    
    
        {% if item.hasPart %}
            
            {% for part in item.hasPart %}
                <nav class="nav ms-4 nav-underline">
                    <kr-article-toc 
                        data-level="{{ nextLevel }}" 
                        data-record-type="{{ part['@type'] }}"
                        data-record-id="{{ part['@id'] }}"
                    >
                    </kr-article-toc>
                </nav>
            {% endfor %}
            
        {% endif %}

    `
}