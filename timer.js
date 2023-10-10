const timer = document.getElementById('timer')
let elapsedTIME = parseInt(sessionStorage.getItem('elapsedTIME')) || 0
timer.textContent = `${elapsedTIME} seconds`

function update() {
  timer.textContent = `${elapsedTIME} seconds`
  elapsedTIME++
  sessionStorage.setItem('elapsedTIME', elapsedTIME)
}

setInterval(update, 1000)
