import "./styles.css";

class Modal {
    constructor() {
        const closebtnEl = document.querySelector(".close-btn");
        const overlayEl = document.querySelector("#modal");

        closebtnEl.addEventListener("click", () => {
            overlayEl.classList.add("hidden");
        });
    }
}

const modal = new Modal();