let timer;
let elapsedTime = 0;
let running = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

document.getElementById('start').addEventListener('click', () => {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            elapsedTime += 10;
            displayTime();
        }, 10);
    }
});

document.getElementById('pause').addEventListener('click', () => {
    if (running) {
        clearInterval(timer);
        running = false;
    }
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timer);
    running = false;
    elapsedTime = 0;
    displayTime();
    laps.innerHTML = '';
});

document.getElementById('lap').addEventListener('click', () => {
    if (running) {
        const lapTime = formatTime(elapsedTime);
        const li = document.createElement('li');
        li.textContent = lapTime;
        laps.appendChild(li);
    }
});

function displayTime() {
    display.textContent = formatTime(elapsedTime);
}

function formatTime(ms) {
    const date = new Date(ms);
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
}
