let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

let result = document.querySelector('.result');
let playerscore = document.querySelector('.playerscore');
let computerscore = document.querySelector('.computerscore');

let playerWins=0;
let computerWins=0;

rock.addEventListener("click", () => {
    playRound("rock",computerPlay())
});
paper.addEventListener("click", () => {
    playRound("paper",computerPlay())
});
scissors.addEventListener("click", () => {
    playRound("scissors",computerPlay())
});

function rand(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay(){
    let pick = rand(0, 2);
    switch(pick){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
     }
}

function playRound(playerSelection, computerSelection){
    
    let winFlag = false;
    let winner = '';
    let loser  = '';

    if(playerSelection === computerSelection)
        return result.innerHTML = 'It is draw';

        if(playerSelection === 'rock'){
            if(computerSelection === 'paper'){
                winner = computerSelection;
                loser = playerSelection;
            }
            else{
                winner = playerSelection;
                loser = computerSelection;
                winFlag = true;
            }
        }
        if(playerSelection === 'paper'){
            if(computerSelection === 'scissors'){
                winner = computerSelection;
                loser = playerSelection;
            }
            else{
                winner = playerSelection;
                loser = computerSelection;
                winFlag = true;
            }
        }
        if(playerSelection === 'scissors'){
            if(computerSelection === 'rock'){
                winner = computerSelection;
                loser = playerSelection;
            }
            else{
                winner = playerSelection;
                loser = computerSelection;
                winFlag = true;
            }
        }
    
        let beats = winner+" beats "+loser+ ".";

        if(winFlag){
            playerWins++;
            playerscore.innerHTML = "Player Score: "+playerWins;
            result.innerHTML = "Player win! " +beats;
        }
        else{

            computerWins++;
            computerscore.innerHTML = "Computer Score: "+computerWins;
            result.innerHTML = "Computer win! " +beats;
        }
}
