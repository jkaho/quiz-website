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
var questionBin = [];

var startIndex = Math.floor(Math.random() * questionArr.length);
var startQuestion = questionArr[startIndex];
questionBin.push(startIndex);

function showQuestions(event) {
    event.preventDefault();
        questionCounter--; // 14 
        questionNumberEl.textContent = questionNumber;
        questionTextEl.textContent = startQuestion.question;
        firstBtn.textContent = startQuestion.firstOption;
        secondBtn.textContent = startQuestion.secondOption;
        thirdBtn.textContent = startQuestion.thirdOption;
        fourthBtn.textContent = startQuestion.fourthOption;
        // questionNumber++; // 2

        startDiv.setAttribute("class", "hide");
        questionsDiv.setAttribute("class", "show");
        console.log(startIndex);
}

var currentIndex = Math.floor(Math.random() * questionArr.length); // Question 2

function checkBin() {
    for (var i = 0; i < 1; i++) {
        if (questionBin.includes(currentIndex) && questionBin.length < 21) {
            currentIndex = Math.floor(Math.random() * questionArr.length);
            i--;
        } 
    }
}
checkBin();
questionBin.push(currentIndex);

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
startBtn.addEventListener("click", showQuestions);