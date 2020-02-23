export class LocalstorageUtil {

    constructor() {
        this.keyName = 'favorite'
    }

    getFavMovies() {
        const moviesLocalStorage = localStorage.getItem(this.keyName);
        if (moviesLocalStorage !== null) {
            return JSON.parse(moviesLocalStorage)
        }
        return []
    }

    putMovies(id) {
        let movies = this.getFavMovies();
        let isPushed = false;
        let index = movies.indexOf(id);

        if (index === -1) {
            movies.push(id);
            isPushed = true;
        } else {
            movies.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(movies))
    }

}

const localStorageUtil = new LocalstorageUtil();
