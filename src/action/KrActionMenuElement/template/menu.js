

export function menu() {

    return `
    <div class="btn-group p-0 m-0">

      <a href="#" role="button"  class="btn  p-0" data-bs-toggle="dropdown" aria-expanded="false">
     
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
        </svg>
      </a>

     
      <ul class="dropdown-menu">


        {% for action in item %}
        <li class="dropdown-item">
        
          <kr-action data-record-type="{{ action['@type'] }}" data-record-id="{{ action['@id'] }}">
          </kr-action>
        
        </li>

        {% endfor %}

        
      </ul>
</div>`

}
