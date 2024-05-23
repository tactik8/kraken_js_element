



export function image(){

    return `
    
    {% if item.contentUrl %}
        <div class=" me-2 bg-label-secondary">
            
            <img 
                class="img-fluid" 
                src="{{ item.contentUrl}}" 
                alt="{{ item.name }}"  
                onerror='this.style.display = "none"'
                >
        
        </div>


    {% elsif item.image %}
        <div class=" me-2 bg-label-secondary">
            
            <img
                class="rounded-2 img-fluid" 
                src="{{ item.image.contentUrl }}" 
                alt="{{ item.image.name }}" 
                onerror='this.style.display = "none"'
                >
        
        </div>


    {% endif %}

    `
}