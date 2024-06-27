


export function template(){


    return `
    {% for i in item %}
        <div class="row">
            <div class="col col-3">
                <b>{{i[0]}}</b>
            </div>
            <div class="col col-9">
                 <kr-property data-property-id="{{ i[0] }}" data-value-template="kr-simple">
            </kr-property>
            </div>
        </div>      
    {% endfor %}
    <br>
    `
    
}