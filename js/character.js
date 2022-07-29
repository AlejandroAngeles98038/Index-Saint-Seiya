const curiosities = document.querySelector('#curiosities');
const content = document.querySelector('#content')

let results = [];

fetch(`${URL}/all-classes/?limit=10`)
  .then(response => response.json())
  .then(data =>{ 
    results = data;
    console.log(results)
    // sortByNameAZ();
    renderCharacters(data)
  })

//////////// Función de Búsqueda////////////////

  const search = (evt) =>{
    let name = evt.target.value;

    let filters = results.filter((result) => {
        return result.class.name.toLowerCase().includes(name.toLowerCase());

    });
    renderCharacters(filters);  

}

//////////// Función para pintar las clasificaciones por personaje////////////////

function renderSaints(){
    let saintsClass = results.filter((saint) => {
        return saint.class.class == 'Saints';
    })

    renderCharacters(saintsClass)
}

function renderAnunnakis(){
    let anunnakisClass = results.filter((anunnakis) => {
        return anunnakis.class.class == 'Anunnakis';
    })

    renderCharacters(anunnakisClass)
}

function renderBerserkers(){
    let berserkersClass = results.filter((berserkers) => {
        return berserkers.class.class == 'Berserkers' 
    })

    renderCharacters(berserkersClass)
}

function renderCoronaSaints(){
    let coronaSaints = results.filter((coronaSaints) => {
        return coronaSaints.class.class == 'Corona Saints' 
    })

    renderCharacters(coronaSaints)
}
function renderCyclops(){
    let cyclops = results.filter((cyclops) => {
        return cyclops.class.class == 'Cyclops' 
    })

    renderCharacters(cyclops)
}

function renderSpecters(){
    let specters = results.filter((specters) => {
        return specters.class.class == 'Specters' 
    })

    renderCharacters(specters)
}

function renderDryads(){
    let dryads = results.filter((dryads) => {
        return dryads.class.class == 'Dryads' 
    })

    renderCharacters(dryads)
}

function renderFairies(){
    let fairies = results.filter((fairies) => {
        return fairies.class.class == 'Fairies' 
    })

    renderCharacters(fairies)
}

function renderGladiators(){
    let gladiators = results.filter((gladiators) => {
        return gladiators.class.class == 'Gladiators' 
    })

    renderCharacters(gladiators)
}

const renderAll = () => {
    renderCharacters(results);
}


//////////////////Función para pintar clasificación de la sección de shows///////////
const shows = document.querySelector('#shows');
const renderShows = (shows) => {
    document.querySelector('#content').innerHTML=""
  
  
    shows.forEach((show) => {
        let block = document.createElement("div");
        block.classList.add('col-3', 'mb-4', "text-center");

      
      block.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card" style="width: 18rem; height: 24rem">
            <div class="card-body">
              <h5 class="card-subtitle">${show.midia}: ${show.name}</h4>
              <h4 class="card-title">${show.release}</h5>
            </div>
            <figure class="image rounded mx-auto d-block ">
                <img src="${IMG_PREFIX}${show.image}" class=" img-thumbnail" style ="height: 16rem;">
            </figure>
        </div>
      `
      );
      block.dataset.name = show.name;
      block.dataset.release = show.release;
      block.dataset.description = show.description;
      block.dataset.midia = show.midia;

      block.addEventListener("click", function(evt){
        document.querySelector('#exampleModal')
        block.setAttribute('data-bs-toggle', 'modal')
        block.setAttribute("data-bs-target", '#exampleModal2')
        document.querySelector('#modalNameShows').innerHTML= evt.currentTarget.dataset.midia+ ": " + evt.currentTarget.dataset.name + "<br>" + "Release"+ ": " + evt.currentTarget.dataset.release;
        document.querySelector('#modalImage2').innerHTML = `<img src="${IMG_PREFIX}${show.image}" class="rounded mx-auto d-block">`;
        document.querySelector('#modalDescription').innerHTML= "Sinopsis:  "  + "<br>" + evt.currentTarget.dataset.description;
        

      })

      document.querySelector('#content').append(block);
    });
  };

  shows.addEventListener("click", (event) => {
    event.preventDefault();
  
    const { name } = event.target;
  
    fetch(`${URL}/debuts`)
      .then((response) => response.json())
      .then((data) => renderShows(data));
  });

//////////// Función para pintar las clasificaciones de curiosidades////////////////

const renderCuriosities = (curiosities) => {
    content.innerHTML=""
  
  
    curiosities.forEach((curiosity) => {
        let block = document.createElement("div");
        block.classList.add('col-4', 'mb-4', "text-center");

      
      block.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card" style="width: 26rem; height: 26rem">
            <div class="card-body">
                <h5 class="card-title">${curiosity.subTitle}</h5>
                <p class="card-text">${curiosity.description}</p>
            </div>
        </div>
      `
      );

      document.querySelector('#content').append(block);
    });
  };

curiosities.addEventListener("click", (event) => {
    event.preventDefault();
  
    const { subTitle } = event.target;
  
    fetch(`${URL}/curiosities`)
      .then((response) => response.json())
      .then((data) => renderCuriosities(data));
  });

  

//////////// Función para pintar los personajes////////////////

const renderCharacters = (characters) => {
   document.querySelector('#content').innerHTML="";
    characters.forEach((character) => {

            let div = document.createElement('div')
            div.classList.add('col-3', 'mb-4', "text-center",)
            div.innerHTML += `   
            <div class="col-3">
                <div class="card card-color" style="width: 18rem; height: 19rem;" data-id="${character.id}">
                <div class="card-body">
                    <h5 class="card-title"><b>${character.name }</b></h5>
                </div>
                <figure class="image rounded mx-auto d-block ">
                    <img src="${IMG_PREFIX}${character.image}" class="img-fluid" style ="height: 14rem; width: 16rem">
                </figure>
                </div>
            </div>  `

          div.dataset.attacks = character.attacks;
          div.dataset.group= character.class.group;
          div.dataset.name = character.class.name;
          div.dataset.rank = character.rank;
          div.dataset.debut = character.debut;

       

          div.addEventListener("click", function(evt){
            document.querySelector('#exampleModal')
            div.setAttribute('data-bs-toggle', 'modal')
            div.setAttribute("data-bs-target", '#exampleModal')
            document.querySelector('#modalImage').innerHTML = `<img src="${IMG_PREFIX}${character.image}" >`
            document.querySelector('#modalCharacter').innerHTML=  evt.currentTarget.dataset.name;
            document.querySelector('#modalAttacks').innerHTML= "Attacks:  "  + "<br>" + evt.currentTarget.dataset.attacks;
            document.querySelector('#modalGroup').innerHTML= "Group: "  + "<br>" + evt.currentTarget.dataset.group;
            document.querySelector('#modalRank').innerHTML= "Rank: " + "<br>" + evt.currentTarget.dataset.rank;
            document.querySelector('#modalDebut').innerHTML= "Debut: " + "<br>" + evt.currentTarget.dataset.debut;

          })


            document.querySelector('#content').append(div) 
            

    });
}


//////////// Función para nombrar los eventos del HTML////////////////

document.querySelector('#search').addEventListener("keyup", search);
document.querySelector('#saintsOption').addEventListener('click', renderSaints);
document.querySelector('#anunnakisOption').addEventListener('click', renderAnunnakis);
document.querySelector('#berserkersOption').addEventListener('click', renderBerserkers);
document.querySelector('#coronaSaintsOption').addEventListener('click', renderCoronaSaints);
document.querySelector('#dryadsOption').addEventListener('click', renderDryads);
document.querySelector('#cyclopsOption').addEventListener('click', renderCyclops);
document.querySelector('#fairiesOption').addEventListener('click', renderFairies);
document.querySelector('#gladiatorsOption').addEventListener('click', renderGladiators);
document.querySelector('#spectersOption').addEventListener('click', renderSpecters);
document.querySelector('#allOption').addEventListener('click', renderAll);


