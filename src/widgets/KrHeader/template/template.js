

export function template(){

    return `


     

    {% for part in item.hasPart %}
       
        {% if part['@type'] == "WPHeader" %}
                {{ ok }}
                <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            
            
                <div class="container col-xxl-8">
                    <a class="navbar-brand" href="/">{{ item.name }}</a>
                    <button class="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavAltMarkup" 
                        aria-controls="navbarNavAltMarkup" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            {% for headerPart in part.hasPart %} 
                                              
                                <a class="nav-link" href="{{ headerPart.url }}">{{ headerPart.name }}</a>
                
                            {% endfor %}
                        
                        </div>
                    </div>
                </div>
            </nav>

        {% endif %}
    {% endfor %}
    
`
}