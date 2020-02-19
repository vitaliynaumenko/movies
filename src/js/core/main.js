window.onload = function () {
    let Movies = document.querySelector('#movies')
    mainContent = '';
    const requestUrl = new Request('http://my-json-server.typicode.com/moviedb-tech/movies/list');

    function sendRequest(url) {
        return fetch(url)
            .then(response => response.json())
    }

    sendRequest(requestUrl)
        .then(films => {
            console.log(films)
            films.forEach((film) => {
                console.log(film)
                mainContent += `
                <div class="movie col-lg-4">
                   <img src="${film.img}">
                         <h2 class="name movie__name">
                             ${film.name}
                        </h2>
                        <div class="year movies__year">
                            ${film.year}
                        </div>
                </div>`
            })
            Movies.innerHTML = mainContent
        })

}


