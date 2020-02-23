import {ModalWindow} from "../components/modal";
import {REQUESTURL} from "../index";

window.onload = function () {
    let popup = new ModalWindow('.modal_div', '.modal_overlay');
    let sendRequest = (url) => fetch(url).then(response => response.json())

    sendRequest(REQUESTURL)
        .then(films => {
            films.forEach((film) => {
                let self = document.querySelectorAll('.movie');
                for (let i = 0; i < self.length; i++) {
                    self[i].addEventListener('click', function () {
                        // Popup
                        let templateModal = '';
                        templateModal += `
                         <div class="modal__content"  data-index="" >
                               <div class="modal-title"> ${films[i].name}</div>
                                <img src="${films[i].img}">
                               <div class="modal__year"> ${films[i].year} </div>
                               <div class="modal__genres"> ${films[i].genres} </div>
                               <div class="modal__desc"> ${films[i].description}</div>
                               <div class="modal__direc"> ${films[i].director}</div>
                                <div class="modal__starring">${films[i].starring} </div>
                        </div>
                                 `
                        popup.open(templateModal);
                    });
                }
            })
            let close = document.querySelectorAll('.modal_overlay, .modal_close');
            close.forEach((el) => {
                el.addEventListener('click', function () {
                    popup.close();
                })
            })
        })
}


