import { setStatus, preferredLanguage } from '../utils.js'
import { texts } from '../assets/data/texts.js'
const innerHTML = `
    <style> 
        footer{
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            min-height: 10vh;
            background-color: #006994;
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: .3rem;
        }
         .tooltip {
            color: white;
           position: relative;
        }

        .tooltip:hover::before {
            transform: scale(1) translateX(-50%);
            opacity: 1;
        }

        .tooltip::before {
            border: 1px solid whitesmoke;
            transition: 250ms linear;
            transform-origin: bottom left;
            top: -90%;
            z-index: 2;
            opacity: 0;
            left: 50%;
            width: max-content;
            border-radius: 0.4rem;
            transform: scale(0) translateX(-50%);
            background-color: var(--sea-color);
            padding: 0.6rem;
            content: attr(data-name);
            position: absolute;
        }
        .status{
            cursor: pointer;
            display: flex;
            align-items: center;
            color: white;
            gap: 1rem;
        }
        @keyframes scaleText{
            50%{
                transform: scale(1.2);
            }
            100%{
                transform: scale(1);
            }
        }
        img{
            width: 4rem;
        }
    </style>
    <div class="status">
        <picture class="tooltip" data-name="${texts[`team${preferredLanguage()}`]}">
            <img src="../../assets/icons/team.svg" />
        </picture>
        <p id="team" class="status-item"></p>
    </div>
     <div class="status">
        <picture class="tooltip" data-name="${texts[`money${preferredLanguage()}`]}">
            <img src="../../assets/icons/money.svg" />
        </picture>
        <p id="money" class="status-item"></p>
    </div>
     <div class="status">
        <picture class="tooltip" data-name="${texts[`directors${preferredLanguage()}`]}">
            <img src="../../assets/icons/board-meeting.svg" />
        </picture>
        <p id="directors" class="status-item"></p>
    </div>
`
class AppFooter extends HTMLElement {

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        const footer = document.createElement('footer')
        footer.innerHTML = innerHTML
        this.shadowRoot.appendChild(footer)
    }

    connectedCallback() {
        setStatus([...this.shadowRoot.querySelectorAll('.status-item')])
    }

}

customElements.define('app-footer', AppFooter)