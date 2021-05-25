const template = document.createElement("template");
template.innerHTML = `
    <style>
        .card{
            position: fixed;
            top: 50%;
            left: 50%;
            min-width: 50%;
            background-color: var(--sea-color);
            padding: .5rem;
            border-radius: .4rem;
            color: white;
            pointer-events: none;
            user-select: none;
            transform: scale(0) translate(-50%, -50%);
            transition: transform 250ms linear;
            transform-origin: top left;
            font-weight: 300;
            flex-direction: column;
            align-items: center;
            text-align: center;
            text-transform: capitalize;
        }
        .card.active{
            pointer-events: initial;
            user-select: initial;
            transform: scale(1) translate(-50%, -50%);
            display: flex;
        }
        img{
            width: 4rem;
        }
    </style>
    <div class="card">
        <h1 class="logo">Seaapi</h1>
        <img alt="you" />
        <h3>Username</h3>
        <p>School</p>
        <img src="../../assets/icons/yasaruni.png" />
    </div>

`
import { get } from '../utils.js'
//component
class AppCard extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        this.shadowRoot.querySelector('h3').textContent = get('user').name
        this.shadowRoot.querySelector('img').src = `../../assets/faces/${get('user').gender}.svg`
    }
}

customElements.define('app-card', AppCard)