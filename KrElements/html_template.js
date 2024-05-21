


export function cardDiv(){

    return `
        <div class="card mb-3 bg-transparent" style="max-width: 300px;">
            <div class="row g-0">



                <div class="col col-sm-4 align-self-center">
                    <a href="#" class="btn h-100" data-bs-toggle="modal" data-bs-target="#modalID">
                        <img src="./kraken.png" class="img-fluid rounded-start" alt="..." onerror='this.style.display = "none"'>
                    </a>
                </div>



                <div class="col pt-0 col-sm-8 align-self-top">
                    <div class="row  mt-0 me-1">
                        <span
                            class="mt-0 mb-1 align-self-end text-end justify-content-end kr-action">{{kr-action}}</span>
                    </div>
                    <div class="card-body">

                        <div class="row align-self-center">
                            <h5 class="card-title">
                                <font size="-1">{{name}}</font>
                            </h5>
                            <p class="card-text">
                                <font size="-1">{{url}}</font>
                            </p>

                        </div>
                    </div>


                    {% for c in parent %}
                    
                        <div class="row me-1 mt-0 text-end justify-content-end">
                            <p class="card-text"><small class="text-body-secondary">
                                    <font size="-1">{{ c.name }}</font>
                                </small></p>
                        </div>
                    
                    {% endfor %}



                    {% for c in children %}
                    
                        <div class="row me-1 mt-0 text-end justify-content-end">
                            <p class="card-text"><small class="text-body-secondary">
                                    <font size="-1">{{ c.name }}</font>
                                </small></p>
                        </div>

                    {% endfor %}

                </div>
            </div>
        </div>

        <div class="modal fade" id="modalID" tabindex="-1" aria-labelledby="modalIDLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">{{heading1}}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {{ content }}
                    </div>

                </div>
            </div>
        </div>`
}




export function itemDiv(){

    return `
    <div class="row border p-3">
        <div class="col col-2">
            <p>{{ position | default: "" }}</p>
        </div>

        <div class="col col-10 p-1">
            {{ item }}
        </div>


    </div>`
    
}


export function thingsDiv(){

    return `<div class="border p-1">
            <h1>List {{ name }} </h1>
        </div>
        <div class="row border p-3">
           
            <div class="col">
                {{ itemListElement }}
            </div>

        </div>`

    }
    


export function actionDiv(){

return `<span>

            {{ name }} <span "justify-end">
            <img src="{{image.contentUrl}}" class="img-fluid rounded-start" alt="..." onerror='this.style.display = "none"'>
            </span>

        </span>
        `

}

