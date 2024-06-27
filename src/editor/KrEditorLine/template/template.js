



export function template(){

    return `
    
        <div class="row">
                   
            
            <div class="col">

                    <div class="kr-input-field" contenteditable="true">
                        {{ config.best.text }}
                    </div>

                <kr-property data-property-id="hasPart">

                </kr-property>
                    <div class="kr-linear-things-section">
                    </div class="kr-linear-things-section">
                      
                
            </div>
                  
            <div class="col col-1">
                <div class="kr-property-field border">
                </div>
            </div>
            
            <div class="col col-1">
                <div class="kr-value-field border">
                </div>
            </div>

            <div class="col col-1">
                <div class="kr-level-field border">
                {{ config.best.level }}
                </div>
            </div>
                
           
        </div>
                  
                  `
}