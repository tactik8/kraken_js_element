
export function template(){


    return `



        <div class="">

            {{ config.best['@type'] }}
            {% if config.best['@type'] == "Action" %}

                <kr-action-status></kr-action-status> {{ config.best.name }} {{ config.best.agent.name }}

          

            {% elsif config.best['@type'] == "Person" %}
            
                <kr-image-sm></kr-image-sm> {{ config.best.name }} {{ config.best.givenName }} {{ config.best.familyName }} 
            
            {% else %}

                {{ config.best.text }}
                
            {% endif %}

           
        </div>

        

    `

}