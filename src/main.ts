import './style.scss'

/* PSEUDOCODE

create an empty 3x3 grid.
assign player 1 as X and player 2 as 0
player has to click on the grid to choose a positon -
- if that position is not occupied, they can place their symbol
- if it position is occupied, prompt the player to choose again -> maybe to for aloop for the cell with i < 1
once the player has placed their symbol, the board should be updated
create a winning function that is 3 same symbols in a row, column or diagonal
- if player wins, end game -> add package e.g. confetti
- if board is full but there are no winnters, declare the game a draw 
if players want to play again, reset the board and start a new game, if not end game

*/

// const gameBoard = document.querySelector<HTMLElement>(".gameboard")
const cells = document.querySelectorAll<HTMLElement>(".cells")
// const winConditions = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 4, 8],
//   [2, 4, 6],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8]
// ]

// console.log(winConditions)

// cells.forEach(cell => {
//   // Access the data-index attribute and log it
//   console.log(cell.dataset.index);
// })
 
if (cells.length === 0) {
  throw new Error ("Issue with querySelectorAll")
}



let player1 = "X";
let player2 = "O";
let turn = player1;


// player has to click on the grid to choose a positon -




const choosePosition = (event: Event)  => {
  const cellChosen = event.currentTarget as HTMLElement;
  console.log("current player" + turn)
  
  if (cellChosen.textContent === "") {
     cellChosen.textContent += turn;
  }

  // if turn = p2, select 'O', else if turn = p1. select 'X
  // if (turn === player2) {   // the === returns a true/false so  turn === player 2 is false so we got straight to the else statemtn
  //   turn = player1            // but if turn is not === player 2 which means its player1, that results true as line 29 assigns turn = playe1
  // } else {                    // so then it returns the if statement
  //   turn = player2
  // }

  if (turn === player2) {
    turn = player1
  } else if (turn === player1) {
    turn = player2
  } 

  console.log("next player" + turn)

  // if cell is occupied and player selects it, prompt to tell them to tyr again
  // if(cellChosen.textContent === "") {
  //   return alert("Try again")
  // }

};


cells.forEach(cell => {
  cell.addEventListener("click", choosePosition)
});



// we need to now make it so that if player hits 3 in a row, they win

// const player1Moves = winConditions
// if (player1Moves) {
//    console.log(`Player1 wins`)
// }











/*
const restart = document.querySelector<HTMLButtonElement>(".restart-button")

if (!restart) {
  throw new Error ("Isssue with restart button")
}
// restart button 
// this clears out the game but when i restart it the players dont alternate
const handleClickRestart = () => {
  cells.forEach(cell => {
    cell.textContent = ""
  })
  player1 = "";
  player2 = "";
  
}
restart.addEventListener("click", handleClickRestart)
*/