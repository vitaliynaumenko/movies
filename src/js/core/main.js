import {ModalWindow} from "../modules/libs";

window.onload = function () {
    let popup = new ModalWindow('.modal_div', '.modal_overlay');

    let Movies = document.querySelector('#movies'),
        mainContent = '';

    const requestUrl = new Request('http://my-json-server.typicode.com/moviedb-tech/movies/list');

    function sendRequest(url) {
        return fetch(url)
            .then(response => response.json())
    }

    sendRequest(requestUrl)
        .then(films => {
            films.forEach((film, val) => {
                mainContent += `
                <div class="movie col-lg-3" data-id="${film.id}">
                   <img src="${film.img}">
                         <h2 class="name movie__name">
                             ${film.name}
                        </h2>
                        <div class="year movies__year">
                            ${film.year}
                        </div>
                </div>`

                let templateHtml = Movies.innerHTML = mainContent,
                    self = document.querySelectorAll('.movie');
                for (let i = 0; i < self.length; i++) {
                    self[i].addEventListener('click', function () {
                        // Popup
                        let templateModal = '';
                        templateModal += `
                         <div class="modal__content"  data-index="" >
                               <div class="modal-title"> ${films[i].name}</div>
                                <img src="${films[i].img}">
                               <div class="modal__year"> ${films[i].year} </div>
                               <div class="modal__genres"> ${films[i].genres} </div>
                               <div class="modal__desc"> ${films[i].description}</div>
                               <div class="modal__direc"> ${films[i].director}</div>
                                <div class="modal__starring">${films[i].starring} </div>
                        </div>
                                 `
                        popup.open(templateModal);

                    })

                }


            })
            let mod_cont = document.querySelectorAll('.modal_content'),
                close = document.querySelectorAll('.modal_overlay, .modal_close');

            close.forEach((el) => {
                el.addEventListener('click', function () {
                    popup.close();

                })
            })


        })


}


