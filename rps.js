//pseudocode Rock Paper Scissors Game
//keep track of player and computer's score
let humanScore = 0;
let computerScore = 0;

//get player's answer between Rock Paper Scissors
function getHumanChoice() {
    //get player's choice by prompt
    let answer = parseInt(prompt(`Please select your choice
        enter 1 if you want Rock
        enter 2 if you want Paper
        enter 3 if you want Scissors
        Ans: `));
    switch (answer) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }


}
//get computer's answer by random between Rock Paper Scissors
function getComputerChoice() {

    //random number from 3 numbers (act as Rock Paper Scissors)
    let comChoice = Math.floor(Math.random() * 3);

    //return the answer base on number we get
    switch (comChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }

}

//compare player's answer and computer's answer who will win
function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Rock") {
        if (computerChoice == "Rock") {
            console.log("Both Win!! " + humanChoice + " is Tie with " + computerChoice);
            humanScore++;
            computerScore++;
        } else if (computerChoice == "Paper") {
            console.log("Computer win! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        } else {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
    } else if (humanChoice == "Paper") {
        if (computerChoice == "Paper") {
            console.log("Both Win!! " + humanChoice + " is Tie with " + computerChoice);
            humanScore++;
            computerScore++;
        } else if (computerChoice == "Scissors") {
            console.log("Computer win! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        } else {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
    } else {
        if (computerChoice == "Scissors") {
            console.log("Both Win!! " + humanChoice + " is Tie with " + computerChoice);
            humanScore++;
            computerScore++;
        } else if (computerChoice == "Rock") {
            console.log("Computer win! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        } else {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
    }
}



//play game 5 rounds
function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log("You select : " + humanSelection + "\nComputer selects : " + computerSelection);
        playRound(humanSelection, computerSelection);
    }
}

//declare result after 5 rounds
playGame(5);
console.log("Play 5 rounds,\nYour score : "+ humanScore + "\nComputer's score : "+ computerScore);