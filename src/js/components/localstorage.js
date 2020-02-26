export class LocalstorageUtil {

    constructor() {
        this.keyName = 'favorite';
    }

    getFavMovies() {
        const moviesLocalStorage = localStorage.getItem(this.keyName);
        if (moviesLocalStorage !== null) {
            return JSON.parse(moviesLocalStorage)
        }
        return []
    }

    putMovies(id) {
        console.log(id)
        let movies = this.getFavMovies();
        let isPushed = false;
        let index = movies.indexOf(id);

        if (index === -1) {
            movies.push(id);
            isPushed = true;
        } else {
            return false
        }

        localStorage.setItem(this.keyName, JSON.stringify(movies))
    }

    removeMovies(id) {
        console.log(id)
        let movies = this.getFavMovies();
        let index = movies.indexOf(id);
        let isPushed = false;
        movies.splice(index, 1)
        localStorage.setItem(this.keyName, JSON.stringify(movies))
    }

}

export const localStorageUtil = new LocalstorageUtil();

