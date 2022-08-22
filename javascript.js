let getComputerChoice = () => {
    let randCounter = Math.floor(Math.random()*3) + 1;
    return (randCounter === 1) ? 'rock' :
    (randCounter === 2) ? 'paper' : 'scissors';
}
let resultDiv = document.getElementById('result');
let playerSelector = document.getElementById('playerSelector');
let submit = document.getElementById('submit');
let scoreBoard = document.getElementById('scoreboard');
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore")
let final = document.getElementById('final');

playerScore.textContent = '0';
computerScore.textContent = '0';


let playRound = (playerSelection, computerSelection) => {

    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return 'LOSE: ROCK < PAPER'
        }
        if (computerSelection == 'scissors') {
            return 'WIN: ROCK > SCISSORS'
        }
        if (computerSelection == 'rock') {
            return 'TIE: ROCK = ROCK'
        }
    }
    if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            return 'TIE: PAPER = PAPER'
        }
        if (computerSelection == 'scissors') {
            return 'LOSE: PAPER < SCISSORS'
        }
        if (computerSelection == 'rock') {
            return 'WIN: PAPER > ROCK'
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            return 'WIN: SCISSORS > PAPER'
        }
        if (computerSelection == 'scissors') {
            return 'TIE: SCISSORS = SCISSORS'
        }
        if (computerSelection == 'rock') {
            return 'LOSE: SCISSORS < ROCK'
        }
    } else {
        return 'NAW: CHECK SPELLING'
    }
}

let submitChoice = () => {
    resultDiv.textContent = playRound(playerSelector.value, getComputerChoice());
    playerSelector.value = '';

    if (resultDiv.textContent.slice(0,1) == 'W') {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else if (resultDiv.textContent.slice(0,1) == 'L') {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }

    if (playerScore.textContent == '3' || computerScore.textContent == '3') {
        resultDiv.textContent = 'GAME OVER';
        if (playerScore.textContent == '3') {
            final.textContent = 'YOU WIN';
        } else {
            final.textContent = 'YOU LOSE';
        }
        playerSelector.disabled = true;
        submit.textContent = 'RESET';
    }
}

let resetGame = () => {
    if (submit.textContent == 'RESET') {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    final.textContent = '';
    submit.textContent = 'SUBMIT';
    playerSelector.disabled = false;
    }
}

submit.addEventListener('click', resetGame);
submit.addEventListener('click', submitChoice);