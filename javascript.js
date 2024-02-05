

let options = ["Rock","Paper","Scissors"];
let playerScore = 0;
let computerScore = 0;
function getComputerChoice () {
    let options = ["Rock","Paper","Scissors"];
    let random = Math.floor((Math.random() * options.length));
    let computerChoice = options[random];
    return computerChoice
}

function error () {
    if (options.includes(playerChoice)) {
        let error = 0;
        return error;
    } else {
        let error = 1;
        return error;
    }}
    const btn = document.querySelectorAll('button');

    btn.forEach((button) => {
        button.addEventListener('click', () => {      
    let playerChoice = button.id;
    let computerChoice = getComputerChoice();

    const docBody = document.querySelector("body")
    const result = document.createElement("div");
    if (computerChoice == "Rock" && playerChoice == "Paper") {
        result.textContent = "Winner! Your Score: " + ++playerScore + " Computer Score: " + computerScore;
        docBody.appendChild(result);
        if (playerScore == 5) result.textContent = "You win the game! Your Score: " + playerScore + " Computer Score: " + computerScore;
        docBody.appendChild(result); 
    } else 
    if (computerChoice == "Paper" && playerChoice == "Scissors") {
        result.textContent = "Winner! Your Score: " + ++playerScore + " Computer Score: " + computerScore;
        docBody.appendChild(result);
        if (playerScore == 5) result.textContent = "You win the game! Your Score: " + playerScore + " Computer Score: " + computerScore;
        docBody.appendChild(result); 
    } else 
    if (computerChoice == "Scissors" && playerChoice == "Rock") {
        result.textContent = "Winner! Your Score: " + ++playerScore + " Computer Score: " + computerScore;
        docBody.appendChild(result);
        if (playerScore == 5) result.textContent = "You win the game! Your Score: " + playerScore + " Computer Score: " + computerScore;
        docBody.appendChild(result); 
    } else 
    if (computerChoice == "Rock" && playerChoice == "Scissors") {
        result.textContent = "Loser! Your Score: " + playerScore + " Computer Score: " + ++computerScore;
        docBody.appendChild(result);
        if (computerScore == 5) result.textContent = "You lose the game! Your Score: " + playerScore + " Computer Score: " + computerScore;
        docBody.appendChild(result); 
    } else 
    if (computerChoice == "Paper" && playerChoice == "Rock") {
        result.textContent = "Loser! Your Score: " + playerScore + " Computer Score: " + ++computerScore;
        docBody.appendChild(result);
        if (computerScore == 5) result.textContent = "You lose the game! Your Score: " + playerScore + " Computer Score: " + computerScore;
        docBody.appendChild(result); 
    } else 
    if (computerChoice == "Scissors" && playerChoice == "Paper") {
        result.textContent = "Loser! Your Score: " + playerScore + " Computer Score: " + ++computerScore;
        docBody.appendChild(result);
        if (computerScore == 5) result.textContent = "You lose the game! Your Score: " + playerScore + " Computer Score: " + computerScore;
        docBody.appendChild(result); 
    } else 
    if (computerChoice == playerChoice ) {
        result.textContent = "Draw! Your Score: " + playerScore + " Computer Score: " + computerScore;
        docBody.appendChild(result);
    } else 
    result.textContent = "Error! Try Again";
    docBody.appendChild(result);
        });
      });




