var timerInterval;
var timerRunning = false;
var remainingTime = 0;

function startTimer() {
  if (!timerRunning) {
    var inputTime = document.getElementById("timeInput").value;
    if (inputTime && inputTime > 0) {
      remainingTime = inputTime * 60;

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
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
    document.querySelector("button:nth-of-type(2)").innerText = "Resume";
  } else {
    startTimer();
    document.querySelector("button:nth-of-type(2)").innerText = "Pause";
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  var display = document.querySelector("#timer");
  display.textContent = "00:00";
  remainingTime = 0;
}
