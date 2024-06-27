

export function template(){


    return `



        <div class="">

           
            {% if item['@type'] == "Action" %}

                <kr-action-status></kr-action-status> {{ item.name }} {{ item.agent.name }}



            {% elsif item['@type'] == "Person" %}

                <kr-image-sm></kr-image-sm> {{ item.name }} {{ item.givenName }} {{ item.familyName }} 

            {% else %}

                {{ item.text }}

            {% endif %}


        </div>



    `

}