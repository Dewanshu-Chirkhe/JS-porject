let userscore = 0;
let computerscore = 0;
const winningscore = 3;
const choices = ["Rock", "Paper", "Scissor"];

const userchoiceDisplay = document.querySelector(".userchoice");
const computerchoiceDisplay = document.querySelector(".computerchoice");
const userscoreDisplay = document.querySelector(".userscore");
const computerscoreDisplay = document.querySelector(".computerscore");
const announcement = document.querySelector(".announcement");

function getComputerChoice() {
    const randIdx = Math.floor(Math.random() * 3);
    return choices[randIdx];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "Draw";
    if (
        (userChoice === "Rock" && computerChoice === "Scissor") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissor" && computerChoice === "Paper")
    ) {
        return "user";
    } else {
        return "computer";
    }
}

function playGame(userChoice) {
    if (userscore === winningscore || computerscore === winningscore) {
        alert("Game over! Refresh to play again.");
        return;
    }

    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);

    userchoiceDisplay.textContent = `Your Choice : ${userChoice}`;
    computerchoiceDisplay.textContent = `Computer's Choice : ${computerChoice}`;

    if (winner === "user") {
        userscore++;
    } else if (winner === "computer") {
        computerscore++;
    }

    userscoreDisplay.textContent = `Your Score : ${userscore}`;
    computerscoreDisplay.textContent = `Computer's Score : ${computerscore}`;

    if (userscore === winningscore) {
        announcement.innerHTML = "<h2>Hooray !! You Won</h2>";
    } else if (computerscore === winningscore) {
        announcement.innerHTML = "<h2>You Lost , Try again</h2>";
    }
}

document
    .querySelector("#rock")
    .addEventListener("click", () => playGame("Rock"));

document
    .querySelector("#paper")
    .addEventListener("click", () => playGame("Paper"));

document
    .querySelector("#scissor")
    .addEventListener("click", () => playGame("Scissor"));
