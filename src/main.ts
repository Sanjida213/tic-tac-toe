import './style.scss'

/* PSEUDOCODE

create an empty 3x3 grid. >
assign player 1 as X and player 2 as 0 >
player has to click on the grid to choose a positon - 
- if that position is not occupied, they can place their symbol >
- if it position is occupied, prompt the player to choose again -> maybe to for aloop for the cell with i < 1
once the player has placed their symbol, the board should be updated >
create a winning function that is 3 same symbols in a row, column or diagonal
- if player wins, end game -> add package e.g. confetti
- if player wins, counter for that player should go up
- if board is full but there are no winnters, declare the game a draw 
if players want to play again, reset the board and start a new game, if not end game

*/

const gameBoard = document.querySelector<HTMLElement>(".gameBoard")
const cells = document.querySelectorAll<HTMLElement>(".cells")
const cellBoxes = document.querySelectorAll("[data-cell]")
const currentPlayerTurn = document.querySelector<HTMLHeadingElement>(".currentPlayer")
const scoreBoard = document.querySelectorAll(".score")



 // function to start game 

if (cells.length === 0 ) {
  throw new Error ("Issue with querySelectorAll")
}

if (cellBoxes.length === 0 ) {
  throw new Error ("Issue with querySelectorAll")
}

if (scoreBoard.length === 0 ) {
  throw new Error ("Issue with scoreBoard")
}

if (!gameBoard || !currentPlayerTurn) {
  throw new Error ("Issue with board")
}
console.log(cells)



const playerX = "X";
const playerO = "O";
let currentPlayer = "X";


// start game function

const startGame = () => {

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

  // if turn = p2, select 'O', else if turn = p1. select 'X
  // if (turn === playerO) {   // the === returns a true/false so  turn === player 2 is false so we got straight to the else statemtn
  //   turn = playerX            // but if turn is not === player 2 which means its player1, that results true as line 29 assigns turn = playe1
  // } else {                    // so then it returns the if statement
  //   turn = playerO
  // }


  console.log("next player" + currentPlayer)


  // if (playerHasWon()) {
  //   console.log(`Player ${currentPlayer} has won`)
  //   return winningMessage()
  // }

  if (playerHasWon()) {
    console.log(`Player ${currentPlayer} has won`) 
    winningMessage()    // we want to vreate 2 functions - end game and winning message
  } else {
      startGame()  
  }

  // if cell is occupied and player selects it, prompt to tell them to tyr again
  // if(cellChosen.textContent === "") {
  //   return alert("Try again")
  // }

  //if all the content of the cells are not empty and playerhsaWon == false then function draw to be invoked
  
  // cells.forEach(cell => {
  //     if ((cell.textContent === playerX || playerO) && !playerHasWon() ) {
  //       console.log(`ee`)
  //     }
  //     })
  

};


cells.forEach(cell => {
  cell.addEventListener("click", choosePosition, {once: true})
});

const winningMessage = () => {
  currentPlayerTurn.textContent = `${currentPlayer} HAS WON!`
  currentPlayerTurn.style.fontSize = "50px"
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
  


// create counter for scores
// if current player wins, then current score goes up  by 1

// if (playerHasWon()) {
//   scoreBoard.forEach(score) => {
//     score.innerText += "1"
//   }
// }











// const restart = document.querySelector<HTMLButtonElement>(".restart-button")

// if (!restart) {
//   throw new Error ("Isssue with restart button")
// }
// // restart button 
// // this clears out the game but when i restart it the players dont alternate
// const handleClickRestart = () => {
//   cells.forEach(cell => {
//     cell.innerHTML = ""
//   })
  
// }
// restart.addEventListener("click", handleClickRestart)

/*
can use ts-dom notes to change the innerText of the button once its been clicked 
to say 'game restarted
*/

