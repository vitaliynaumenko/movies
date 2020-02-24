class Filter {

    getGenres() {

    }

    render() {
        let selectOption = '';

        fetch('http://my-json-server.typicode.com/moviedb-tech/movies/list')
            .then(response => response.json())
            .then(films => {

                films.forEach(({genres}) => {
                    console.log(genres)

                    selectOption += `
                                <option> ${genres} </option>
                    `

                    document.getElementById('filter').innerHTML = selectOption;

                })


            })

    }


}

let filterMovies = new Filter();
filterMovies.render()

