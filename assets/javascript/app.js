//declare variables
var correctAnswers=0;
var incorrectAnswers=0;
var timer=0;


//make questions (object??)
var questions = [
{
    question: "What year was Henry VIII born?",
    answers: ["1400", "1421", "1491", "1501"],
    correct: "1421"
},
{
    question: "What house did Henry VIII belong to?",
    answers: ["Lannister", "Windsor", "Tudor", "Hanover",],
    correct: "Tudor",
},
{
    question: "How many wives did Henry VIII have?",
    answers: ["Four", "Five", "Six", "Eight",],
    correct: "Six",
},
{
    question: "Henry VIII's older brother tragically died in 1503 at the age of 15. What was his name? ",
    answers: ["Arthur", "Edward", "Henry", "Charles",],
    correct: "Arthur",
},
{
question: "Who was Henry VIII's first wife?",
    answers: ["Anne Boleyn", "Jane Seymour", "Catherine of Aragon", "Catherine Howard", ],
    correct: "Catherine of Aragon",
},
{
question: "What happened to  Henry VIII's wife Anne Boleyn?",
    answers: ["Widowed", "Beheaded", "Divorced", "Died of Natural Causes",],
    correct: "Beheaded",
},
{
question: "Which wife is Henry VIII buried next to?",
    answers: ["Anne Boleyn", "Jane Seymour", "Catherine of Aragon", "Anne of Cleves", ],
    correct: "Jane Seymour",
},
]
var count=0;
var plus=count + 1
var showTrivia=""
var showTrivia2=""
var number=10;

$("#start").click(startGame);
function startGame () {
$(this).hide();
$("#correct").text("Number Correct: ")
$("#incorrect").text("Number Incorrect: ")
showTrivia = setInterval(decrement, 1000);
function decrement() {
number--;
$("#timer").html("Time Left: " + number);
if (number===0) {
stop2()
}
}
if (count===questions.length) {
stop ();
console.log(count)
console.log(questions.length)
}
runGame();
}

$("#triviaQuestions2").on("click", function (event) {
runGame ();
event.preventDefault();
console.log(event.target)
var userGuess=event.target.textContent
console.log(userGuess)
var countMinus=questions[count-2].correct
console.log(countMinus)
if (userGuess===countMinus) {
correctAnswers=correctAnswers+1;
console.log(correctAnswers)
$("#correct").html("Number Correct: "+  + correctAnswers)
}else
incorrectAnswers=incorrectAnswers+1;
$("#incorrect").html("Number Incorrect: " + + incorrectAnswers)

if (count===questions.length) {
stop ();
console.log(count)
console.log(questions.length)
}

number=10;

if (number===0) {
stop2();
}
})
function displayAnswers() {
var triviaDiv=$("#triviaQuestions2");
var newAnswersDiv=$("<button>" + questions[count].answers.join("<button>") + "</button>");
triviaDiv.html(newAnswersDiv);
}
function displayQuestion() {
var triviaDiv=$("#triviaQuestions");
var newTriviaDiv=$("<div>" + questions[count].question + "</div>");
triviaDiv.html(newTriviaDiv);
}
function displayAnswer() {
var triviaDiv=$("#answers");
var newAnswerDiv=$("<div>" + questions[count].correct + "</div>");
console.log(newAnswerDiv)
triviaDiv.html(newAnswerDiv);
}
function runGame () {
showTrivia2 = setInterval(10000);
console.log(setInterval)
displayQuestion();
displayAnswers();
count=count + 1;
if (count===questions.length) {
stop ();
console.log(count)
console.log(questions.length)
}
if (number===0) {
// clearInterval(showTrivia)
stop2();
}
}

function stop () {
clearInterval(showTrivia)
$("#thanks").html("Game Over! Thank you for playing!")
$("#triviaQuestions").empty();
$("#triviaQuestions2").empty();
$("#timer").hide();
var playDiv=$("#play-again")
var playButton=$("<button class='click'>" + "Play Again" + "</button>")
playDiv.html(playButton)
}


$(document).on("click", '.click', function () {
$(this).hide();
$("#timer").show();
$("#thanks").empty();

count=0;
correctAnswers=0;
incorrectAnswers=0;
$("#correct").text("Number Correct: ")
$("#incorrect").text("Number Incorrect: ")
number=10;
showTrivia = setInterval(decrement, 1000);
function decrement() {
number--;
$("#timer").html("Time Left: " + number);
if (number===0) {
stop2()
}
}
runGame();

})


function stop2 () {
// clearInterval(showTrivia)
incorrectAnswers=incorrectAnswers+1;
$("#incorrect").html("Number Incorrect: " + + incorrectAnswers)
displayQuestion();
displayAnswers();
number=10;
count++;
if (count===questions.length) {
stop ();
// clearInterval(showTrivia)
console.log(count)
console.log(questions.length)
}

}
