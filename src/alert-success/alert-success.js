const alertMsg = document.querySelector('.js-alert')
let timerId = null
alertMsg.addEventListener('click', onClick)

showMsg()

function onClick(event) {
    hideMsg()
    clearTimeout(timerId)
}

function showMsg() {
    alertMsg.style.display = "inline-block"
    
   timerId = setTimeout(() => {
        console.log('settimeout')
        hideMsg()
    },2000)
}

function hideMsg() {
        alertMsg.style.display = "none"
}

