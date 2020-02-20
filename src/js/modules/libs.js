export class ModalWindow {

    constructor(popup, modal_overlay) {
        this.modal = document.querySelectorAll(popup);
        this.overlay = document.querySelectorAll(modal_overlay);
    }

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

