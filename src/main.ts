import './style.scss'
import confetti, {Options} from "canvas-confetti"


const gameBoard = document.querySelector<HTMLElement>(".gameBoard")
const cells = document.querySelectorAll<HTMLElement>(".cells")
const currentPlayerTurn = document.querySelector<HTMLHeadingElement>(".currentPlayer")
const scoreBoard = document.querySelectorAll(".score")
const playAgain = document.querySelector<HTMLButtonElement>(".playAgain")
const restart = document.querySelector<HTMLButtonElement>(".restart-button")
const celebrationAudio = document.querySelector<HTMLAudioElement>(".celebration")
const drawAudio = document.querySelector<HTMLAudioElement>(".draw")

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
  !celebrationAudio ||
  !drawAudio) {
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

// audios
const victoryAudio = () => {
  celebrationAudio.currentTime = 0;  
  celebrationAudio.play();
}

const drawAudios = () => {
  drawAudio.currentTime = 0;  
  drawAudio.play();
}


const alternatePlayers = () => {

  if (currentPlayer === playerO) {
    currentPlayer = playerX
    currentPlayerTurn.textContent = `Player X to move`
  } else if (currentPlayer === playerX) {
    currentPlayer = playerO
    currentPlayerTurn.textContent = `Player O to move`
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
    victoryAudio()

  } else {
    alternatePlayers()  
  } 

  draw()

};


cells.forEach(cell => {
  cell.addEventListener("click", choosePosition, {once: true})
});


// winning message/condition
const winningMessage = () => {
  currentPlayerTurn.textContent = `${currentPlayer} HAS WON!`
  currentPlayerTurn.style.fontSize = "50px"
  currentPlayerTurn.style.fontFamily =  "Permanent Marker";
  currentPlayerTurn.style.textAlign = "center"
}

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


// cells cannot be clicked & scoreboard cannot be changed once player has won
const roundOver = () => {
  cells.forEach(cell => {
    cell.removeEventListener("click", choosePosition);
  });
};


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
    drawAudios()
  } 
};

const gameBoardIsFilled = () => {
  for (const cell of cells) {
    if (cell.textContent === "") {
      return false; 
    }
  }
  return true; 
};
  
  



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


