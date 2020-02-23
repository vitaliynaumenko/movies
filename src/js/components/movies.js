import {LocalstorageUtil} from "./localstorage";

const localStorageUtil = new LocalstorageUtil();


export class Movies {
    render() {
        let moviesStore = localStorageUtil.getFavMovies()
        let htmlMovies = '';

        fetch('http://my-json-server.typicode.com/moviedb-tech/movies/list')
            .then(response => response.json())
            .then(films => {
                films.forEach(({id, name, img, year}) => {
                    let activeClass = ''
                    if (moviesStore.indexOf(id) === -1) {
                        let activeClass = ''
                    } else {
                        let activeClass = ' active'
                    }


                    htmlMovies += `
                                <div class="fav__list${activeClass}" 
                                  onclick="">
                                    add to fav list 
                                </div>
                            <div class="movie col-lg-3" data-id="${id}"  ">
                            
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

    handleSetLocationStorage(e) {
        console.log('ok')
    }
}

const moviesPage = new Movies()
moviesPage.render();



