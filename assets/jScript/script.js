// variables
const start = document.querySelector ('.start')
const questionContainerElement = document.querySelector('#question-container') 
const questionElement = document.querySelector('#question')
const answer1 = document.querySelector('#an1')
const answer2 = document.querySelector('#an2')
const answer3 = document.querySelector('#an3')
const answer4 = document.querySelector('#an4')
const answerButtons = document.querySelector('.btn-box')
const colorElement = document.querySelector('.container')
const submitButton = document.querySelector('#submit')
const scoreForm = document.querySelector('.score-form')
const highScores = document.querySelector('.scores-container')
let timer = document.querySelector('.timer')
let score = document.querySelector('.score')
let i =0;
let x =0;
var count;
var points= 0;

// Questions and Answers
const question1 = {  Q1: "What year was JavaScript created?"}
const A1 = [{1:'1999'},
            {2:'1995'},
            {3:'1989'},
            {4:'2001'}]

const question2 = {  Q2: 'Which built-in method removes the last element from an array and returns that element?'}
const A2 = [{1:'last()'},
            {2:'poop()'},
            {3:'pop()'},
            {4:'bash()'}]

const question3 = {  Q3: "Which built-in method returns the string representation of the number's value?"}
const A3 = [{1:'toString()'},
            {2:'toNumber()'},
            {3:'toValue()'},
            {4:'toSpring()'}]
                     
const question4 = {  Q4: 'Who created Javascript'}
const A4 = [{1:'Adolf Hitler'},
            {2:'Brandon Psych'},
            {3:'Sir Lewis Hamilton'},
            {4:'Brendan Eich'}]

const question5 = {  Q5: "Which of the following is not a valid JavaScript variable name?"}
const A5 = [{1:'$tomRiddle'},
            {2:'2pac'},
            {3:'GeraltOfRivia'},
            {4:'_yenniFer'}]


const questions = [question1.Q1, question2.Q2, question3.Q3, question4.Q4, question5.Q5];
const answers = [A1,A2,A3,A4,A5];


// Start Button Event Listener and Function
start.addEventListener('click', startQuiz)

function startQuiz() {
    highScores.classList.add('hide')
    score.innerText = 'score: '+ 0;
    points = 0;
    timer.innerText = 41
    start.classList.add('hide')
    timer.classList.remove('hide')
    score.classList.remove('hide')
    questionContainerElement.classList.remove('hide')
    startTimer()
    setNextQuestion()
    count = setInterval(startTimer, 1000)
}

// Timer
function startTimer() {
    if (timer.innerText>0) {
        timer.innerText -=1
}   else {endQiuz()}
}

// End Function
function endQiuz() {
    reset()
    questionContainerElement.classList.add('hide')
    scoreForm.classList.remove('hide')
}

// Reset Function
function reset() {
    i = 0;
    x = 0;
    clearInterval(count)
}

// Correct Answer Function
function correct() {
    points += 10;
    colorElement.classList.add('yay');
    console.log('correct');
    score.innerText = 'score: '+ points;

}

// Incorrect Answer Function
function incorrect() {
    colorElement.classList.add('boo')
    if(timer.innerText>10) {
    timer.innerText -=10}
    else {timer.innerText=0,
        endQiuz()}
    

    console.log('wrong')
}

// Next Question Functions
function answerClick() {
    if (i > questions.length - 2) {
        setTimeout(endQiuz, 150);
    } else {
    i++
    x++
    }
    setTimeout(setNextQuestion, 150)
} 

function setNextQuestion() {
        colorElement.classList.remove('yay','boo');
         let nextQuestion = questions[i];
         let nextAnswer = answers[x];
         questionElement.innerText = nextQuestion;
         answer1.innerText = nextAnswer[0][1];
         answer2.innerText = nextAnswer[1][2];
         answer3.innerText = nextAnswer[2][3];
         answer4.innerText = nextAnswer[3][4];
         answerButtons.addEventListener('click', answerClick)    
}

// Check Answer Functions
answer1.addEventListener('click', checkAnswer1)
function checkAnswer1() {
    if (questionElement.innerText == "What year was JavaScript created?"){
        correct()
    } else if (questionElement.innerText == "Which built-in method returns the string representation of the number's value?"){
        correct()
    } else {incorrect()}
}

answer2.addEventListener('click', checkAnswer2)
function checkAnswer2() {
    if (questionElement.innerText === "Which of the following is not a valid JavaScript variable name?"){
        correct()
    } else{incorrect()}
}

answer3.addEventListener('click', checkAnswer3)
function checkAnswer3() {
    if (questionElement.innerText === 'Which built-in method removes the last element from an array and returns that element?'){
        correct()
    } else {incorrect()}
}

answer4.addEventListener('click', checkAnswer4)

function checkAnswer4() {
    if (questionElement.innerText === 'Who created Javascript') {
        correct()
    } else {incorrect()}
}

//Submit Name and Show High Score Functions
var initials = document.querySelector('#name')
var highScoresList = document.querySelector('.highscores')
var highScoreArray = [];



submitButton.addEventListener('click', submitName)
function submitName() {
    highScoreArray.push(points + ' ' + initials.value);
    highScoreArray.sort();
    highScoreArray.reverse();
    localStorage.setItem('storageArray', highScoreArray)
    scoreForm.classList.add('hide')
    timer.classList.add('hide')
    score.classList.add('hide')
    start.classList.remove('hide')
    showHighScores()
    }

function showHighScores() {
        highScores.classList.remove('hide')
        highScoresList.innerText = highScoreArray;
    }

