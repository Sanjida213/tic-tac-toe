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
const currentPlayerTurn = document.querySelector<HTMLHeadingElement>(".currentPlayer")
const scoreBoard = document.querySelectorAll(".score")




if (cells.length === 0 ) {
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


// function to start game 

// const playAgain = () => {
//   cells.forEach(cell => {
//     cell.textContent = ""
//   })
//   gameBoard.addEventListener("click", playAgain)
// }

// timer delayer
// ^^ it should only clear out once i click on the gameboard


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


  // draw()

     if (playerHasWon()) {
      console.log(`Player ${currentPlayer} has won`) 
      winningMessage()    // we want to create 2 functions - end game and winning message
      updateScoreBoard()

      
      // create draw function
      // and for the player to not be able to press anymore cells
      
    } else {
      alternatePlayers()  
    } 
  
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
  

  // create draw function
  const draw = () => {
    if (gameBoardIsFilled() && !playerHasWon()) {
      // console.log (`This is a ${draw}`)
      currentPlayerTurn.textContent = `Draw :(`
    }
  }

  const gameBoardIsFilled = () => {
    for (const cell of cells) {
      if (cell.textContent !== "") {
        return true;
      }
    }
  }  
  
  
// create counter for scores
// if current player wins, then current score goes up  by 1, if draw, tie = 1

// if (playerHasWon()) {
//   scoreBoard.forEach(score) => {
//     score.innerText += "1"
//   }
// }




console.log(scoreBoard)






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






/// list: 
// make a draw function 
// make sure the draw function score board works
// once someone has won or drawed, they should be able to click on board and 
// it restarts without changing the scoreboard
// make restart function
// create README and look at mark scheme


 // if turn = p2, select 'O', else if turn = p1. select 'X
  // if (turn === playerO) {   // the === returns a true/false so  turn === player 2 is false so we got straight to the else statemtn
  //   turn = playerX            // but if turn is not === player 2 which means its player1, that results true as line 29 assigns turn = playe1
  // } else {                    // so then it returns the if statement
  //   turn = playerO
  // }




const updateScoreBoard = () => {
  if (currentPlayer === playerX) {
    let score: number = 0
    score ++;
    scoreBoard[0].innerHTML += score  
    // playAgain()
  } else if (currentPlayer === playerO) {
    let score: number = 0
    score ++;
    scoreBoard[2].innerHTML += score 
  } else {
    let score: number = 0
    score ++;
    scoreBoard[1].innerHTML += score
  }
}




  // if (playerHasWon()) {
  //   console.log(`Player ${currentPlayer} has won`)
  //   return winningMessage()
  // }

  // startGame()

  

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
  