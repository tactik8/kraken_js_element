


export function formInput(){

    return `

        <div class="mb-3">



            <div class="row">
                
               
                <div class="col-6  col-md-2">
                        <label for="{{ config.propertyID }}" class="form-label text-capitalize">{{ config.propertyID }}</label>
                </div>
                
                
                <div class="col-12  order-4 col-md-9 order-md-2">
                        {% if item.first %}
                            {% for r in item %}

                                <div class="row">
                                    <div class="col col-12 col-md-1"> 
                                        <h6>{{forloop.index0}}</h6>
                                    </div>
                                    <div class="col col-12 col-md-11">
                                            
                                        <kr-form-input-value data-property-id="{{ config.propertyID }}"  data-position="{{forloop.index0}}"> </kr-form-input-value>
                                           
                                    </div>
                                </div>
                            {% endfor %}
                
                        {% else %}
                
                            <kr-form-input-value data-property-id="{{ config.propertyID }}"  data-position="0"> </kr-form-input-value>
                
                        {% endif %}
                
                </div>
                
                
 


                
                <div class="col order-3 justify-content-end text-end">
                        <span class="kr-add justify-content-end">


                            <kr-action data-action-name="addPropertyValueAction">

                            </kr-action>
                        
                            
                        </span>
                </div>
            </div>
        </div>
                

    `


    
}