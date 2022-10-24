
let choices = ["rock", "paper", "scissors"]
let computerChoice = ""

function getComputerChoice(){
    computerChoice = choices[Math.floor(Math.random() * 3)]
    console.log(computerChoice)
}

function getPlayerChoice(){
    playerChoice = prompt("Choose: rock, paper, or scissors?")
}