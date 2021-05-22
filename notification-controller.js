const div = document.createElement('div')
div.classList.add('notification')
document.body.appendChild(div)

document.addEventListener('show-notification', event => {
    div.classList.add('active')
    div.textContent = event.detail.text
    setTimeout(() => {
        div.classList.remove('active')
        div.textContent = ''
    }, 2000)
})

function customNotificationEvent(text) {
    return new CustomEvent('show-notification', {
        detail: {
            text
        }
    })
}