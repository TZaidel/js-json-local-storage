// import BSN from "bootstrap.native";
var BSN = require("bootstrap.native");

const refs = {
    modal: document.querySelector('.modal')
}

const modal = new BSN.Modal('.modal')
const maxAttempts = 3
const promptDelay = 1000
let promptCounter = 0
let promptId = null
let hasSubscribe = false
const btnSubscribe = document.querySelector('.btn-primary')

openModal()

refs.modal.addEventListener('hide.bs.modal', openModal)
btnSubscribe.addEventListener('click', onSubscribeClick)

function onSubscribeClick() {
    hasSubscribe = true
    modal.hide()
}

function openModal() {
    if (maxAttempts === promptCounter
    || hasSubscribe) {
        clearTimeout(promptId)
        return
    }

    promptId = setTimeout(() => {
        modal.show()
        promptCounter += 1
}, promptDelay)
}


