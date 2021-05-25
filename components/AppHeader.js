import { get, save, preferredLanguage } from '../utils.js'
import { texts } from '../assets/data/texts.js'
const headerHTML = `
    <style>
        .logo{
            font-family: 'Play';
            font-size: 1.3rem;
        }
        img{
            cursor: pointer;
            width: 3rem;
        }
        header{
            position: fixed;
            width: 100%;
            top: 0%;
            height: 14vh;
            background-color: #006994;
            color: white;
            display: flex;
            justify-content: space-around;
            align-items: center;
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
            transform-origin: top left;
            bottom: -100%;
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
        .rooms{
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    </style>
        <div class="rooms">
            <picture class="tooltip" data-name="${texts[`meetingRoom${preferredLanguage()}`]}">
                <a href="./meeting.html">
                    <img src="../../assets/icons/board-meeting.svg" />
                </a>
            </picture>
            <picture class="tooltip" data-name="${texts[`officeRoom${preferredLanguage()}`]}">
                <a href="./office.html">
                    <img src="../../assets/icons/team.svg" />
                </a>
            </picture>
            <picture class="tooltip" data-name="${texts[`funRoom${preferredLanguage()}`]}">
                <a href="./fun.html">
                    <img src="../../assets/icons/fun.svg" />
                </a>
            </picture>
        </div>
        <h3 class="logo">SeaApi</h3>
        <picture class="tooltip profile" data-name="${texts[`myProfile${preferredLanguage()}`]}">
            <img />
        </picutre>
`
//component
class AppHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const wrapper = document.createElement('header');
        wrapper.innerHTML = headerHTML
        this.shadowRoot.append(wrapper)
    }
    connectedCallback() {
        this.shadowRoot.querySelector('.profile img').src = `../../assets/faces/${get('user').gender}.svg`
        this.shadowRoot.querySelector('.profile').addEventListener('click', _ => {
            document.querySelector('app-card').shadowRoot.querySelector('.card').classList.toggle('active')
            save('modalOpen', !get('modalOpen'))
        })
    }
}
customElements.define('app-header', AppHeader);