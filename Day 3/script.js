document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const result = document.getElementById('result');
    const resetButton = document.getElementById('resetButton');
  
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;
  
    const checkWinner = () => {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
      ];
  
      for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
          return gameBoard[a];
        }
      }
  
      return gameBoard.includes('') ? null : 'T';
    };
  
    const renderBoard = () => {
      board.innerHTML = '';
      gameBoard.forEach((value, index) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = index;
        cell.textContent = value;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
      });
    };
  
    const handleCellClick = (event) => {
      const index = event.target.dataset.index;
      if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        renderBoard();
  
        const winner = checkWinner();
        if (winner) {
          gameActive = false;
          if (winner === 'T') {
            result.textContent = "It's a tie!";
          } else {
            result.textContent = `${winner} is the winner!`;
          }
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    };
  
    const resetGame = () => {
      currentPlayer = 'X';
      gameBoard = ['', '', '', '', '', '', '', '', ''];
      gameActive = true;
      result.textContent = '';
      renderBoard();
    };
  
    resetButton.addEventListener('click', resetGame);
  
    // Initial render
    renderBoard();
  });
  