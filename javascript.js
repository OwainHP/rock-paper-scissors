let options = ["Rock","Paper","Scissors"];
let test = "test";
function getComputerChoice () {
    let options = ["Rock","Paper","Scissors"];
    let random = Math.floor((Math.random() * options.length));
    let computerChoice = options[random];
    return computerChoice
}

function getPlayerChoice () {
    let choice = prompt("Choose Rock, Paper or Scissors");
    let capitaliseFirst = choice.charAt(0).toUpperCase();
    let lowerCase = choice.slice(1).toLowerCase();
    let choiceFixCapitalisation = capitaliseFirst + lowerCase;
    return choiceFixCapitalisation;
}

function error () {
    if (options.includes(playerChoice)) {
        let error = 0;
        return error;
    } else {
        let error = 1;
        return error;
    }}

function game () {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    console.log("Your Choice: " + playerChoice);
    console.log("Computer Choice: " + computerChoice);
    if (computerChoice == "Rock" && playerChoice == "Paper") {
        return "Winner";
    } else 
    if (computerChoice == "Paper" && playerChoice == "Scissors") {
        return "Winner";
    } else 
    if (computerChoice == "Scissors" && playerChoice == "Rock") {
        return "Winner";
    } else 
    if (computerChoice == "Rock" && playerChoice == "Scissors") {
        return "Loser";
    } else 
    if (computerChoice == "Paper" && playerChoice == "Rock") {
        return "Loser";
    } else 
    if (computerChoice == "Scissors" && playerChoice == "Paper") {
        return "Loser";
    } else 
    if (computerChoice == playerChoice ) {
        return "Draw";
    } else 
    return "Error";
}

let computer = 0;
let player = 0;

function round () {
let score = game();
console.log(score);
if (score == "Draw") {
    alert("Draw! Try Again!")
    return round();
} else if (score == "Error") {
    alert("Error! Try Again!")
    return round();
} else if (score == "Winner") {
    player = player+1;
} else if (score == "Loser") {
    computer = computer+1;
}
}

function winner () {
    if (computer > player) {
        return "Computer Wins!"
    } else {return "You Win!"}
}

for (i = 0; i<=4;i++) {
    round ();
}

console.log("Final Score is, Computer: "+computer+" Player: "+player+", "+winner());