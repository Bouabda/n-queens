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
  var solution = []; //fixme
  var rook = function(col) { 
  if (col >= n){ 
    return true; 
  }
    for (var i = 0; i < n; i++) {
        if (isSafe(i, col)) { 
            solution[i][col] = 1; 
            if (rook(col + 1)){ 
                return true; 
            }
            solution[i][col] = 0; // BACKTRACK 
        } 
    } 
    return false; 
} 
  var isSafe = function(row, col){ 
    var i, j; 
    for (i = 0; i < col; i++) {
        if (solution[row][i]){ 
            return false; 
        }
    }    
    return true; 
} 
var init = function(){
    solution = new Array(n);
    for(var i = 0; i < n ; i++){
        var temp = new Array(n);
        for(var j = 0; j < n; j++){
            temp[j] = 0;
        }
        solution[i] = temp;
    }
}
init();
rook(0);
  
  console.log (solution);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined  ; //fixme
  var solution = []; //fixme
  var Nsolution = 0;
  var rook = function(col) { 
  if (col >= n){ 
    return true; 
  }
    for (var i = 0; i < n; i++) {
        if (isSafe(i, col)) { 
            solution[i][col] = 1; 
            if (rook(col + 1)){ 
                Nsolution++; 
            }
            solution[i][col] = 0; // BACKTRACK 
        } 
    } 
    return false; 
} 
  var isSafe = function(row, col){ 
    var i, j; 
    for (i = 0; i < col; i++) {
        if (solution[row][i]){ 
            return false; 
        }
    }    
    return true; 
} 
var init = function(){
    solution = new Array(n);
    for(var i = 0; i < n ; i++){
        var temp = new Array(n);
        for(var j = 0; j < n; j++){
            temp[j] = 0;
        }
        solution[i] = temp;
    }
}
init();
rook(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return Nsolution;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var queen = function(col) { 
   if (col >= n){ 
        return true;
   } 
    for (var i = 0; i < n; i++) { 
      if (isSafe(i, col)) { 
      board[i][col] = 1;
        if (queen(col + 1)){ 
           return true; 
        }
       board[i][col] = 0; // BACKTRACK 
      } 
    } 
    return false; 
} 
  var isSafe = function(row, col){ 
    var i, j; 
    for (i = 0; i < col; i++) {
      if (board[row][i]) {
        return false; 
      }
    } 
    /* Check upper diagonal on left side */
    for (i = row, j = col; i >= 0 && j >= 0; i--, j--){ 
        if (board[i][j]) {
            return false;
        }     
    }  
    /* Check lower diagonal on left side */
    for (i = row, j = col; j >= 0 && i < n; i++, j--){ 
        if (board[i][j]) {
            return false; 
        }    
    }
    return true; 
} 
var board;

    board = new Array(n);
    for(var i = 0; i < n ; i++){
      var temp = new Array(n);
        for(var j = 0; j < n; j++){
            temp[j] = 0;
        }
        board[i] = temp;
    }

queen(0);
console.log("board", board)
console.log("n ", n);
if(n === 0){
  return [];
}

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(board));
  return board;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var Nsolution = 0;
  var queen = function(col) { 
    if (col >= n){ 
         return true;
    } 
     for (var i = 0; i < n; i++) { 
       if (isSafe(i, col)) { 
       board[i][col] = 1;
         if (queen(col + 1)){ 
            Nsolution++; 
         }
        board[i][col] = 0; // BACKTRACK 
       } 
     } 
     return false; 
 } 
   var isSafe = function(row, col){ 
     var i, j; 
     for (i = 0; i < col; i++) {
       if (board[row][i]) {
         return false; 
       }
     } 
     /* Check upper diagonal on left side */
     for (i = row, j = col; i >= 0 && j >= 0; i--, j--){ 
         if (board[i][j]) {
             return false;
         }     
     }  
     /* Check lower diagonal on left side */
     for (i = row, j = col; j >= 0 && i < n; i++, j--){ 
         if (board[i][j]) {
             return false; 
         }    
     }
     return true; 
 } 
 var board;
 
     board = new Array(n);
     for(var i = 0; i < n ; i++){
       var temp = new Array(n);
         for(var j = 0; j < n; j++){
             temp[j] = 0;
         }
         board[i] = temp;
     }
 
 queen(0);
 console.log("board", board)
 console.log("n ", n);
 
   

  //console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return Nsolution;
};
