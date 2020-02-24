import {localStorageUtil} from './localstorage'
import {favoriteListPage} from "./favoritelist";

export class Movies {

    handleSetLocationStorage(element, id) {
        localStorageUtil.putMovies(id)
        favoriteListPage.render()
    }

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
                            
                            <div class="movie col-lg-3" data-id="${id}"  ">
                            <div class="fav__list${activeClass}">
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

                let btnAddToFavList = document.querySelectorAll('.fav__list');

                for (let i = 0; i < btnAddToFavList.length; i++) {
                    btnAddToFavList[i].addEventListener('click', function ({id}) {
                        moviesPage.handleSetLocationStorage(this, films[i].id)
                    })
                }

            })
    }
}

const moviesPage = new Movies()
moviesPage.render();




