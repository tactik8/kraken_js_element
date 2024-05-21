

export function card() {

    return `
    <div class="row border ps-3 pe-3 pt-0 pb-0 hover m-0">
        
        <div class="col col-1 mt-3">
            <kr-select>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            </kr-select>
         </div>
        
        <div class="col col-1 mt-3">
            <p>{{ position | default: "" }}</p>
        </div>

        <div class="col col-12 col-md-9 pt-0 pb-0">
            {{ item }}
        </div>
        <div class="col col-1 p-1 ">
            <kr-potential-actions style="visibility: hidden"> 

                <kr-action-menu>
               
                </kr-action-menu>
            
            </kr-potential-actions>
        </div>

    </div>`

}