const playerHand = document.getElementById("playerHand");
const computerHand = document.getElementById("computerHand");

const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

const head = document.getElementById("head");
const subHead = document.getElementById("subHead");

const choiceBox = document.querySelectorAll(".choiceBox");

// got player's answer from button
choiceBox.forEach(function (item) {
    item.addEventListener('click', e => playGame(e.currentTarget.id))
})

//keep track of player and computer's score
let humanScore = 0;
let comScore = 0;

//get computer's answer by random between Rock Paper Scissors
function getComputerChoice() {
    //random number from 3 numbers (act as Rock Paper Scissors)
    let comChoice = Math.floor(Math.random() * 3);
    
    // get the answer base on number we get
    // return computer's answer
    switch (comChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }

}

let roundNum = 1;
// compare player's answer and computer's answer who will win
// display score
function playRound(humanChoice, computerChoice) {
    if (// win condition
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice == "Paper")
    ) {
        head.textContent = `Round ${roundNum++} : You win!`;
        subHead.textContent = `${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else if (humanChoice === computerChoice) {
        head.textContent = `Round ${roundNum++} : It's a tie!`;
        subHead.textContent = `${humanChoice} is Tie with ${computerChoice}`;
    } else {
        head.textContent = `Round ${roundNum++} : You lose!`;
        subHead.textContent = `${humanChoice} loses to ${computerChoice}`;
        comScore++;
    }
    // show player and computer's score
    playerScore.textContent = `Player : ${humanScore}`;
    computerScore.textContent = `Computer : ${comScore}`;
}

// play game
function playGame(humanSelection) {
    // change display of human' hand
    showChoice(playerHand, humanSelection);

    // get computer's choice
    const computerSelection = getComputerChoice();
    // change display of computer's hand
    showChoice(computerHand, computerSelection);

    // check who's win
    playRound(humanSelection, computerSelection);

    if (humanScore === 5 || comScore === 5) {
        gameEND();
    }

}

function showChoice(whoHand, selection) {
    switch (selection) {
        case "Rock":
            whoHand.textContent = String.fromCharCode(9994);
            break;
        case "Paper":
            whoHand.textContent = String.fromCharCode(9995);
            break;
        case "Scissors":
            whoHand.textContent = String.fromCharCode(9996);
            break;
    }
}

function gameEND() {
    const alertBox = document.getElementById("customAlert");
    const result = document.getElementById("result");
    const score = document.getElementById("score");

    result.textContent = (humanScore == 5) ? "You Win!!!" : "You Lose!!!";
    score.innerText = `Your score : ${humanScore} \nComputer's score : ${comScore}`

    alertBox.style.display = "flex";

    const playAgain = document.getElementById("playAgain");
    playAgain.addEventListener('click',
        function () {
            window.location.reload();
        }
    )
}