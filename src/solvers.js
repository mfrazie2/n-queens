// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var solution = new Board({ n: n});
  var setPieces = function(row) {
    if (row === n) {
      return solution.rows();
    }
    for (var i = 0; i < n; i++) {
      solution.togglePiece(row, i);
      if(!solution.hasAnyColConflicts()) {
        return setPieces(row + 1);
      }
      solution.togglePiece(row, i);
    }
  };
  solution = setPieces(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({ n:n }); 
  var count = 0;
  var setPieces = function (row, b) {
    if (row === n) {
      count += 1;
      return;
    }
    for (var i = 0; i < n; i++) {
      b.togglePiece(row, i);
      if (!b.hasAnyColConflicts()) {
        setPieces(row + 1, b);
      }
      b.togglePiece(row, i);
    }
  };
  setPieces(0, board);
  return count;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({ n: n });
  var solution = board.rows();
  var setPieces = function (row) {
    if (row === n) {
      return solution = board.rows();
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        var result = setPieces(row + 1);
        if (result) { return result; }
      }
      board.togglePiece(row, i);
    }
  };
  setPieces(0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var count = 0;
  var board = new Board({n:n}); 
  var setPieces = function (row) {
    if (row === n) {
      count += 1;
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        setPieces(row + 1);
      }
      board.togglePiece(row, i);
    }
  }
 if (n === 0){
  return 1;
 }
  setPieces(0);
  return count;
};
