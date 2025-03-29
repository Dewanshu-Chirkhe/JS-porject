let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessLot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numsGuess = 10;

let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (event) {
        event.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100");
    } else {
        prevGuess.push(guess)
        if(numsGuess <= 1){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}.`)
            endGame()
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Higher`);
    }
    else{
        displayMessage(`Lower`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessLot.innerHTML += `${guess} , `
    numsGuess--;
    remaining.innerHTML = `${numsGuess}`
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click' , function(event){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = '';
        guessLot.innerHTML = '';
        numsGuess = 10;
        remaining.innerHTML = `${numsGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}
