



export function imageSm(){

    return `
    
    {% if item.contentUrl %}
        <div class=" me-2 rounded-2 bg-label-secondary">
            
            <img 
                style="max-height:100px; max-width:100px; height:auto; width:auto;"
                src="{{ item.contentUrl}}" 
                alt="{{ item.name }}"  
                onerror='this.style.display = "none"'
                >
        
        </div>


    {% elsif item.image %}
        <div class=" me-2 rounded-2 bg-label-secondary">
            
            <img
                style="max-height:100px; max-width:100px; height:auto; width:auto;"
                src="{{ item.image.contentUrl }}" 
                alt="{{ item.image.name }}" 
                onerror='this.style.display = "none"'
                >
        
        </div>


    {% endif %}

    `
}