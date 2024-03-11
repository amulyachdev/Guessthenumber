// Selecting elements


const guessEl = document.getElementById('guess');
const checkEl = document.getElementById('check');
const outputDisplayEl = document.getElementById('output-display');
const scoreEl = document.getElementById('score');
const highestScoreEl = document.getElementById('highest-score');
const playAgainEl = document.getElementById('play-again');
const bodyEl = document.querySelector('body');


let secretNumber = Math.floor(Math.random() * 20)+1;
let score = 20;

function displayMessage(message){
    outputDisplayEl.textContent = message;
}

checkEl.addEventListener('click' , function(){
    let guess = Number(guessEl.value);

    if(!guess) {
       displayMessage('No Number') ;
    } else if(guess === secretNumber){
        displayMessage('Correct Number');
        highestScoreEl.textContent = guess;
        bodyEl.style.backgroundColor = 'green';
        if(scoreEl > highestScoreEl){
            highestScoreEl = scoreEl;
        }
    } else if(guess!== secretNumber){
        if(score > 1){
             guess > secretNumber? displayMessage('Too high') : displayMessage('Too Low');
             score--;
            scoreEl.textContent = score;
        } else {
            displayMessage('You Lose the Game');
            scoreEl.textContent = 0;
            bodyEl.style.backgroundColor ='red';
        }
       
    }
})

function playAgain(){
    scoreEl.textContent = 20;
    highestScoreEl.textContent = 0;
   displayMessage("Start Guessing.....");
   bodyEl.style.backgroundColor = '#2e2d2d';
   secretNumber = Math.floor(Math.random() * 20)+1;

}

playAgainEl.addEventListener('click', playAgain);