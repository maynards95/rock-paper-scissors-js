// calls our game function below
game();

//function that returns a random choice for the computer: Rock, Paper, or Scissors
function getComputerChoice() {
    // declare empty variable for our choice
    randChoice = "";
    // returns an int from 0-2
    num = Math.floor(Math.random() * 3)
    // array with our choices
    const choices = ["Rock", "Paper", "Scissors"];
    // returns array choice at num variable index
    return choices[num];
}

//func to determine who wins each round, takes a player selection and computer selection from game function below.
function playRound(playerSelection, computerSelection) {
    // variable to hold our playerSelection at lowercase so it is case insensitive
    newPlayerSelection = playerSelection.toLowerCase();
    // variable to hold our computerSelection at lowercase so it is case insensitive
    newComputerSelection = computerSelection.toLowerCase();
    // loop for compSelection: rock and playerSelection: paper
    if (newComputerSelection == "rock" && newPlayerSelection == "paper") {
        // returns string that declares a winner
        return ("You win! Paper beats Rock");
    }
    //if compSelection: paper and playerSelection: rock
    else if (newComputerSelection == "paper" && newPlayerSelection == "rock") {
        // returns string that declares a winner
        return ("You lose! Paper beats Rock");
    }
    //if compSelection: scissors and playerSelection: paper
    else if (newComputerSelection == "scissors" && newPlayerSelection == "paper") {
        // returns string that declares a winner
        return ("You lose! Scissors beats Paper");
    }
    //if compSelection: rock and playerSelection: scissors
    else if (newComputerSelection == "rock" && newPlayerSelection == "scissors") {
        // returns string that declares a winner
        return ("You lose! Rock beats Scissors");
    }
    //if compSelection: paper and playerSelection: scissors
    else if (newComputerSelection == "paper" && newPlayerSelection == "scissors") {
        // returns string that declares a winner
        return ("You win! Scissors beats Paper");
    }
    // if compSelection: scissors and playerSelection: rock
    else if (newComputerSelection == "scissors" && newPlayerSelection == "rock") {
        // returns string that declares a winner
        return ("You win! Rock beats Scissors!");
    }
    else {
        // default option for when its a tie
        return ("Its a tie!");
    }
}

// function that plays our game and prints the winner
function game() {
    // loops through 5 times to play 5 rounds of rock paper scissors
    for (let i = 0; i < 5; i++) {
        // variable to hold our computerChoice
        const computerSelection = getComputerChoice();
        // variable to hold our playerSelection that we ask the player for
        const playerSelection = prompt("Choose Rock, Paper, or Scissors");
        // plays a round with our parameters of computerChoice and playerSelection
        console.log(playRound(playerSelection, computerSelection))
    }
}
