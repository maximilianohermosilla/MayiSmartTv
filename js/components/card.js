export default function CardApp(app){
    return `    
        <article class="card-app grid-container" id="${app.id}">            
                <img src="${app.imagen}" alt="${app.nombre}" class="app-img">            
        </article>
    `;
}