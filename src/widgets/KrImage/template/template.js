



export function template(){

    return `

        
        {% if config.size == "xs" %}
            {% assign style="max-height:38px; max-width:38px; height:auto; width:auto;" %}
            {% assign class="" %}
        {% elsif config.size == "sm" %}
            {% assign style="max-height:100px; max-width:100px; height:auto; width:auto;" %}
            {% assign class="" %}
        {% elsif config.size == "md" %}
            {% assign style="max-height:400px; max-width:400px; height:auto; width:auto;" %}
            {% assign class="" %}
        {% elsif config.size == "lg" %}
            {% assign style="max-height:1200px; max-width:800px; height:auto; width:auto;" %}
            {% assign class="" %}
        {% else %}
            {% assign style="" %}
            {% assign class="img-fluid" %}
        {% endif %}


        {% if item.contentUrl %}

            {% assign isImage = true %}
            {% assign url = item.contentUrl %}
            {% assign name = item.name %}
    
        {% elsif item.image %}
            {% assign isImage = true %}
            {% assign url = item.image.contentUrl %}
            {% assign name = item.image.name %}

        {% else %}
            {% assign isImage = false %}
            {% assign url = "" %}
            {% assign name = "" %}

        {% endif %}


        {% if item.contentUrl contains "<svg" %}
            {% assign isSvg = true %}
            {% assign svgValue = item.contentUrl %}
        {% elsif item.image contains "<svg" %}
            {% assign isSvg = true %}
            {% assign svgValue = item.image %}
        {% elsif item.image.contentUrl contains "<svg" %}
            {% assign isSvg = true %}
            {% assign svgValue = item.image.contentUrl %}
        {% endif %}
    


        {% if isSvg == true %}

            <div class="{{ class }}" style="{{ style }}">
                {{ svgValue }}
            </div>

        
        
        {% elsif isImage == true %}
    
            <div class=" me-2 bg-label-secondary">
                
                <img 
                    class="{{ class }}" 
                    style="{{ style }}"
                    src="{{ url }}" 
                    alt="{{ name }}"  
                    onerror='this.style.display = "none"'
                    >
            
            </div>

        {% endif %}

    `
}