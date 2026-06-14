//pseudocode Rock Paper Scissors Game
//get player's answer between Rock Paper Scissors
console.log(getHumanChoice());
function getHumanChoice(){
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
console.log(getComputerChoice());
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
//declare result