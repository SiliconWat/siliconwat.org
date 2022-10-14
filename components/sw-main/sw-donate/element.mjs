import template from './template.mjs';

class SwDonate extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        
    }
}

customElements.define("sw-donate", SwDonate);