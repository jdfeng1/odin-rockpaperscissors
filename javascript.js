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
        return 'CHECK SPELLING'
    }
}

let submitChoice = () => {

    if (submit.textContent == 'RESET') {
        submit.textContent = 'SUBMIT';
        playerScore.textContent = 0;
        computerScore.textContent = 0;
        resultDiv.textContent = '';
        final.textContent = '';
        playerSelector.disabled = false;
        return;
    }

    resultDiv.textContent = playRound(playerSelector.value.toLowerCase(), getComputerChoice());
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

function checkSubmit(e) {
    if (e.keyCode == 13) {
        submit.click();
    }
}
addEventListener('keyup',checkSubmit);
submit.addEventListener('click', submitChoice);