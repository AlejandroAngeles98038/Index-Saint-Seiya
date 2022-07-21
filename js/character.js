fetch(`${URL}/characters`)
  .then(response => response.json())
  .then(data => renderCharacters(data))



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
