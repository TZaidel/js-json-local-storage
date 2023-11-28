// const date1 =  Date.now()
// console.log(date1)

// setTimeout(() => {
//     const date2 =  Date.now()
// console.log(date2)
//     const dif = date2 - date1
//     console.log(dif)
// },6000)


const stopBtn=document.querySelector('.stop-btn')
const startBtn=document.querySelector('.start-btn')
const days = document.querySelector('[data-days')
const hours = document.querySelector('[data-hours')
const minutes = document.querySelector('[data-minutes')
const seconds = document.querySelector('[data-seconds')


class Timer{
    constructor({onTick}) {
        this.isActive = false,
            this.timerId = null,
            this.onTick = onTick
    }

    start() {
        const startTime = Date.now()
        if (this.isActive) {
            return
        }
        this.timerId = setInterval(() => {
            this.isActive = true
            const currentTime = Date.now()
            const deltaTime = currentTime - startTime
            const componentTime = this.getTimeComponent(deltaTime)

            this.onTick(componentTime)
        },1000)
    }

    stop() {
        this.isActive = false
        clearInterval(this.timerId)
    }
    
    
    pad(value) {
        return String(value).padStart(2, "0")
}

    getTimeComponent(time) {
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
        const secs = this.pad(Math.floor((time % (1000 * 60) / 1000)))
            return {hours, mins, secs}
}
}

const timer = new Timer({
    onTick: updateComponent,

})


function updateComponent({ hours, mins, secs }) {
    seconds.textContent = secs
}

startBtn.addEventListener('click', timer.start.bind(timer))

stopBtn.addEventListener('click', timer.stop.bind(timer))


/*
const timer = {
    isActive: false,
    timerId: null,

    start() {
        const startTime = Date.now()
           if (this.isActive) {
                return
            }
        this.timerId = setInterval(() => {
 
            this.isActive = true
            const currentTime = Date.now()
            const deltaTime = currentTime - startTime
            const componentTime = getTimeComponent(deltaTime)
            console.log( getTimeComponent(deltaTime))
            updateComponent(componentTime)
        }, 1000)
    },
    stop() {
        this.isActive = false
        clearInterval(this.timerId)
    }
}


startBtn.addEventListener('click', () => {
    timer.start()
})

stopBtn.addEventListener('click', () => {
    timer.stop()
})

function pad(value) {
    return String(value).padStart(2, "0")
}

function getTimeComponent(time) {
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
    const secs = pad(Math.floor((time % (1000 * 60) / 1000)))
    return {hours, mins, secs}
}

function updateComponent({ hours, mins, secs }) {
    seconds.textContent = secs
}*/