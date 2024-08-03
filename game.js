const choices = ["rock", "paper", "scissors"];

const computerChoice = () => {
  const randomChoice = Math.floor(Math.random() * 3);
  console.log(`Computer plays ${choices[randomChoice]}`);
  return choices[randomChoice];
};

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  }
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "player";
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    return "computer";
  } else {
    return "ERROR";
  }
}

const game = {
  roundsPlayed: 0,
  playerScore: 0,
  computerScore: 0,
  playerChoice: "",
  computerChoice: "",
  roundWinner: "",
};

const playRound = (playerChoice) => {
  game.playerChoice = playerChoice;
  game.roundsPlayed += 1;
  game.computerChoice = computerChoice();
  game.roundWinner = determineWinner(playerChoice, game.computerChoice);
  if (game.roundWinner === "player") {
    game.playerScore += 1;
    game.roundWinner = "player";
  } else if (game.roundWinner === "computer") {
    game.computerScore += 1;
    game.roundWinner = "computer";
  } else if (game.roundWinner === "ERROR") {
    console.log("Invalid choice");
  }
};

const images = {
  rock: "./images/rock.jpg",
  paper: "./images/paper.jpg",
  scissors: "./images/scissors.jpg",
};

const playAnimation = (game) => {
  const playerImage = document.querySelector("#player-image");
  const computerImage = document.querySelector("#computer-image");
  const resultText = document.querySelector("#result-text");
  const roundsPlayedText = document.querySelector("#rounds");
  const playerScore = document.querySelector("#player-score");
  const computerScore = document.querySelector("#computer-score");

  // Array of image paths for cycling
  const imageCycle = [images.rock, images.paper, images.scissors];

  let cycleIndex = 0;

  // Function to cycle through images
  const cycleImages = () => {
    console.log(cycleIndex);
    playerImage.src = imageCycle[cycleIndex];
    computerImage.src = imageCycle[cycleIndex];
    cycleIndex = (cycleIndex + 1) % 3;
  };

  // Set an interval to cycle images every 100ms
  const cycleInterval = setInterval(cycleImages, 100);

  // After 1 second, stop cycling and display the results
  setTimeout(() => {
    clearInterval(cycleInterval);

    // Set the images to the actual choices
    playerImage.src = images[game.playerChoice];
    computerImage.src = images[game.computerChoice];

    // Display the result of the round
    if (game.roundWinner === "player") {
      resultText.textContent = `You Win!`;
      playerScore.textContent = `Player Score: ${game.playerScore}`;
    } else if (game.roundWinner === "computer") {
      resultText.textContent = `You Lose!`;
      computerScore.textContent = `Computer Score: ${game.computerScore}`;
    } else if (game.roundWinner === "draw") {
      resultText.textContent = `It's a Draw!`;
    } else {
      resultText.textContent = `Invalid Input!`;
    }
    roundsPlayedText.textContent = `Rounds Played: ${game.roundsPlayed}`;
  }, 1000);
};

const gameButtons = document.querySelectorAll("button.game-btn");
gameButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(`${e.target.value} clicked`);
    playRound(e.target.value);
    console.log(game);
    playAnimation(game);
  });
});
