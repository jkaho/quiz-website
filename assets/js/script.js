var startBtn = document.querySelector("#start-quiz");
var startDiv = document.querySelector("#start");
var questionsDiv = document.querySelector("#questions");

var questionNumberEl = document.querySelector("#question-number");
var questionTextEl = document.querySelector("#question");
var firstBtn = document.querySelector("#first-option");
var secondBtn = document.querySelector("#second-option");
var thirdBtn = document.querySelector("#third-option");
var fourthBtn = document.querySelector("#fourth-option");
var questionCounter = 20;
var questionNumber = 1;

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