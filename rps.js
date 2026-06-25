const playerHand = document.getElementById("playerHand");
const computerHand = document.getElementById("computerHand");

const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

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

        }
    )
})



//pseudocode Rock Paper Scissors Game
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
    if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice == "Paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log(`Both Lose!! ${humanChoice} is Tie with ${computerChoice}`);
    } else {
        console.log(`You lose! ${humanChoice} loses to ${computerChoice}`);
        comScore++;
    }

    console.log(`Your score : ${humanScore}\nComputer's score : ${comScore}`);

    // show player and computer's score
    playerScore.textContent = `Player : ${humanScore}`;
    computerScore.textContent = `Computer : ${comScore}`;


}


// play game
function playGame(humanSelection) {

    const computerSelection = getComputerChoice();

    console.log("You select : " + humanSelection + "\nComputer selects : " + computerSelection);
    playRound(humanSelection, computerSelection);

}



/*
//declare result after 5 rounds
playGame(5);
let result;
if (humanScore > comScore) {
    result = "You win!";
} else if (humanScore < comScore) {
    result = "You lose!";
} else {
    result = "You're tie!";
}

console.log(`Play 5 rounds,\n${result}\nYour score : ${humanScore}\nComputer's score : ${comScore}`);
*/