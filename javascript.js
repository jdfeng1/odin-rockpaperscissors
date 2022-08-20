let getComputerChoice = () => {
    let randCounter = Math.floor(Math.random()*3) + 1;
    return (randCounter === 1) ? 'rock' :
    (randCounter === 2) ? 'paper' : 'scissors';
}
let resultDiv = document.getElementById('result');

let scoreBoard = document.getElementById('scoreboard');

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

resultDiv.textContent = playRound('scissors', getComputerChoice())

