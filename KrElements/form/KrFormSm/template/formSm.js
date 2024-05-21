

export function formSm() {

    return `
    <div class="container-md">
        <form>



            <kr-form-input data-property-id="@type">
                </kr-form-input>

            <kr-form-input data-property-id="@id">
                </kr-form-input>


            {% for p in config.properties %}

                <kr-form-input data-property-id="{{p}}">
                </kr-form-input>
              


            {% endfor %}
              
              
              
        </form>
        </div>
`

}

