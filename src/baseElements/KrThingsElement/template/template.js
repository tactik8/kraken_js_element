


export function template(){

    return `
        <!-- Title -->
        <div class="row border p-3">
            <div class="col">
                 <h1>List {{ name }} </h1>
            </div>
        
        </div>

        
        <div class="row border p-3">

            <!-- Selection -->
            {% if config.showSelect == true %}
                <div class="col col-1">
                    <kr-select>
                    </kr-select>
                </div>
            {% endif %}


            <!-- TBD -->
            {% if config.showPosition == true %}
                <div class="col col-1">
                            P
                </div>
            {% endif %}


            <!-- Items -->
            <div class="col">
            </div>



            <!-- Actions -->
            <div class="col col-1 text-end ">


                <kr-action-menu>
                </kr-action-menu>
               
            </div>

            
        </div>
        
        
        <div class="row border ">

            <div class="col m-0 p-0 krItemListElement">


                <kr-property data-record-type={{item['@type']}} data-record-id={{item['@id']}} data-property-id="itemListElement" data-value-template="kr-list-item">
                </kr-property>
               
            
                
            </div>

        </div>`

    }




export function template2(){

    return `
        <!-- Title -->
        <div class="row border p-3">
            <div class="col">
                 <h1>List {{ name }} </h1>
            </div>

        </div>


        <div class="row border p-3">

            <!-- Selection -->
            {% if config.showSelect == true %}
                <div class="col col-1">
                    <kr-select>
                    </kr-select>
                </div>
            {% endif %}


            <!-- TBD -->
            {% if config.showPosition == true %}
                <div class="col col-1">
                            P
                </div>
            {% endif %}


            <!-- Items -->
            <div class="col">
            </div>



            <!-- Actions -->
            <div class="col col-1 text-end ">


                <kr-action-menu>
                </kr-action-menu>

            </div>


        </div>


        <div class="row border ">

            <div class="col m-0 p-0 krItemListElement">


                <kr-property property-id="itemListElement">
                </kr-property>
                {% assign elements = item.itemListElement | sort: "position" %}
                {% for element in elements %}

                    <kr-list-item data-record-type="{{ element['@type'] }}" data-record-id="{{ element['@id'] }}">

                    </kr-list-item>

                {% endfor %}


            </div>

        </div>`

    }

