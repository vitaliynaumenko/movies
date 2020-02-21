export class ModalWindow {

    constructor(popup, modal_overlay) {
        this.modal = document.querySelectorAll(popup);
        this.overlay = document.querySelectorAll(modal_overlay);
    }


//     render() {
//
//         let htmlModal = ''
//         fetch('http://my-json-server.typicode.com/moviedb-tech/movies/list')
//             .then(response => response.json())
//             .then(films => {
//                 films.forEach(({ id, name, img, year, genres, description, director, starring }) => {
//
//                     htmlModal += `
//                         <div class="modal__content"  data-index="${id}">
//                                <div class="modal-title"> ${name}</div>
//                                 <img src="${img}">
//                                <div class="modal__year"> ${year} </div>
//                                <div class="modal__genres">${genres}  </div>
//                                <div class="modal__desc"> ${description}</div>
//                                <div class="modal__direc"> ${director}</div>
//                                 <div class="modal__starring">${starring} </div>
//                         </div>
// `
//                 })
//
//                 document.querySelector('.modal_div').innerHTML = htmlModal;
//
//             })
//     }

    open(content) {
        this.modal.forEach((el) => {
            el.classList.add('active')
            el.innerHTML = content;
        });
        this.overlay.forEach((el) => {
            el.classList.add('active')
        });
    }

    close() {
        this.modal.forEach((el) => {
            el.classList.remove('active')
        })
        this.overlay.forEach((el) => {
            el.classList.remove('active')
        })

    }

}







