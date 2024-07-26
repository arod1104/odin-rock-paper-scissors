const computerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  console.log(`Computer plays ${choices[randomChoice]}`);
  return choices[randomChoice];
};

const humanChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const choice = prompt(
    "Enter your choice (1: rock, 2: paper, 3: scissors, 4: quit): "
  );
  console.log(`You play ${choices[choice - 1]}`);
  return parseInt(choice);
};

const playRound = (userChoice, compChoice) => {
  switch (userChoice) {
    case 1:
      if (compChoice === "rock") {
        return 0;
      } else if (compChoice === "scissors") {
        return 1;
      } else {
        return 2;
      }
      break;
    case 2:
      if (compChoice === "paper") {
        return 0;
      } else if (compChoice === "rock") {
        return 1;
      } else {
        return 2;
      }
      break;
    case 3:
      if (compChoice === "scissors") {
        return 0;
      } else if (compChoice === "paper") {
        return 1;
      } else {
        return 2;
      }
      break;
    default:
      return -1;
  }
};

let humanScore = 0;
let computerScore = 0;

const instructions = `Welcome to Rock Paper Scissors. You will be playing against the computer.
  The rules are simple:
    1. Rock beats Scissors
    2. Scissors beats Paper
    3. Paper beats Rock

  Enter your choice when prompted:
    1. Rock
    2. Paper
    3. Scissors
    4. Quit the Game`;

console.log(instructions);

let userChoice = humanChoice();
let compChoice = computerChoice();

while (userChoice !== 4) {
  const winner = playRound(userChoice, compChoice);

  if (winner === 0) {
    console.log("It's a tie!");
  } else if (winner === 1) {
    console.log("You win!");
    humanScore = humanScore + 1;
  } else if (winner === 2) {
    console.log("You lose!");
    computerScore = computerScore + 1;
  } else {
    console.log("Invalid choice. Please try again.");
  }
  console.log(`Score: You: ${humanScore} Computer: ${computerScore}`);
  userChoice = humanChoice();
  compChoice = computerChoice();
}
