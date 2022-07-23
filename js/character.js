const curiosities = document.querySelector('#curiosities');
let results = [];

fetch(`${URL}/all-classes`)
  .then(response => response.json())
  .then(data =>{ 
    results = data;
    renderCharacters(data)})


  const search = (evt) =>{
    let name = evt.target.value;

    let filters = results.filter((result) => {
        return result.name.toLowerCase().includes(name.toLowerCase());

    });
    renderCharacters(filters);  

}

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

const renderAll = () => {
    renderCharacters(results);
}



const renderCuriosities = (curiosities) => {
    document.querySelector('#content').innerHTML=""
  
  
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


const renderCharacters = (characters) => {
    document.querySelector('#result').innerHTML="";
    
    characters.forEach((character) => {
        let characterId = character.id; 
        if (characterId <= 24){
            let div = document.createElement('div')
            div.classList.add('col-3', 'mb-4', "text-center",)
            div.innerHTML += `   <div class="col-3">
                            <div class="card" style="width: 18rem; height: 18rem" data-id="${character.id}">
                                <img src="${IMG_PREFIX}${character.image}" class="card-img-top border-bottom" style="object-fit:cover;">
                            <div class="card-body">
                                <h5 class="card-title mt-3"><b>${character.name}</b></h5>
                            </div>
                            </div> 
                        </div>`


            document.querySelector('#result').append(div) 
        } 
    
    });
}


document.querySelector('#search').addEventListener("keyup", search);
document.querySelector('#saintsOption').addEventListener('click', renderSaints);
document.querySelector('#anunnakisOption').addEventListener('click', renderAnunnakis);
document.querySelector('#berserkersOption').addEventListener('click', renderBerserkers);
document.querySelector('#coronaSaintsOption').addEventListener('click', renderCoronaSaints);
document.querySelector('#cyclopsOption').addEventListener('click', renderCyclops);
document.querySelector('#spectersOption').addEventListener('click', renderSpecters);
document.querySelector('#allOption').addEventListener('click', renderAll);
