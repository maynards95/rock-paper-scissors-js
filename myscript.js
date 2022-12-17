game();

function getComputerChoice() {
    randChoice = "";
    num = Math.floor(Math.random() * 3)
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[num];
}

function playRound(playerSelection, computerSelection) {
    newPlayerSelection = playerSelection.toLowerCase();
    newComputerSelection = computerSelection.toLowerCase();
    if (newComputerSelection == "rock" && newPlayerSelection == "paper") {
        return ("You win! Paper beats Rock");
    }
    else if (newComputerSelection == "paper" && newPlayerSelection == "rock") {
        return ("You lose! Paper beats Rock");
    }
    else if (newComputerSelection == "scissors" && newPlayerSelection == "paper") {
        return ("You lose! Scissors beats Paper");
    }
    else if (newComputerSelection == "rock" && newPlayerSelection == "scissors") {
        return ("You lose! Rock beats Scissors");
    }
    else if (newComputerSelection == "paper" && newPlayerSelection == "scissors") {
        return ("You win! Scissors beats Paper");
    }
    else if (newComputerSelection == "scissors" && newPlayerSelection == "rock") {
        return ("You win! Rock beats Scissors!");
    }
    else {
        return ("Its a tie!");
    }
}

function game (){
    for (let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Choose Rock, Paper, or Scissors");
        console.log(playRound(playerSelection, computerSelection))
    }
}
