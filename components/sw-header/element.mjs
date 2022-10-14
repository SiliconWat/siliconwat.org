import template from './template.mjs';

class SwHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        
    }

    dispatch(component) {
        this.dispatchEvent(new CustomEvent("sw", { bubbles: true, composed: true, detail: { component }}));
    }
}

customElements.define("sw-header", SwHeader);