const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors"

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return ROCK;
            break;
        case 1:
            return PAPER;
            break;
        case 2:
            return SCISSORS;
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    let lowerPlayerSelection = playerSelection.toLowerCase();
    playerSelection = lowerPlayerSelection.charAt(0).toUpperCase() + lowerPlayerSelection.slice(1);
    let winStatement = "You Win! " + playerSelection + " beats " + computerSelection;
    let loseStatement = "You Lose! " + playerSelection + " loses to " + computerSelection;
    let tieStatement = "You Tie! " + playerSelection + " ties " + computerSelection;

    if (playerSelection == ROCK) {
        if (computerSelection == ROCK) {
            return tieStatement
        } else if (computerSelection == PAPER) {
            return loseStatement
            
        } else {
            return winStatement
        }
    } else if (playerSelection == PAPER) {
        if (computerSelection == PAPER) {
            return tieStatement 
        } else if (computerSelection == SCISSORS) {
            return loseStatement
        } else {
            return winStatement   
        }
    } else {
        if (computerSelection == SCISSORS) {
            return tieStatement
        } else if (computerSelection == ROCK) {
            return loseStatement 
        } else {
            return winStatement   
        }
    } 
}
   
const buttons = document.querySelectorAll("button");
const msg = document.querySelector(".msg");
const scoreText = document.querySelector(".score");
const final = document.querySelector(".final");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        let playerSelection = button.innerHTML;
        let computerSelection = getComputerChoice();
        let statement = playRound(playerSelection, computerSelection)
        if (statement.includes("Win")) {
            playerScore += 1
        } else if (statement.includes("Lose")) {
            computerScore += 1
        }
        scoreText.innerHTML = "Player Score: " + playerScore + " Computer Score: " + computerScore
        msg.innerHTML = statement;
        if (playerScore == 5) {
            final.innerHTML = "You won the game! " + playerScore + " to " + computerScore
        } else if (computerScore == 5) {
            final.innerHTML = "You lost the game! " + playerScore + " to " + computerScore
        } else {
            console.log("You tied the game! " + playerScore + " to " + computerScore)
        }
    });
});


