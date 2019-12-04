setInterval(setClock, 1000)

const clockNumbers = document.querySelectorAll('.tick')
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

clockNumbers.forEach(tick => {
    const tickNumber = tick.classList[1]
    const rotation =  tickNumber * 6 - 0.5
    if (tickNumber % 5) {
        tick.classList.add('tick_minute')
    } else {
        tick.classList.add('tick_hour')
    }
    tick.style.transform = `rotate(${rotation}deg)`
})

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(el, rotRatio) {
    el.style.setProperty('--rotation', rotRatio * 360)
}

setClock()