
let choices = ["rock", "paper", "scissors"]
let computerChoice = ""
let playerChoice = ""
let playerScore = 0;
let computerScore = 0;
let btn = document.getElementById("start")



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

function playGame(){
    for(let i = 0; i<5; i++)
    {
        playRound(playerChoice, computerChoice)
    }
    if (playerScore > computerScore){
        console.log("Congrats!!!! Player Winsssss!!!!!")
    }
    else{
        console.log("BOOOOOO a computer beat you!?!? Lame!!!!:(")
    }
}

btn.addEventListener("click", () => {
    playerScore = 0
    computerScore = 0
    playGame()})