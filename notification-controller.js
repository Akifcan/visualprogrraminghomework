const div = document.createElement('div')
div.classList.add('notification')
document.body.appendChild(div) //we will show notifications on this element when call the custo show-notification event

document.addEventListener('show-notification', event => { //listen event
    div.classList.add('active')
    div.textContent = event.detail.text
    setTimeout(() => {
        div.classList.remove('active')
        div.textContent = ''
    }, 2000)
})

function customNotificationEvent(text) { //trigger custom event
    return new CustomEvent('show-notification', {
        detail: {
            text
        }
    })
}