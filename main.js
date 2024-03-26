let listaApps = [];

listaApps.push({id: 1, nombre: "Youtube", url: "https://www.youtube.com", imagen: "youtube.jpg"});
listaApps.push({id: 2, nombre: "Netflix", url: "https://www.netflix.com", imagen: "netflix.png"});
listaApps.push({id: 3, nombre: "Prime Video", url: "https://www.primevideo.com/", imagen: "primevideo.png"});
listaApps.push({id: 4, nombre: "Disney Plus", url: "https://www.disneyplus.com/", imagen: "disney.jpg"});
listaApps.push({id: 5, nombre: "Star Plus", url: "https://www.starplus.com", imagen: "star.png"});
listaApps.push({id: 6, nombre: "Cine.Ar", url: "http://cine.ar/", imagen: "cinear.jpg"});
listaApps.push({id: 7, nombre: "Cuevana", url: "https://www.cuevana3.in/", imagen: "cuevana.png"});
listaApps.push({id: 8, nombre: "FutbolLibre", url: "https://librefutboltv.net/", imagen: "futbollibre.jpg"});

console.log("Ready")
export default function CardApp(app){
    return `    
        <article class="card-app grid-container" id="${app.id}">            
                <img src="${app.imagen}" alt="${app.nombre}" class="app-img">            
        </article>
    `;
}


let container = document.getElementById("appsContainer");
listaApps.forEach(element => {
    container.innerHTML += CardApp(element);
});

function onImageItemClick(elements){
    elements.forEach((element) => {
        element.addEventListener('click', () =>{            
            loadMercaderias(element.id);
        });
    });
}

const loadMercaderias = async (id) => {  
    let redirect = listaApps.find(x => x.id == id);
    console.log(redirect.url);
    location.href = redirect.url;
}



onImageItemClick(document.querySelectorAll(".card-app"));        