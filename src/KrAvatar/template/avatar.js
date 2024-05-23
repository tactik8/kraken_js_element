

export function avatar() {

    return `
        <div class="d-flex justify-content-start align-items-center">
            <div class="">

                {% if item.contentUrl %}
                    <div class=" me-2 rounded-2 bg-label-secondary"><img height="38px" width="38px"
                            src="{{ item.contentUrl}}" alt="{{ item.name }}" class="rounded-2"></div>
                    
                {% endif %}

                {% if item.image %}
                        <div class=" me-2 rounded-2 bg-label-secondary"><img height="38px" width="38px"
                                src="{{ item.image.contentUrl }}" alt="{{ item.image.name }}" class="rounded-2"></div>
                        

                {% endif %}
            </div>
            
            <div class="d-flex flex-column">
                <p class="text-body text-nowrap mb-0">{{ item.name }}</p>
                <small class="text-muted text-truncate d-none d-sm-block"> {{ item.description }}</small>
            </div>
        </div>

`

}

