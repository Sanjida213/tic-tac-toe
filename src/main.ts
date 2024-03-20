import './style.scss'
import confetti, {Options} from "canvas-confetti"


const gameBoard = document.querySelector<HTMLElement>(".gameBoard")
const cells = document.querySelectorAll<HTMLElement>(".cells")
const currentPlayerTurn = document.querySelector<HTMLHeadingElement>(".currentPlayer")
const scoreBoard = document.querySelectorAll(".score")
const playAgain = document.querySelector<HTMLButtonElement>(".playAgain")
const restart = document.querySelector<HTMLButtonElement>(".restart-button")
const audio = document.querySelector("audio")

if (cells.length === 0 ) {
  throw new Error ("Issue with querySelectorAll")
}

if (scoreBoard.length === 0 ) {
  throw new Error ("Issue with scoreBoard")
}

if (!gameBoard || 
  !currentPlayerTurn || 
  !playAgain || 
  !restart || 
  !audio) {
  throw new Error ("Issue with selector")
}


const playerX = "X";
const playerO = "O";
let currentPlayer = "X";

let scoreX: number = 0
let scoreO: number = 0
let scoreTie: number = 0

// confetti package 
const options : Options = {
  particleCount : 250,
  spread : 280,
  colors : ["#ee2fbe2", "#abe2de", "#65ae3c"],
};


const alternatePlayers = () => {

  if (currentPlayer === playerO) {
    currentPlayer = playerX
    currentPlayerTurn.textContent = `Player 1 to move`
  } else if (currentPlayer === playerX) {
    currentPlayer = playerO
    currentPlayerTurn.textContent = `Player 2 to move`
  }   
}


// player has to click on the grid to choose a positon -

const choosePosition = (event: Event)  => {
  const cellChosen = event.currentTarget as HTMLElement;
  console.log("current player" + currentPlayer)
 
 
  if (cellChosen.textContent === "") {
  cellChosen.textContent += currentPlayer;
  }
  

  if (playerHasWon()) {
    console.log(`Player ${currentPlayer} has won`) 
    winningMessage()   
    updateScoreBoard()
    roundOver()
    confetti(options);
    audio.currentTime = 0;   // resetting the audio to the start
    audio.play(); //plays the audio
  } else {
    alternatePlayers()  
  } 

  draw()

};


cells.forEach(cell => {
  cell.addEventListener("click", choosePosition, {once: true})
});


// play Again button
const playNextRound = () => {
  cells.forEach(cell => {
    cell.textContent = ""
  }) 
  currentPlayer = currentPlayer
  currentPlayerTurn.textContent = `${currentPlayer} to move`;
  
  cells.forEach(cell => {
      cell.addEventListener("click", choosePosition, { once: true });
  });
}

playAgain.addEventListener("click", playNextRound)


// cells cannot be clicked & scoreboard cannot be changed once player has won
const roundOver = () => {
  cells.forEach(cell => {
    cell.removeEventListener("click", choosePosition);
  });
};


// winning message/condition
const winningMessage = () => {
  currentPlayerTurn.textContent = `${currentPlayer} HAS WON!`
  currentPlayerTurn.style.fontSize = "50px"
  currentPlayerTurn.style.fontFamily =  "Permanent Marker";
  currentPlayerTurn.style.textAlign = "center"
}


const winningCombinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8]
]

const playerHasWon = () => {
  for (let condition of winningCombinations) {
    const [a, b, c] = condition;

    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
     ) {
      return true 
     }
  } 
    return false
  }
  

// draw
const draw = () => {
  if (gameBoardIsFilled() && !playerHasWon()) {
    console.log("its a draw")
    currentPlayerTurn.textContent = `Draw :(`;
  
    scoreTie ++;
    scoreBoard[1].innerHTML = scoreTie.toString()
  } 
};

const gameBoardIsFilled = () => {
  for (const cell of cells) {
    if (cell.textContent === "") {
      return false; // If any cell is empty, the board is not filled
    }
  }
  return true; // If all cells are filled, return true
};
  
  

// scoreboard 
const updateScoreBoard = () => {
  if (currentPlayer === playerX) {
    scoreX ++;
    scoreBoard[0].innerHTML = scoreX.toString()
  } else if (currentPlayer === playerO) {
    scoreO ++;
    scoreBoard[2].innerHTML = scoreO.toString()
  } 
}

console.log(scoreBoard)



// restart button 
const handleClickRestart = () => {
  cells.forEach(cell => {
    cell.textContent = ""
  }) 
  currentPlayer = "X"
  currentPlayerTurn.textContent = `${currentPlayer} to move`;

  scoreX = 0
  scoreO = 0
  scoreTie = 0

  scoreBoard[0].innerHTML = scoreX.toString();
  scoreBoard[1].innerHTML = scoreO.toString();
  scoreBoard[2].innerHTML = scoreTie.toString();

  cells.forEach(cell => {
      cell.addEventListener("click", choosePosition, { once: true });
  });
}

restart.addEventListener("click", handleClickRestart)




/// list: 
// create README and look at mark scheme
// host site
