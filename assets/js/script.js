var startBtn = document.querySelector("#start-quiz");
var startDiv = document.querySelector("#start");
var questionsDiv = document.querySelector("#questions");

var countdownEl = document.querySelector("#countdown");
var timeLeft = 120;

function timer() {
    var timerVar = setInterval(function() {
        if (timeLeft < 0) {
            clearInterval(timerVar);
            countdownEl.innerHTML = 0;
            questionsDiv.setAttribute("class", "hide");
            completeDiv.setAttribute("class", "show");
            timeLeft = 120;
            timeLeft = 120;
        } else {
            countdownEl.innerHTML = timeLeft;
        }
        timeLeft--;
    }, 1000);
}

startBtn.addEventListener("click", timer);