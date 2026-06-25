function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } else {
        alert("Invalid choice. Please try again.");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

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