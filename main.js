let seconds = 0;
let timer;

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            document.getElementById('timer').innerText = seconds;
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
}
