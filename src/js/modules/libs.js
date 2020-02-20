export class ModalWindow {

    constructor(id, modal, overlay, btn) {
        let pop = this;
        this.modal = document.querySelectorAll('.popup');
        this.overlay = overlay;

    }

    open() {
        this.modal.forEach((el) =>{
            el.classList.add('open')
        })
    }

    close() {
        this.modal.forEach((el) =>{
            el.classList.remove('open')
        })
    }

}

