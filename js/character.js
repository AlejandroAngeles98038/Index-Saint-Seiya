const characterContainer =  document.querySelector("#characterContainer");


fetch(`${URL}/character`)
  .then(response => response.json())
  .then(data => renderCharacters(data))


const renderCharacters = (characterNames) => {
    console.log(characterNames.results)

    let nameCharacter = characterNames.results;

    nameCharacter.forEach((results) => {
        const card = document.createElement('div');
        card.classList.add("col-3", "row-4" );

        const imgContainer = document.createElement('div')
        imgContainer.classList.add('img-container')

        const img = document.createElement('img')
        img.classList.add('rounded')
        img.src = results.image;

        imgContainer.appendChild(img);

        const numberId = document.createElement('p');
        numberId.classList.add()
        numberId.style.fontFamily = "helvetica"
        numberId.style.fontsize = "10px"
        numberId.textContent = `#${results.id} ${results.name}`

    
        card.appendChild(imgContainer);
        card.appendChild(numberId);
        

        characterContainer.appendChild(card);
    })

}
