class Movies {

    render() {

        let htmlMovies = '';

        fetch('http://my-json-server.typicode.com/moviedb-tech/movies/list')
            .then(response => response.json())
            .then(films => {
                films.forEach(({id, name, img, year}) => {
                    htmlMovies += `
                            <div class="movie col-lg-3" data-id="${id}">
                                <div class="fav__list">
                                add to fav list 
                                </div>
                                    <img src="${img}">
                                     <h2 class="name movie__name">
                                         ${name}
                                    </h2>
                                    <div class="year movies__year">
                                        ${year}
                                    </div>
                             </div>`
                })
                document.getElementById('movies').innerHTML = htmlMovies;

            })

    }
}

const movies = new Movies()
movies.render();


