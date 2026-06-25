const playerHand = document.getElementById("playerHand");
const computerHand = document.getElementById("computerHand");

const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

const head = document.getElementById("head");
const subHead = document.getElementById("subHead");

const choiceBox = document.querySelectorAll(".choiceBox");

// change player's hand by button-choice
choiceBox.forEach(function (item) {
    item.addEventListener('click',
        function (e) {
            switch (e.currentTarget.id) {
                case "Rock":
                    playGame(e.currentTarget.id);
                    playerHand.textContent = String.fromCharCode(9994);
                    break;
                case "Paper":
                    playGame(e.currentTarget.id);
                    playerHand.textContent = String.fromCharCode(9995);
                    break;
                case "Scissors":
                    playGame(e.currentTarget.id);
                    playerHand.textContent = String.fromCharCode(9996);
                    break;
            }
            if (humanScore == 5 || comScore == 5) {
                gameEND();
            }
        }
    )
})


//keep track of player and computer's score
let humanScore = 0;
let comScore = 0;

//get computer's answer by random between Rock Paper Scissors
function getComputerChoice() {

    //random number from 3 numbers (act as Rock Paper Scissors)
    let comChoice = Math.floor(Math.random() * 3);

    // get the answer base on number we get
    // display computer's answer
    // return computer's answer to check who is win
    switch (comChoice) {
        case 0:
            computerHand.textContent = String.fromCharCode(9994);
            return "Rock";
        case 1:
            computerHand.textContent = String.fromCharCode(9995);
            return "Paper";
        case 2:
            computerHand.textContent = String.fromCharCode(9996);
            return "Scissors";
    }

}

// compare player's answer and computer's answer who will win
// display score
function playRound(humanChoice, computerChoice) {
    if (// win condition
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice == "Paper")
    ) {
        head.textContent = 'You win!';
        subHead.textContent = `${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else if (humanChoice === computerChoice) {
        head.textContent = `It's a tie!`;
        subHead.textContent = `${humanChoice} is Tie with ${computerChoice}`;
    } else {
        head.textContent = 'You lose!';
        subHead.textContent = `${humanChoice} loses to ${computerChoice}`;
        comScore++;
    }

    // show player and computer's score
    playerScore.textContent = `Player : ${humanScore}`;
    computerScore.textContent = `Computer : ${comScore}`;

}


// play game
function playGame(humanSelection) {
    // get computer's choice
    const computerSelection = getComputerChoice();

    // check who's win
    playRound(humanSelection, computerSelection);

}


function gameEND() {
    const alertBox = document.getElementById("customAlert");
    const result = document.getElementById("result");
    const score = document.getElementById("score");

    result.textContent = (humanScore == 5) ? "You Win!!!" : "You Lose!!!";
    score.innerText = `Your score : ${humanScore} \nComputer's score : ${comScore}`

    const playAgain = document.getElementById("playAgain");
    playAgain.addEventListener('click',
        function(){
            window.location.reload();
        }
    )

    alertBox.style.display = "flex";

}