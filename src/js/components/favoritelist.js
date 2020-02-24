import {localStorageUtil} from './localstorage'


class Favoritelist {

    removeSetLocationStorage(id) {
        localStorageUtil.removeMovies(id)
        favoriteListPage.render()
    }

    render() {
        let getLocalStorage = localStorageUtil.getFavMovies();

        let FavListHTML = '';
        fetch('http://my-json-server.typicode.com/moviedb-tech/movies/list')
            .then(response => response.json())
            .then(films => {
                films.forEach( ( {id, name, img, year}, key ) => {


                    if ( getLocalStorage.indexOf(id) !== -1 ) {
                        FavListHTML += `
                        <li> 
                                ${name}  ${key+1} 
                                     <div class="delete"> delete </div>
                        </li>
                        `

                    }


                    document.getElementById('fav__list').innerHTML = FavListHTML;

                    let btnRemoveFromFavList = document.querySelectorAll('.delete');

                    for (let k = 0; k < btnRemoveFromFavList.length; k++) {
                        btnRemoveFromFavList[k].addEventListener('click', function ({id}) {
                            favoriteListPage.removeSetLocationStorage(this, films[k].id)
                        })
                    }
                } )

            })

    }

}


export let favoriteListPage = new Favoritelist()
favoriteListPage.render()
