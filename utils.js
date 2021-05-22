import { questions } from './assets/data/questions.js'

export const save = (key, value) => {
    localStorage[key] = value
}

export const get = (key) => {
    return JSON.parse(localStorage[key])
}

export const preferredLanguage = () => {
    return localStorage['language']
}

export const getString = (key) => {
    return localStorage[key]
}

export const isLoggedIn = _ => {
    if (localStorage['user']) {
        return true
    } else {
        return false
    }
}

export const generateRandomQuestion = () => {
    return questions.slice(1)[Math.floor(Math.random() * questions.slice(1).length)]
    // return questions[2]
}

export const getFirstQuestion = () => {
    return questions[0]
}

export const setStatus = (elements) => {
    const parsed = JSON.parse(localStorage['status'])
    const keys = Object.keys(parsed)
    keys.forEach(key => {
        const item = elements.find(element => element.id == key)
        item.textContent = parsed[key]
        if (parsed[key].toString().length < 3) {
            item.textContent += '%'
        } else {
            item.textContent += '$'
        }
    })
}

export const getStatus = () => {
    return JSON.parse(localStorage['status'])
}

export const saveStatus = (status) => {
    return localStorage['status'] = JSON.stringify(status)
}

export const resetGame = (redirect = true, deleteUser = true) => {
    localStorage['status'] = JSON.stringify({
        directors: 50,
        team: 50,
        money: 10000
    })
    if (deleteUser) {
        delete localStorage['user']
    }
    localStorage['firstQuestion'] = false
    if (redirect) {
        window.location.href = '../splash.html'
    } else {
        window.location.href = '../rooms/office.html'
    }
}

export const trueOrFalse = _ => {
    const booleans = [true, false]
    return booleans[Math.floor(Math.random() * booleans.length)]
}