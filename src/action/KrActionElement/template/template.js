


export function template() {

    return `


        <span>
            <span>
                
                    <img src="{{ item.image.contentUrl }}" width="32px" height="32px" class="" alt="..." onerror='this.style.display="none"'> 
    
    
            </span>
    
            <span>
    
    
                {{ item.name }}
    
            </span>
        </span>
    `

}