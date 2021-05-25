const template = document.createElement("template");
template.innerHTML = `
    <style>
        .actions{
            position: fixed;
            background: var(--sea-color);
            top: 50%;
            left: 50%;
            padding: .5rem;
            min-width: 70%;
            border-radius: .4rem;
            border: 2px solid whitesmoke;
            color: white;
            transform: translate(-50%, -50%) rotate(20deg) scale(0);
            transition: transform 250ms linear;
            pointer-events: none;
            user-select: none;
        }
        .actions.active{
            pointer-events: initial;
            user-select: initial;
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
        }
    </style>
    <div class="actions">
        <slot name="content"></slot>
    </div>
`
//component
class AppActions extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        localStorage['modalOpen'] = 'true'
    }
}

customElements.define('app-actions', AppActions)