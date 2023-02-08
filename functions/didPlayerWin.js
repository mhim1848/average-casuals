export default (player, board) => {
  const HEIGHT = 9;
  const WIDTH = 6;
  for (let j = 0; j < HEIGHT - 3; j++) {
    for (let i = 0; i < WIDTH; i++) {
      if (board[i][j] === player && board[i][j + 1] === player && board[i][j + 2] === player && board[i][j + 3] === player) {
        return true;
      }
    }
  }
  // verticalCheck
  for (let i = 0; i < WIDTH - 3; i++) {
    for (let j = 0; j < HEIGHT; j++) {
      if (board[i][j] === player && board[i + 1][j] === player && board[i + 2][j] === player && board[i + 3][j] === player) {
        return true;
      }
    }
  }
  // ascendingDiagonalCheck
  for (let i = 3; i < WIDTH; i++) {
    for (let j = 0; j < HEIGHT - 3; j++) {
      if (board[i][j] === player && board[i - 1][j + 1] === player && board[i - 2][j + 2] === player && board[i - 3][j + 3] === player)
        return true;
    }
  }
  // descendingDiagonalCheck
  for (let i = 3; i < WIDTH; i++) {
    for (let j = 3; j < HEIGHT; j++) {
      if (board[i][j] === player && board[i - 1][j - 1] === player && board[i - 2][j - 2] === player && board[i - 3][j - 3] === player)
        return true;
    }
  }
  return false;
}