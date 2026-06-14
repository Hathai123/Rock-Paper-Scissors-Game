//pseudocode Rock Paper Scissors Game
//get player's answer between Rock Paper Scissors

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