const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";

    }
    else{
        switch(playerChoice){
            case "rock":
               result = (computerChoice === "scissors") ? "you WIN!" : "you LOSE!"
               break;
            case "paper":
               result = (computerChoice === "rock") ? "you WIN!" : "you LOSE!"
               break;
            case "rock":
               result = (computerChoice === "paper") ? "you WIN!" : "you LOSE!"
               break;
                  
               

        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `computer: ${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "you WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
    
        case "you LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore; 
            break;
    
    }
    
}