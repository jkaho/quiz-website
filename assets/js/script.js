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

var completeDiv = document.querySelector("#complete");
var completeMsg = document.querySelector("#complete-msg");
var userScoreEl = document.querySelector("#user-score");
var userScoreMsgEl = document.querySelector("#user-score-msg");
var userScore = 0;

var highscoresDiv = document.querySelector("#highscores");

var questionBin = [];


var startIndex = Math.floor(Math.random() * questionArr.length);
var startQuestion = questionArr[startIndex];
questionBin.push(startIndex);

function showQuestions(event) {
    event.preventDefault();
        questionCounter--; 
        questionNumberEl.textContent = questionNumber;
        questionTextEl.textContent = startQuestion.question;
        firstBtn.textContent = startQuestion.firstOption;
        secondBtn.textContent = startQuestion.secondOption;
        thirdBtn.textContent = startQuestion.thirdOption;
        fourthBtn.textContent = startQuestion.fourthOption;

        startDiv.setAttribute("class", "hide");
        questionsDiv.setAttribute("class", "show");
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

var answerBtnDiv = document.querySelector("#answer-buttons");
var nextBtn = document.querySelector("#next-question");
var nextDiv = document.querySelector("#next-div");

function scoreIncrement(event) {
    event.preventDefault();
    event.stopPropagation();
    
    var currentQuestion = questionArr[currentIndex];

    if (event.target.matches("button")) {
        if (questionNumber == 1 && event.target.matches(startQuestion.correctAnswer) === true) {
            userScore++;

        } else if (questionNumber == 1 && event.target.matches(startQuestion.correctAnswer) === false){
            timeLeft -= 5;

        } else if (event.target.matches(currentQuestion.correctAnswer) === true) {
            userScore++;

        } else {
            timeLeft -= 5;
        
        }
        firstBtn.setAttribute("disabled", "disabled");
        secondBtn.setAttribute("disabled", "disabled");
        thirdBtn.setAttribute("disabled", "disabled");
        fourthBtn.setAttribute("disabled", "disabled");
        nextDiv.setAttribute("class", "show");
    } 
}

function changeQuestions(event) { 
    event.preventDefault();
    event.stopPropagation();
    nextDiv.setAttribute("class", "hide");

    firstBtn.removeAttribute("disabled");
    secondBtn.removeAttribute("disabled");
    thirdBtn.removeAttribute("disabled");
    fourthBtn.removeAttribute("disabled");

    var currentQuestion = questionArr[currentIndex];
    
    currentIndex = Math.floor(Math.random() * questionArr.length);
    checkBin();
    questionBin.push(currentIndex);
    currentQuestion = questionArr[currentIndex];
    
    if (questionCounter > 0) {
        questionCounter--;
        questionNumber++;
        questionNumberEl.textContent = questionNumber;
        questionTextEl.textContent = currentQuestion.question;
        firstBtn.textContent = currentQuestion.firstOption;            
        secondBtn.textContent = currentQuestion.secondOption;
        thirdBtn.textContent = currentQuestion.thirdOption;
        fourthBtn.textContent = currentQuestion.fourthOption;
                
    } else {
        userScoreEl.textContent = userScore + " out of " + 20 + " points";
        if (userScore <= 3) {
            userScoreMsgEl.textContent = "... Really?";
        } else if (userScore > 3 && userScore <= 5) {
            userScoreMsgEl.textContent = "... Have another go.";
        } else if (userScore > 5 && userScore <= 7) {
            userScoreMsgEl.textContent = "... How many did you need to guess?";
        } else if (userScore > 7 && userScore <= 9) {
            userScoreMsgEl.textContent = "... You can do better.";
        } else if (userScore > 9 && userScore <= 11) {
            userScoreMsgEl.textContent = ", not bad, but not great either.";
        } else if (userScore > 11 && userScore <= 13) {
            userScoreMsgEl.textContent = ", good job!";
        } else if (userScore > 13 && userScore <= 15) {
            userScoreMsgEl.textContent = ", you're pretty knowledgeable!";
        } else if (userScore > 15 && userScore <= 17) {
            userScoreMsgEl.textContent = ", wow, impressive!";
        } else if (userScore > 17 && userScore <= 19) {
            userScoreMsgEl.textContent = ", you cheated, didn't you?";
        } else {
            userScoreMsgEl.textContent = "... WHO ARE YOU?!";
        }
        questionsDiv.setAttribute("class", "hide");
        completeDiv.setAttribute("class", "show");
        questionBin = [];
        questionCounter = 20;
        questionNumber = 1;
        timeLeft = 120;
        return;  
    }
}

var countdownEl = document.querySelector("#countdown");
var timeLeft = 120;

function timer() {
    var timerVar = setInterval(function() {
        if (timeLeft < 0) {
            clearInterval(timerVar);
            countdownEl.innerHTML = 0;
            completeMsg.textContent = "Sorry, time's up!"

            userScoreEl.textContent = userScore + " out of " + 20 + " points";
            if (userScore <= 3) {
                userScoreMsgEl.textContent = "... Really?";
            } else if (userScore > 3 && userScore <= 5) {
                userScoreMsgEl.textContent = "... Have another go.";
            } else if (userScore > 5 && userScore <= 7) {
                userScoreMsgEl.textContent = "... How many did you need to guess?";
            } else if (userScore > 7 && userScore <= 9) {
                userScoreMsgEl.textContent = "... You can do better.";
            } else if (userScore > 9 && userScore <= 11) {
                userScoreMsgEl.textContent = ", not bad, but not great either.";
            } else if (userScore > 11 && userScore <= 13) {
                userScoreMsgEl.textContent = ", good job!";
            } else if (userScore > 13 && userScore <= 15) {
                userScoreMsgEl.textContent = ", you're pretty knowledgeable!";
            } else if (userScore > 15 && userScore <= 17) {
                userScoreMsgEl.textContent = ", wow, impressive!";
            } else if (userScore > 17 && userScore <= 19) {
                userScoreMsgEl.textContent = ", you cheated, didn't you?";
            } else {
                userScoreMsgEl.textContent = "... WHO ARE YOU?!";
            }
            questionsDiv.setAttribute("class", "hide");
            completeDiv.setAttribute("class", "show");
            questionBin = [];
            questionCounter = 20;
            questionNumber = 1;
            timeLeft = 120;
        } else if (completeDiv.className === "show") {
            clearInterval(timerVar);
            timeLeft = 120;
        } else {
            countdownEl.innerHTML = timeLeft;
        }
        timeLeft--;
    }, 1000);
}

startBtn.addEventListener("click", timer);
startBtn.addEventListener("click", showQuestions);
answerBtnDiv.addEventListener("click", scoreIncrement);
nextBtn.addEventListener("click", changeQuestions);

var retakeBtn = document.querySelector("#retake");
var highscoreLink = document.querySelector("#view-highscores");

retakeBtn.addEventListener("click", function() {
    questionArrIndex = 0;
    userScore = 0;
    timeLeft = 120; 
    startDiv.setAttribute("class", "show");
    completeDiv.setAttribute("class", "hide");
    highscoreLink.setAttribute("class", "show");
})

highscoreLink.addEventListener("click", function() {
    startDiv.setAttribute("class", "hide");
    highscoresDiv.setAttribute("class", "show");
    highscoreLink.setAttribute("class", "hide");
})

var userInputEl = document.querySelector("#highscore-input");
var inputMessageEl = document.querySelector("#input-message");
var highscoreList = document.querySelector("#highscore-list");
var submitBtn = document.querySelector("#submit-highscore");
var returnBtn = document.querySelector("#go-to-start");

var userScores = [];

function renderScores() {
    highscoreList.innerHTML = "";
    var sortedUserScores = userScores.sort(function(a, b) {
        return b.userHighscore - a.userHighscore;
    });

    for (var i = 0; i < userScores.length; i++) {
  
       var li = document.createElement("li");
       li.textContent = sortedUserScores[i].userName + "'s score: " + sortedUserScores[i].userHighscore;
       li.setAttribute("index", i);
  
       highscoreList.appendChild(li);
    }
}

function initialise() {
    var storedScores = JSON.parse(localStorage.getItem("userScores"));
  
    if (storedScores !== null) {
      userScores = storedScores;
    }
  
    renderScores();
}

function storeScores() {
    localStorage.setItem("userScores", JSON.stringify(userScores));
}