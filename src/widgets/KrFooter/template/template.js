

export function template(){


    return `
    
    
    {% for part in item.hasPart %}

        {% if part['@type'] == "WPFooter" %}
                    
                
            <div class="bg-dark " data-bs-theme="dark">
                <div class="container col-xxl-8">
                    <footer 
                        class="row 
                        row-cols-1 
                        row-cols-sm-2 
                        row-cols-md-5 py-5 my-5 
                        border-top" 
                    >
                   
                        <div class="col mb-3">
                            <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                                <svg class="bi me-2" width="40" height="32">
                                    <use xlink:href="#bootstrap"></use>
                                </svg>
                            </a>
                            <p class="text-body-secondary">© 2024</p>
                        </div>
                
                        <div class="col mb-3">
                    
                        </div>
                
                        <div class="col mb-3">
                         
                        </div>
                    
                        <div class="col mb-3">
                          
                        </div>
                    
                        <div class="col mb-3">
                            <h5>Section</h5>
                            <ul class="nav flex-column">
                
                                {% for footerPart in part.hasPart %} 
                                   
                                    <li class="nav-item">
                                        <a class="nav-link" href="{{ footerPart.url }}">{{ footerPart.name }}</a>
                                    </li>
                                    
                                {% endfor %}
                              
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>


        {% endif %}
    {% endfor %}

    `
    
}