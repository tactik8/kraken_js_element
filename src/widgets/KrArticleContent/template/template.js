



export function template(){


    return `

        {% assign nextLevel = config.level | plus: 1 %}

        <div id="{{ item['@id'] }}">

            <div class="justify-content-center text-center">
                <kr-image-lg data-record-type="{{ item['@type'] }}" data-record-id="{{ item['@id'] }}"></kr-image-lg>
            </div>
            
            <h{{ config.level }}>{{ item.headline }}</h{{ config.level }}>
    
            <p>{{ item.text }}</p>

            {% if item.hasPart %}
                {% for part in item.hasPart %}

                    <kr-article-content 
                        data-level="{{ nextLevel }}" 
                        data-record-type="{{ part['@type'] }}"
                        data-record-id="{{ part['@id'] }}"
                    >
                    </kr-article-content>
                
                {% endfor %}
            {% endif %}
    
    `
}