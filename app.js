let choices = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0
let btn = document.getElementById("start")
let wantsToPlayAgain = true
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")

rock.addEventListener("click", function(){
    playGame("rock")
})

paper.addEventListener("click", function(){
    playGame("paper")
})

scissors.addEventListener("click", function(){
    playGame("scissors")
})



btn.addEventListener("click", function () {
    wantsToPlayAgain = true
    startGame()})
console.log(btn)

function getComputerChoice(){
    let choice = choices[Math.floor(Math.random() * 3)]
    return choice
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "tie"
    }
    else if(
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "player"
    }
    else{
        return "computer"
    }
}


function playRound(playerSelection, computerSelection){
    let results = checkWinner(playerSelection, computerSelection)
    if (results == "tie"){
        return (`Player picks ${playerSelection}, Computer picks ${computerSelection}
        Its a Tie!`)
    }
    else if (results == "player"){
        playerScore++
        return (`Player picks ${playerSelection}, Computer picks ${computerSelection}
           Player Wins`)
    }
    else {
        computerScore++
        return (`Player picks ${playerSelection}, Computer picks ${computerSelection}
            Computer Wins!`)
    }
   
}

function playGame(playerSelection){
    //for (let i = 0; i < 5; i++){
   // let playerSelection = prompt("pick rock, paper, or scissors")
    let computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
    console.log(`Player: ${playerScore} Computer: ${computerScore}`)

   // }
}





    playGame()


  


