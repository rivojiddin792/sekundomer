let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer = null;

function startTimer() {
    if (timer === null) {
        timer = setInterval(runTimer, 10);
        document.getElementById('startBtn').style.display = 'none';
        document.getElementById('stopBtn').style.display = 'inline-block';
        document.getElementById('resetBtn').style.display = 'inline-block';
    }
}

function runTimer() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    document.getElementById('millisecond').textContent = formatTime(milliseconds, 3);
    document.getElementById('second').textContent = formatTime(seconds, 2);
    document.getElementById('minute').textContent = formatTime(minutes, 2);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
    document.getElementById('stopBtn').style.display = 'none';
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('resetBtn').style.display = 'inline-block';
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('millisecond').textContent = '000';
    document.getElementById('second').textContent = '00';
    document.getElementById('minute').textContent = '00';
    document.getElementById('stopBtn').style.display = 'none';
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('resetBtn').style.display = 'none';
}

function formatTime(time, digits) {
    return time.toString().padStart(digits, '0');
}

