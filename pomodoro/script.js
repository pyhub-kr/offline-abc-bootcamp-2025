const timeDisplay = document.getElementById('time');
const startStopButton = document.getElementById('start-stop');
const resetButton = document.getElementById('reset');

let timer;
let timeLeft = 1500; // 25 minutes in seconds
let isRunning = false;

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        timer = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft === 0) {
                clearInterval(timer);
                alert('Time for a break!');
            }
        }, 1000);
        startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    timeLeft = 1500;
    updateDisplay();
    startStopButton.textContent = 'Start';
    isRunning = false;
}

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);

updateDisplay();