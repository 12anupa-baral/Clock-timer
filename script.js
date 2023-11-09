var timerInterval;
var timerRunning = false;
var remainingTime = 5 * 60;

function startTimer() {
  if (!timerRunning) {
    var display = document.querySelector("#timer");
    timerInterval = setInterval(function () {
      var minutes = parseInt(remainingTime / 60, 10);
      var seconds = parseInt(remainingTime % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--remainingTime < 0) {
        clearInterval(timerInterval);
        timerRunning = false;
        remainingTime = 5 * 60;
        display.textContent = "05:00";
      }
    }, 1000);

    timerRunning = true;
  }
}

function pauseResumeTimer() {
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
  } else {
    startTimer();
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  var display = document.querySelector("#timer");
  display.textContent = "05:00";
  remainingTime = 5 * 60;
}
