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

let submitChoice = (event) => {
    let selection = '';
    if (event.target.nodeName == 'BUTTON') {
        if (event.target.id == 'paper') {
            selection = 'paper';
        }
        if (event.target.id == 'rock') {
            selection = 'rock';
        }
        if (event.target.id == 'scissors') {
            selection = 'scissors';
        }
    }
    
    if (submit.textContent == 'RESET') {
        submit.textContent = 'SUBMIT';
        playerScore.textContent = 0;
        computerScore.textContent = 0;
        resultDiv.textContent = '';
        final.textContent = '';
        playerSelector.disabled = false;
        
        return;
    }
    

    resultDiv.textContent = playRound(selection, getComputerChoice());
    

    if (resultDiv.textContent.slice(0,1) == 'W') {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else if (resultDiv.textContent.slice(0,1) == 'L') {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }

    if (playerScore.textContent == '3' || computerScore.textContent == '3') {
        resultDiv.textContent = 'GAME OVER';
        if (playerScore.textContent == '3') {
            final.textContent = 'YOU WIN';
            final.style.color = 'green';
        } else {
            final.textContent = 'YOU LOSE';
            final.style.color = 'red';
        }
        playerSelector.disabled = true;
        submit.textContent = 'RESET';
    }
}



playerSelector.addEventListener('click', submitChoice);