var timerInterval;
var timerRunning = false;
var remainingTime = 0;

function startTimer() {
  if (!timerRunning) {
    var inputTime = document.getElementById("timeInput").value;
    if (inputTime && inputTime > 0) {
      remainingTime = inputTime * 60;

      var display = document.querySelector("#timer");
      display.textContent = formatTime(remainingTime);

      timerInterval = setInterval(function () {
        display.textContent = formatTime(remainingTime);

        if (--remainingTime < 0) {
          clearInterval(timerInterval);
          timerRunning = false;
          remainingTime = 0;
          display.textContent = "00:00";
        }
      }, 1000);

      timerRunning = true;
    } else {
      alert("Please enter a valid time.");
    }
  }
}

function pauseResumeTimer() {
  var pauseResumeButton = document.querySelector("button:nth-of-type(2)");

  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
    pauseResumeButton.innerText = "Resume";
  } else {
    if (remainingTime > 0) {
      // Resume the timer from where it was paused
      timerInterval = setInterval(function () {
        var display = document.querySelector("#timer");
        display.textContent = formatTime(remainingTime);

        if (--remainingTime < 0) {
          clearInterval(timerInterval);
          timerRunning = false;
          remainingTime = 0;
          display.textContent = "00:00";
          pauseResumeButton.innerText = "Resume";
        }
      }, 1000);

      timerRunning = true;
      pauseResumeButton.innerText = "Pause";
    } else {
      alert("The timer has already reached zero.");
    }
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  var display = document.querySelector("#timer");
  display.textContent = "00:00";
  remainingTime = 0;
}

function formatTime(timeInSeconds) {
  var minutes = parseInt(timeInSeconds / 60, 10);
  var seconds = parseInt(timeInSeconds % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return minutes + ":" + seconds;
}
