const playerChoice = document.getElementById("player");
const computerChoice = document.getElementById("computer");
const playerPoints = document.getElementById("player-score");
const computerPoints = document.getElementById("computer-score");
const result = document.getElementById("result");

const choise = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll(".btns");
btns.forEach(btn => {
    btn.addEventListener("click", event => {
        let game = computer();
        if (event.target === btns[0]) {
            playerChoice.textContent = "Player: " + choise[0];
            calcWinner(0, game);
        }
        else if (event.target === btns[1]) {
            playerChoice.textContent = "Player: " + choise[1];
            calcWinner(1, game);
        }
        else {
            playerChoice.textContent = "Player: " + choise[2];
            calcWinner(2, game);
        }
    })
});

function computer() {
    let comp = Math.floor(Math.random() * 3);
    computerChoice.textContent = "Computer: " + choise[comp];
    return comp;
}

function calcWinner(player, computer) {
    result.classList.remove("lose", "win");
    if (player === computer)
        result.textContent = "It's a TIE";
    else {
        if (computer - player === 1 ||  
            player - computer === 2) {
            result.textContent = "Computer wins";
            result.classList.add("lose");
            computerScore++;
        }
        else if (computer - player === 2 || player - computer === 1) {
            result.textContent = "Player wins";
            result.classList.add("win");
            playerScore++;
        }
        else {
            result.textContent = "INVALID";
        }
        playerPoints.textContent = "Player score: " + playerScore;
        computerPoints.textContent = "Computer score: " + computerScore;
    }
}