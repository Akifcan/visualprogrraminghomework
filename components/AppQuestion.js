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
            font-weight: normal;
            flex-direction: column;
            align-items: center;
            text-align: center;
            text-transform: capitalize;
        }
        button{
            cursor: pointer;
            padding: .3rem;
            margin: .5rem 0;
            width: 80%;
            text-transform: capitalize;
        }
        h3{
            font-size: 1.2rem;
            line-height: 1.2;
        }
        .card.active{
            pointer-events: initial;
            user-select: initial;
            transform: scale(1) translate(-50%, -50%);
            display: flex;
        }
        .question{
            display: none;
        }
        .result{
            display: none;
        }
        .question.active, .result.active{
            display: block;
        }
        img{
            width: 4rem;
        }
    </style>
    <div class="card">
        <div class="question">
            <h1>Manage Company</h1>
            <h3>
                lorem lorem lorem lorem lorem lorem lorem lorem
            </h3>
            <button class="option">text in here</button>
            <button class="option">another text in here</button>
        </div>
        <div class="result">
            <h3 id="result-text">result text will be here</h3>
            <button id="callback-close">Okay</button>
        </div>
    </div>

`
//component
import { save, get, preferredLanguage, resetGame, generateRandomQuestion, getFirstQuestion, getStatus, saveStatus } from '../utils.js'
class AppQuestion extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.callbackOpen = false
    }
    connectedCallback() {
        this.lastClick = 0;
        this.delay = 20;
        if (!get('firstQuestion')) {
            setTimeout(() => {
                this.openQuestion = true
                this.currentOption = getFirstQuestion()
                this.setQuestion()
                save('firstQuestion', true)
            }, 2000)
        } else {
            console.log('first question showed');
        }
        setInterval(() => {
            if (!get('modalOpen')) {
                if (!this.openQuestion && !this.callbackOpen) {
                    this.openQuestion = true
                    this.currentOption = generateRandomQuestion()
                    this.setQuestion()
                }
            } else {
                console.log('another modal is open right now');
            }
        }, 8000)
    }
    setQuestion() {
        this.shadowRoot.querySelector('.question').classList.add('active')
        this.shadowRoot.querySelector('h3').textContent = this.currentOption[preferredLanguage()]
        this.shadowRoot.querySelectorAll('.option').forEach((option, index) => {
            option.textContent = this.currentOption.options[index][preferredLanguage()]
            option.addEventListener('click', _ => {
                if (this.lastClick >= (Date.now() - this.delay))
                    return;
                this.lastClick = Date.now();
                console.log('click');
                this.currentCallback = this.currentOption.options[index].callback
                this.setAffects()
                this.callbackOpen = true
                this.openQuestion = false
                this.shadowRoot.querySelector('.card').classList.remove('active')
                setTimeout(() => {
                    this.setCallback()
                }, 4000)
            })
        })
        this.shadowRoot.querySelector('.card').classList.add('active')
    }
    setAffects() {
        const status = document.querySelector('app-footer').shadowRoot.querySelectorAll('status-item')
        const result = getStatus()
        function ieby() {

        }
        switch (this.currentOption.affect) {
            case 'team':
                if (this.currentCallback.result == 'increase') {
                    if (this.currentCallback.expense) {
                        result.money -= this.currentCallback.expense
                        document.querySelector('app-footer').shadowRoot.getElementById('money').textContent = result.money + '$'
                        document.querySelector('app-footer').shadowRoot.getElementById('money').style.animation = 'scaleText 500ms linear'
                        setTimeout(() => {
                            document.querySelector('app-footer').shadowRoot.getElementById('money').style.animation = ''
                        }, 500)
                    }
                    result.team += 10
                } else {
                    result.team -= 10
                }
                document.querySelector('app-footer').shadowRoot.getElementById('team').textContent = result.team + '%'
                document.querySelector('app-footer').shadowRoot.getElementById('team').style.animation = 'scaleText 500ms linear'
                setTimeout(() => {
                    document.querySelector('app-footer').shadowRoot.getElementById('team').style.animation = ''
                }, 500)

                break;
            case 'directors':
                console.log(this.currentCallback.result);
                if (this.currentCallback.result == 'increase') {
                    result.directors += 10
                } else {
                    result.directors -= 5
                }
                document.querySelector('app-footer').shadowRoot.getElementById('directors').textContent = result.directors + '%'
                document.querySelector('app-footer').shadowRoot.getElementById('directors').style.animation = 'scaleText 500ms linear'
                setTimeout(() => {
                    document.querySelector('app-footer').shadowRoot.getElementById('directors').style.animation = ''
                }, 500)

                break;
            case 'money':
                result.money -= this.currentCallback.expense
                document.querySelector('app-footer').shadowRoot.getElementById('money').textContent = result.money + '$'
                document.querySelector('app-footer').shadowRoot.getElementById('money').style.animation = 'scaleText 500ms linear'
                setTimeout(() => {
                    document.querySelector('app-footer').shadowRoot.getElementById('money').style.animation = ''
                }, 500)
                break;
        }
        saveStatus(result)
    }
    setCallback() {
        this.shadowRoot.querySelector('.card').classList.add('active')
        this.shadowRoot.querySelector('.question').classList.remove('active')
        this.shadowRoot.querySelector('.result').classList.add('active')
        let gameFinish = false
        const result = getStatus()
        Object.keys(result).forEach(key => {
            console.log(result[key])
            if (result[key] <= 0) {
                gameFinish = true
            }
        })
        if (!gameFinish) {
            this.shadowRoot.getElementById('result-text').textContent = this.currentCallback[preferredLanguage()]
        } else {
            if (this.currentCallback.result != 'fired') {
                this.shadowRoot.getElementById('result-text').textContent = 'Bir takım huzursuluklara sebep olduğunuz için kovuldunuz 🥵🥵🥵'
            }
        }

        this.shadowRoot.getElementById('callback-close').addEventListener('click', _ => {
            if (this.currentCallback.result == 'fired' || gameFinish) {
                resetGame()
            } else {
                this.callbackOpen = false
                this.openQuestion = false
                this.shadowRoot.querySelector('.card').classList.remove('active')
                this.shadowRoot.querySelector('.result').classList.remove('active')
            }
        })
    }
}

customElements.define('app-question', AppQuestion)