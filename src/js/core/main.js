import {ModalWindow} from "../modules/libs";

window.onload = function () {
    let Movies = document.querySelector('#movies'),
        mainContent = '';
    const requestUrl = new Request('http://my-json-server.typicode.com/moviedb-tech/movies/list');

    function sendRequest(url) {
        return fetch(url)
            .then(response => response.json())
    }

    sendRequest(requestUrl)
        .then(films => {
            films.forEach((film) => {
                mainContent += `
                <div class="movie col-lg-3">
                   <img src="${film.img}">
                         <h2 class="name movie__name">
                             ${film.name}
                        </h2>
                        <div class="year movies__year">
                            ${film.year}
                        </div>
                </div>`
            })
            let templateHtml = Movies.innerHTML = mainContent,
                btn = document.querySelectorAll('.movie');
            for (let i = 0; i < btn.length; i++) {
                btn[i].addEventListener('click', function () {
                    popup.open();
                })
            }

        })


    let popup = new ModalWindow()


}


