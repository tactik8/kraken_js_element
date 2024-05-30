


export function tableValue(){


    return `

              

                {% if item['@type']  %}

                       

                        <kr-avatar data-record-type={{ item['@type'] }} data-record-id={{ item['@id'] }}> 

                        </kr-avatar>


                {% elsif item[0]['@type']  %}

                              

                        <kr-avatar data-record-type={{ item[0]['@type'] }} data-record-id={{ item[0]['@id'] }}> 
                        </kr-avatar>


                {% else %}



                        {{ item }}


                {% endif %}





    `

}

