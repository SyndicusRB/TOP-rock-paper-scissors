     let humanScore = 0;
     let computerScore = 0;

function getComputerChoice() {
     let num = Math.random()
     if (num <=0.33) {
          return "rock";
     } else if (num >0.33 && num <=0.66) {
          return "paper";
     } else {
          return "scissors";
     }
}

function getHumanChoice() {
     let choice = prompt("Make your choice - rock, paper, or scissors?", "").toLowerCase();
     return choice;
}

function playRound(humanChoice, computerChoice) {
     humanChoice = getHumanChoice()
     computerChoice = getComputerChoice()
     
     let playerWin = (humanChoice === "rock" && computerChoice === "scissors") ||
     (humanChoice === "paper" && computerChoice === "rock") ||
     (humanChoice === "scissors" && computerChoice === "paper");

     let computerWin = (humanChoice === "rock" && computerChoice === "paper") ||
     (humanChoice === "paper" && computerChoice === "scissors") ||
     (humanChoice === "scissors" && computerChoice === "rock");

     let roundDraw = (humanChoice === computerChoice);

     if (playerWin) {
          console.log(`You win this round! \n You = ${humanChoice}, Computer = ${computerChoice}`);
          humanScore++;
     } else if (computerWin) {
          console.log(`You lose this round! \n You = ${humanChoice}, Computer = ${computerChoice}`);
          computerScore++;
     } else if (roundDraw) {
          console.log(`It's a draw! \n You = ${humanChoice}, Computer = ${computerChoice}`);
          return roundDraw;
     }
}

function playGame() {
     playRound()
     playRound()
     playRound()
     playRound()
     playRound()
     
     if (humanScore > computerScore) {
          console.log(`Congratulations! You are the winner! \n You = ${humanScore} round wins, Computer = ${computerScore} round wins`)
     } else if (humanScore < computerScore) {
          console.log(`You lose! Better luck next time! \n You = ${humanScore} round wins, Computer = ${computerScore} round wins`)
     } else {
          console.log(`It's a tie! \n You = ${humanScore} round wins, Computer = ${computerScore} round wins`)
     }
     humanScore = 0;
     computerScore = 0;
}