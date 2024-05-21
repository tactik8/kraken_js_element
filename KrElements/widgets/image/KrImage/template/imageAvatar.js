



export function imageAvatar(){

    return `
    
    {% if item.contentUrl %}
        <div class=" me-2 rounded-2 bg-label-secondary">
            
            <img 
                class="rounded-2" 
                height="38px" 
                width="38px"
                src="{{ item.contentUrl}}" 
                alt="{{ item.name }}"  
                onerror='this.style.display = "none"'
                >
        
        </div>


    {% elsif item.image %}
            <div class=" me-2 rounded-2 bg-label-secondary">
                
                <img
                    class="rounded-2" 
                    height="38px" 
                    width="38px"
                    src="{{ item.image.contentUrl }}" 
                    alt="{{ item.image.name }}" 
                    onerror='this.style.display = "none"'
                    >
            
            </div>


    {% endif %}

    `
}