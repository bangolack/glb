
let choices = ["rock", "paper", "scissors"]
let computerChoice = ""

function getComputerChoice(){
    computerChoice = choices[Math.floor(Math.random() * 3)]
    console.log(computerChoice)
}

function getPlayerChoice(){
    playerChoice = prompt("Choose: rock, paper, or scissors?")
}

function playRound(playerPick, computerPick){
    console.log("playRound")
    getComputerChoice()
    getPlayerChoice()
    if(playerPick === "rock" && computerPick === "scissors"
    || playerPick === "paper" && computerPick === "rock"
    || playerPick === "scissors" && computerPick === "paper")
    playerScore++
    else
    computerScore++
    console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`)
}
