class SwProvider extends HTMLBodyElement {
    #main;

    constructor() {
        super();
        this.#main = this.querySelector("sw-main");
    }

    connectedCallback() {  
        this.addEventListener("sw", event => this.#reducer(event.detail.component));
    }

    #reducer(component) {
        this.#main.render(component);
    }
}

customElements.define('sw-provider', SwProvider, { extends: 'body' });