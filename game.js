
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
    let rounds = ROUNDS;

    const roundsText = document.querySelector('.rounds');
    const resultText = document.querySelector('.result-text');
    const playerScoreDiv = document.querySelector('#you-score');
    const computerScoreDiv = document.querySelector('#computer-score');
    roundsText.textContent = rounds + ' rounds left';

    function inner(playerSelection) {
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result == WIN) {
            rounds--;
            playerScore++;
            resultText.textContent = "Computer chose "
            + computerSelection + ". You won this round!";
        } else if (result == LOSE) {
            rounds--;
            resultText.textContent = "Computer chose "
            + computerSelection + ". You lost this round.";
            computerScore++;
        } else {
            resultText.textContent = "Computer chose " + computerSelection + " too!";
        }
        playerScoreDiv.textContent = playerScore;
        computerScoreDiv.textContent = computerScore;

        if (rounds == 1) {
            roundsText.textContent = "Final round!";
        } else if (rounds > 0) {
            roundsText.textContent = rounds + " rounds left";
        } else {
            if (playerScore > computerScore) {
                roundsText.textContent = "You won the game! 🎉";
            } else {
                roundsText.textContent = "You lost the game 😔";
            }
            playerScore = 0;
            computerScore = 0;
            rounds = ROUNDS;
            resultText.textContent = "Make a selection to start a new game!"
        }
    };

    document.getElementById('scissors').onclick = (e) => inner('scissors');

    document.getElementById('paper').onclick = (e) => inner('paper');

    document.getElementById('rock').onclick = (e) => inner('rock');
}

game();