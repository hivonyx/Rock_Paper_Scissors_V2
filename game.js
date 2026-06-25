// this function generates a random choice for the computer by inputting rock, paper and scissors as a string into an array. We then use the math.random method to randomly select one of the three choices and return it as the computer's choice.

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// this function opens a prompt window for the user and expects either rock, paper or scissors as an input. We also take the users input and convert it to lowercase to avoid any issues with case sensitivity. If the user inputs an invalid choice, we alert them and call the function again to prompt them for a valid input. 

function getHumanChoice() {
    const choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } else {
        alert("Invalid choice. Please try again.");
        return getHumanChoice();
    }
}

// here we delcare to variables and set it to zero. These variables will be used to keep track of the score for both the human and computer players.

let humanScore = 0;
let computerScore = 0;

// this function takes 2 parameters, humanChoice & computerChoice. We use if statements here to determine who wins, loses or ties, with score iterating accordingly as well as using template literals to return who won, lost or tied the round.

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

// this function is the main game. We use a for loop to iterate 5 times, calling both the humanChoice function and computerChoice function and then passing those values into the playRound function. We then alert the result of each round to the user. After 5 rounds, we check the scores and alert the user if they won, lost or tied the game. We use an if statement to check the scores and return the appropriate message via template literals.

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        alert(result);
    }

    if (humanScore > computerScore) {
        alert(`You won the game! Final score: You ${humanScore} - Computer ${computerScore}`);
    } else if (humanScore < computerScore) {
        alert(`You lost the game! Final score: You ${humanScore} - Computer ${computerScore}`);
    } else {
        alert(`The game is a tie! Final score: You ${humanScore} - Computer ${computerScore}`);
    }
}