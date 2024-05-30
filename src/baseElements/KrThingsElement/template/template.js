


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
            <div class="col col-1">
                <kr-select-all>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                </kr-select-all>
            </div>


            <!-- TBD -->
            <div class="col col-1">
                        P
            </div>


            <!-- Items -->
            <div class="col col-9">
            </div>



            <!-- Actions -->
            <div class="col col-1 ">


                <kr-action-menu>
                </kr-action-menu>
               
            </div>

            
        </div>
        {{ item | json }}
        
        <div class="row border ">

            <div class="col m-0 p-0 krItemListElement">
                
                {% for element in item.itemListElement %}

                    <kr-list-item data-record-type="{{ element['@type'] }}" data-record-id="{{ element['@id'] }}">
                    </kr-list-item>

                {% endfor %}
            
                
            </div>

        </div>`

    }

