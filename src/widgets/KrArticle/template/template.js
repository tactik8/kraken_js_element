

export function template(){

    return `
    
            <div class="row" data-bs-spy="scroll">
                <div class="col col-12 col-md-10">
                    
                    <div id="test1">
                    <kr-article-content></kr-article-content>
                    </div>
                </div>
                <div class="col col-0 col-md-2">
                
                    <div id="toc" class="sticky-top mt-4">
                        <kr-article-toc></kr-article-toc>
                        
                    </div>
                </div>
            </div>
            
    `
}