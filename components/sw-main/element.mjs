import { THONLY } from 'https://thonly.org/global.mjs';
import kiitos from "./kiitos.mjs";
import template from './template.mjs';

class SwMain extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        window.addEventListener("hashchange", event => this.#render(false));
    }

    async connectedCallback() {
        await import(`${THONLY}/components/tl-main/tl-kiitos/element.mjs`);
        await import(`${THONLY}/components/tl-main/tl-robot/element.mjs`);
        this.#buildElements();
        this.#startIntervalCounter();
        this.#render(true);
    }

    #render(refresh) {
        const page = window.location.hash.substring(1);
        this.shadowRoot.querySelectorAll('header, main, footer').forEach(element => element.style.display = 'none');
        
        if (page) {
            this.shadowRoot.querySelector('tl-kiitos').render(kiitos[page]);
            this.shadowRoot.querySelector('main').style.display = 'block';
            this.shadowRoot.querySelector('footer').style.display = 'block';
        } else {
            const a = this.shadowRoot.querySelector('a');
            a.href = "https://www.facebook.com/siliconwat";
            a.firstElementChild.innerHTML = "<b>Follow</b> for real-time updates!";
            this.shadowRoot.querySelector('header').style.display = 'block';
        }
        
        this.style.display = 'block';
        if (refresh) setTimeout(() => document.body.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" }), 300)
        else document.body.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
    }

    #getRandomInt(min, max, string = true) {
        min = Math.ceil(min)
        max = Math.floor(max)
        if (string) {
            return String(Math.floor(Math.random() * (max - min)) + min)
        }
        return Math.floor(Math.random() * (max - min)) + min
    }

    #buildElements() {
        const sparkElements = this.shadowRoot.querySelectorAll('.spark')
        const weldElements = this.shadowRoot.querySelectorAll('.weld-container')

        sparkElements.forEach((spark, index) => {
            // create weld item first
            let sibling = weldElements[index]
            let baseAnimationDelay = this.#getRandomInt(1,15)
            let weld = document.createElement('div')
            weld.classList = "weld"
            weld.style.animationDelay = String(baseAnimationDelay) + "s"
            sibling.appendChild(weld)

            // sparks start here
            const sparkCount = 25
            for( var i = 0; i <=sparkCount; i++){
                const sparkDiv = this.#generateSpark(baseAnimationDelay)
                spark.appendChild(sparkDiv)
            }
        })
    }

    #generateSpark(delay) {
        let sparkDiv = document.createElement('div')
        // set standard properties
        sparkDiv.classList = 'particle'
        sparkDiv.style.top = this.#getRandomInt(25,35) + "px"
        sparkDiv.style.left =  this.#getRandomInt(0,5) + "px"
        sparkDiv.style.width = this.#getRandomInt(1,2) + "px"
        sparkDiv.style.height = this.#getRandomInt(4,7) + "px"
        // make some uniqness
        if(this.#getRandomInt(1,3) == 2){
            sparkDiv.classList = sparkDiv.classList + " negative-X"
        } else {
            sparkDiv.classList = sparkDiv.classList + " positive-X"
        }
        //create a base delay
        let combinedDelay = (this.#getRandomInt(0,9)/10) + parseFloat(delay)
        sparkDiv.style.animationDelay = String(combinedDelay) + "s" 
        return sparkDiv
    }

    #startIntervalCounter() {
        setInterval( () => this.shadowRoot.getElementById('material-group').classList.toggle('hidden'), 45000)
    }
}

customElements.define("sw-main", SwMain);