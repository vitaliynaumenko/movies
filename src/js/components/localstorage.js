class Localstorage {

    constructor() {
        this.keyName = 'favorite'
    }

    getFavMovies() {
        const moviesLocalStorage = localStorage.getItem(this.keyName)
    }

}
