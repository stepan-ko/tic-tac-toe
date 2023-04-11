let players = ['x', 'o'];
let activePlayer = 0;
let boardState = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''], 
  ];

function startGame() {  
  activePlayer = 0;    
  for (let i = 0;  i < boardState.length; i++) {
    for (let j = 0;  j < boardState.length; j++) {
      boardState[i][j] = '';
    }    
  }  
  renderBoard(boardState);  
}

function cheсk(row, col) {
  let cheсkCell = boardState[row][col];
  let lenArr = boardState.length;
  let winRow = 0;
  let winCol = 0;
  let winD = 0;
  let winD2 = 0;
  
  for(let i = 0; i < lenArr; i++) {    
    if (boardState[row][i] === cheсkCell) {
      winRow++;     
    }
    if (boardState[i][col] === cheсkCell) {
      winCol++;      
    }
    if (boardState[i][i] === cheсkCell) {
      winD++;      
    }
    if (boardState[i][lenArr - 1- i] === cheсkCell) {
      winD2++;      
    }
  }
  
  if (winRow === lenArr || winCol === lenArr ||
      winD === lenArr || winD2 === lenArr) {
    return true;
  }  
  else {
    return false;
  } 
}
  
function click(row, col) {
  boardState[row][col] = players[activePlayer];
  renderBoard(boardState); 
  
  if (cheсk(row, col)) {
    showWinner(activePlayer);
  }

  activePlayer = activePlayer ? 0 : 1;
  
}

let inputCol = document.querySelector('.input-col');
let inputRow = document.querySelector('.input-row');

inputRow.addEventListener('input', function () {
  inputCol.value = inputRow.value;
}); 

let resetButtons = document.getElementsByClassName('reset-size');

for (let btn of resetButtons) {
  btn.addEventListener('click', function () {
    let size = inputCol.value;
    if (size > 7) {
      size = 7;
      inputCol.value = 7;
      inputRow.value = 7;
    }
  
    boardState = new Array(size);
  
    for (let i = 0; i < size; i++) {  
      boardState[i] = new Array(size);
      for (let j = 0; j < size; j++) {
        boardState[i][j] = '';
      }    
    }
   
    if (!modalEl.classList.contains('hidden')) {
      modalEl.classList.add('hidden');
    }
    activePlayer = 0;    
    renderBoard(boardState);

  });
}


