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


 