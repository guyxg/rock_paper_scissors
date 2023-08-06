
const TIE = 1;
const WIN = 2;
const LOSE = 3;
const ROUNDS = 5;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let i = Math.floor(Math.random() * choices.length);
    return choices[i];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.trim().toLowerCase();

    if (playerSelection == computerSelection) {
        return TIE;
    }

    switch(playerSelection) {
        case 'rock':
            if (computerSelection == 'paper') {
                return LOSE;
            } else {
                return WIN;
            }
            break;
        case 'paper':
            if (computerSelection == 'scissors') {
                return LOSE;
            } else {
                return WIN;
            }
            break;
        case 'scissors':
            if (computerSelection == 'rock') {
                return LOSE;
            } else {
                return WIN;
            }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < ROUNDS; i++) {
        // const playerSelection = prompt("What's your selection?");
        let result = playRound(playerSelection, getComputerChoice());
        if (result == WIN) {
            console.log("You win!");
            playerScore++;
        } else if (result == LOSE) {
            console.log("You lose!");
            computerScore++;
        } else {
            console.log("It's a tie!");
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore == computerScore) {
        console.log("The game ended in a tie.");
    } else {
        console.log("You lost the game.");
    }
}

game();