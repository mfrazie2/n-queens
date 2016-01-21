/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme
  var board = new Board({ n: n});
  var boardSize = board.get('n');
  var solutionFound = false;

  var setPieces = function(row) {
    if(!solutionFound) {
      for(var i = 0; i < boardSize; i++) {
        board.togglePiece(row, i);
        // conflicts exist?
        if(board.hasAnyRooksConflicts()) {
          //reached end of board
          board.togglePiece(row, i);
          
        }else{
          if(row === boardSize -1) {
            //assign current board state to solution
            solution = board.rows();
            //change solution found to be true
            solutionFound = true;
            break;
          } else {
            setPieces(row + 1);
          }
        }
      }
    } 
  };

  setPieces(0);
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
 // this will be our tally of solutions
  var count = 0;
  // recursive method that increments count as a side effect
  var setPieces = function (row, board) {

    // iterate through each column in this row. Create a new branch for each one that is not in conflict so far.
    // this will start with position [0][0] and create n branches from there. Those branches will create more branches.
    for (var i = 0; i < n; i++) {
      // put a piece here to see if it's in conflict with the board
      board.togglePiece(row, i);
      // if it is, remove the piece. Nothing else happens here because this is the end of this branch;
      if(!board.hasAnyRooksConflicts()) {
        if (row >= n-1) {
          // if we've reached the final row, the branch has gone as far as it can go, we've found a solution and can increment count
          count++;
          // we remove the piece so that it won't affect the other iterations in this row
          
        } else {
          // if this isn't the last row, we'll create a new branch. In order to avoid interefering with
          // other iterations in this row, we'll create a new board that is a copy of the current one;
//           var newBoard = board.clone(); //?
          setPieces(row + 1, board);
          // remove the piece we added to avoid interfering with other iterations in the row
          
          // move onto the next row by calling the method recursively and passing in the index of the next row
          // and the new board that we created for our new branch
          
        }
        // if there wasn't a conflict, we leave the piece and create a new branch
      } 
      board.togglePiece(row, i);
    }
  }
  // create a board to start with
  var newBoard = new Board({n:n}); 
 // start our recursive function at row 0; 
  setPieces(0, newBoard);
  console.log(count);
  return count;
};




// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme
  var board = new Board({n:n});
  var boardSize = board.get('n');
  console.log("n: " + n);
  var solutionFound = false;

  var setPieces = function(row) {
    console.log(solutionFound);
    if(!solutionFound) {
      console.log("got to here");
      for(var i = 0; i < boardSize; i++) {
        console.log(i);
        board.togglePiece(row, i);
        console.log("row: " + row + " column: " + i);
        // conflicts exist?
        if(board.hasAnyQueensConflicts()) {
          console.log("found conflict");
          board.togglePiece(row, i);
          
        }else{
          if(row === boardSize -1) {
            //assign current board state to solution
            console.log("found solution");
            solution = board.rows();
            //change solution found to be true
            solutionFound = true;
            break;
          } else {
            setPieces(row + 1);
          }
        }
      }
    } 
  };
  if (n === 0){
    solution = [[0]];
  }else{
    setPieces(0);
  }
  

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
