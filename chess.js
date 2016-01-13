var _boardStateArray = [];
var _cellsToPaint = [];
var _cellsForCheck = [];
var _pieceEnRouteObject = {};
var _pieceEnRouteHTML = '';
var _checkingForCheck = false;
var _kingOpponentColor = '';
var _pieceHighlighted = false;
var _kingWithinKing = false;
var _turnCount = 0;
var _uCode = {
    wPawn: String.fromCharCode(parseInt(2659, 16)),
    wRook: String.fromCharCode(parseInt(2656, 16)),
    wKnight: String.fromCharCode(parseInt(2658, 16)),
    wBishop: String.fromCharCode(parseInt(2657, 16)),
    wKing: String.fromCharCode(parseInt(2654, 16)),
    wQueen: String.fromCharCode(parseInt(2655, 16)),
    bPawn: String.fromCharCode(parseInt('265F', 16)),
    bRook: String.fromCharCode(parseInt('265C', 16)),
    bKnight: String.fromCharCode(parseInt('265E', 16)),
    bBishop: String.fromCharCode(parseInt('265D', 16)),
    bKing: String.fromCharCode(parseInt('265A', 16)),
    bQueen: String.fromCharCode(parseInt('265B', 16))
};

function setUp() {
    for(var i = 0; i < 8; i++) {
       var rowArray = [];
       for (var j = 0; j < 8; j++) {
           var cell = document.getElementById;
           var cellId = document.getElementById(i + '' + j);
           cellId.setAttribute('id', i + '' + j);
           var cellObject = {
               id: i + '' + j,
           };
           rowArray.push(cellObject);
           if (i === 1){ //black pawns
               cellId.innerHTML = _uCode.bPawn;
               cellObject.pieceType = 'pawn';
               cellObject.pieceColor = 'black';
               cellObject.firstMove = true;
               cellId.addEventListener("click", function (event){
                //    console.log(event);
                   movePiece(event.target.id);
                   });
            //  document.getElementById(i + '' + j).innerHTML = i + '' + j; //print cell numbers
           } else if (i === 6){ //white pawns
               cellId.innerHTML = _uCode.wPawn;
               cellObject.pieceType = 'pawn';
               cellObject.pieceColor = 'white';
               cellObject.firstMove = true;
               cellId.addEventListener("click", function (event){
                //    console.log(event);
                   movePiece(event.target.id);
                   });
            // document.getElementById(i + '' + j).innerHTML = i + '' + j; //print cell numbers
           } else if ((i === 0 && j === 0) || (i === 0 && j === 7)){ //black rooks
               cellId.innerHTML = _uCode.bRook;
               cellObject.pieceType = 'rook';
               cellObject.pieceColor = 'black';
               cellId.addEventListener("click", function (event){
                //    console.log(event);
                   movePiece(event.target.id);
                   });
           } else if ((i === 7 && j === 0) || (i === 7 && j === 7)){ //white rooks
               cellId.innerHTML = _uCode.wRook;
               cellObject.pieceType = 'rook';
               cellObject.pieceColor = 'white';
               cellId.addEventListener("click", function (event){
                //    console.log(event);
                   movePiece(event.target.id);
                   });
           } else if ((i === 0 && j === 2) || (i === 0 && j === 5)){ //black bishops
               cellId.innerHTML = _uCode.bBishop;
               cellObject.pieceType = 'bishop';
               cellObject.pieceColor = 'black';
               cellId.addEventListener("click", function (event){
                //    console.log(event);
                   movePiece(event.target.id);
                   });
           } else if ((i === 7 && j === 2) || (i === 7 && j === 5)){ //white bishops
               cellId.innerHTML = _uCode.wBishop;
               cellObject.pieceType = 'bishop';
               cellObject.pieceColor = 'white';
               cellId.addEventListener("click", function (event){
                //    console.log(event);
                   movePiece(event.target.id);
                   });
           } else if ((i === 0 && j === 1) || (i === 0 && j === 6)){ //black knights
               cellId.innerHTML = _uCode.bKnight;
               cellObject.pieceType = 'knight';
               cellObject.pieceColor = 'black';
               cellId.addEventListener("click", function (event){
                //    console.log(event);
                   movePiece(event.target.id);
                   });
           } else if ((i === 7 && j === 1) || (i === 7 && j === 6)){ //white knights
               cellId.innerHTML = _uCode.wKnight;
               cellObject.pieceType = 'knight';
               cellObject.pieceColor = 'white';
               cellId.addEventListener("click", function (event){
                //    console.log(event);
                   movePiece(event.target.id);
                   });
           } else if (i === 0 && j === 4){ //black king
               cellId.innerHTML = _uCode.bKing;
               cellObject.pieceType = 'king';
               cellObject.pieceColor = 'black';
               cellId.addEventListener("click", function (event){
                //    console.log(event);
                   movePiece(event.target.id);
                   });
           } else if (i === 7 && j === 4){ //white king
               cellId.innerHTML = _uCode.wKing;
               cellObject.pieceType = 'king';
               cellObject.pieceColor = 'white';
               cellId.addEventListener("click", function (event){
                //    console.log(event);
                   movePiece(event.target.id);
                   });
           } else if (i === 0 && j === 3){ //black queen
               cellId.innerHTML = _uCode.bQueen;
               cellObject.pieceType = 'queen';
               cellObject.pieceColor = 'black';
               cellId.addEventListener("click", function (event){
                //    console.log(event);
                   movePiece(event.target.id);
                   });
           } else if (i === 7 && j === 3){ //white queen
               cellId.innerHTML = _uCode.wQueen;
               cellObject.pieceType = 'queen';
               cellObject.pieceColor = 'white';
               cellId.addEventListener("click", function (event){
                //    console.log(event);
                   movePiece(event.target.id);
                   });
           } else if (i > 1 && i < 6){ //blank cells
               cellId.innerHTML = '';
               cellId.addEventListener("click", function (event){
                //    console.log(event);
                   movePiece(event.target.id);
                   });
            //    document.getElementById(i + '' + j).innerHTML = i + '' + j; //print cell numbers
           }
       }
       _boardStateArray.push(rowArray);
   }
   console.log(_boardStateArray);
}
setUp();

function newGameAlert(){
    swal("White goes first", "Good luck!");
}
newGameAlert();

function isEven(number){
    return number % 2 === 0;
}

function movePiece(id){
   var row = parseInt(id[0]);
   var cell = parseInt(id[1]);
   var cellObject = _boardStateArray[row][cell];
   var pieceColor = cellObject.pieceColor;
   var firstMove = cellObject.firstMove;
   var clickedCell = document.getElementById(row + '' + cell);
   if (!_checkingForCheck && cellObject.pieceType && !cellObject.painted){ // forces alternating turns
       if (isEven(_turnCount) && cellObject.pieceColor === 'black'){
           swal("Oops!", "Not your turn!", "error"); // error
           return;
       }else if (!isEven(_turnCount) && cellObject.pieceColor === 'white'){
           swal("Oops!", "Not your turn!", "error"); // error
           return;
       }
   }
   if (_checkingForCheck){
       if (pieceColor !== _kingOpponentColor){
           return;
       }
   }
   if (cellObject.firstClick === true){
       clickedCell.setAttribute('class', 'cell'); //un-paint clicked cell
       for (var k=0; k < _boardStateArray.length; k++){
           for (var l=0; l < _boardStateArray.length; l++){
               if (_boardStateArray[k][l].painted === true){
                   document.getElementById(k + '' + l).setAttribute('class', 'cell'); //un-paint available cells
                   delete _boardStateArray[k][l].painted;
               }
           }
       }
       delete cellObject.firstClick;
       _pieceEnRouteObject = {};
       _pieceEnRouteHTML = '';
       _pieceHighlighted = false;
       _cellsToPaint = [];
       _cellsForCheck = [];
       return;
   }else if (cellObject.painted === true && !_checkingForCheck){ //this is the second click - move piece and update board
       cellObject.newLocation = true;
       updateBoard();
       _turnCount++;
       _pieceHighlighted = false;
       return; //leave function after move
   } else if (!_checkingForCheck){ //else this is a first click, set to true
       if (_pieceHighlighted){
           return;
       }
       _pieceEnRouteObject.pieceType = cellObject.pieceType; //temp store cellObject of firstClick
       _pieceEnRouteObject.pieceColor = cellObject.pieceColor;
       _pieceEnRouteObject.firstMove = cellObject.firstMove;
       _pieceEnRouteHTML = document.getElementById(row + '' + cell).innerHTML; //temp store the innerHTML of firstClick
       if (!_checkingForCheck && !_pieceHighlighted){
           if (!cellObject.pieceType && !cellObject.painted){
               return;
           }
           cellObject.firstClick = true;
           clickedCell.setAttribute('class', 'clicked-cell'); //paint clicked cell
           _pieceHighlighted = true;
       }
   }
   switch (cellObject.pieceType) {
       case 'rook':
           var myRook = new Rook(id, cellObject, _boardStateArray, _checkingForCheck, _cellsForCheck);
           myRook.getTargets('up', row, cell);
           myRook.getTargets('down', row, cell);
           myRook.getTargets('left', row, cell);
           myRook.getTargets('right', row, cell);
        //    console.log(myRook.cellsToPaint);
           if (!_checkingForCheck){
               _cellsToPaint = myRook.cellsToPaint;
               paintTargets(_cellsToPaint);
           }
        //    console.log(_cellsForCheck);
           break;
       case 'bishop':
           var myBishop = new Bishop(id, cellObject, _boardStateArray, _checkingForCheck, _cellsForCheck);
           myBishop.getTargets('upRight', row, cell);
           myBishop.getTargets('upLeft', row, cell);
           myBishop.getTargets('downRight', row, cell);
           myBishop.getTargets('downLeft', row, cell);
        //    console.log(myBishop.cellsToPaint);
           if (!_checkingForCheck){
               _cellsToPaint = myBishop.cellsToPaint;
               paintTargets(_cellsToPaint);
           }
        //    console.log(_cellsForCheck);
           break;
       case 'queen':
           var myQueen = new Queen(id, cellObject, _boardStateArray, _checkingForCheck, _cellsForCheck);
           myQueen.getTargets('upRight', row, cell);
           myQueen.getTargets('upLeft', row, cell);
           myQueen.getTargets('downRight', row, cell);
           myQueen.getTargets('downLeft', row, cell);
           myQueen.getTargets('up', row, cell);
           myQueen.getTargets('down', row, cell);
           myQueen.getTargets('left', row, cell);
           myQueen.getTargets('right', row, cell);
        //    console.log(myQueen.cellsToPaint);
           if (!_checkingForCheck){
               _cellsToPaint = myQueen.cellsToPaint;
               paintTargets(_cellsToPaint);
           }
        //    console.log(_cellsForCheck);
           break;
       case 'knight':
           var myKnight = new Knight(id, cellObject, _boardStateArray, _checkingForCheck, _cellsForCheck);
           myKnight.getKnightTargets('upRightKn', row, cell);
           myKnight.getKnightTargets('upLeftKn', row, cell);
           myKnight.getKnightTargets('downRightKn', row, cell);
           myKnight.getKnightTargets('downLeftKn', row, cell);
           myKnight.getKnightTargets('rightUpKn', row, cell);
           myKnight.getKnightTargets('rightDownKn', row, cell);
           myKnight.getKnightTargets('leftUpKn', row, cell);
           myKnight.getKnightTargets('leftDownKn', row, cell);
        //    console.log(myKnight.cellsToPaint);
           if (!_checkingForCheck){
               _cellsToPaint = myKnight.cellsToPaint;
               paintTargets(_cellsToPaint);
           }
        //    console.log(_cellsForCheck);
           break;
       case 'king':
           if (_checkingForCheck && cellObject.pieceType === 'king'){
               return;
           }else{
               var myKing = new King(id, cellObject, _boardStateArray, _checkingForCheck, _cellsForCheck);
               myKing.getKingTargets('upRight', row, cell);
               myKing.getKingTargets('upLeft', row, cell);
               myKing.getKingTargets('downRight', row, cell);
               myKing.getKingTargets('downLeft', row, cell);
               myKing.getKingTargets('up', row, cell);
               myKing.getKingTargets('down', row, cell);
               myKing.getKingTargets('left', row, cell);
               myKing.getKingTargets('right', row, cell);
               console.log(myKing.cellsToPaint);
               _cellsToPaint = myKing.cellsToPaint;
               _checkingForCheck = true;
               if (pieceColor === 'black'){
                   _kingOpponentColor = 'white';
               }else{
                   _kingOpponentColor = 'black';
               }
               checkForCheck();
               _checkingForCheck = false;
               paintTargets(_cellsToPaint);
            //    myKing.checkForCheck(myKing.cellsToPaint, _kingOpponentColor, _cellsForCheck, _kingWithinKing);
           }
        //    if (!_kingWithinKing){
        //        _cellsToPaint = myKing.cellsToPaint;
        //        _checkingForCheck = true;
        //        if (pieceColor === 'black'){
        //            _kingOpponentColor = 'white';
        //        }else{
        //            _kingOpponentColor = 'black';
        //        }
            //    checkForCheck();
            //    _checkingForCheck = false;
            //    paintTargets(_cellsToPaint);
        //        myKing.checkForCheck(myKing.cellsToPaint, _kingOpponentColor, _cellsForCheck, _kingWithinKing);
        //    }
        //    if (!_kingWithinKing){
        //        _checkingForCheck = false;
        //        paintTargets(_cellsToPaint);
        //    }
            // console.log(_cellsForCheck);
           break;
       case 'pawn':
           var myPawn = new Pawn(id, cellObject, _boardStateArray, _checkingForCheck, _cellsForCheck);
           if (cellObject.firstMove === undefined){
               cellObject.firstMove = true;
           }
           if (pieceColor === 'black'){
               myPawn.getPawnTargets('down', row, cell);
               myPawn.getPawnTargets('downRight', row, cell);
               myPawn.getPawnTargets('downLeft', row, cell);
               if (cellObject.firstMove === true){
                   myPawn.getPawnTargets('firstDownP', row, cell);
                //    cellObject.firstMove = false; //move this to movePiece or updateBoard function
               }
           }else{
               myPawn.getPawnTargets('up', row, cell);
               myPawn.getPawnTargets('upRight', row, cell);
               myPawn.getPawnTargets('upLeft', row, cell);
               if (cellObject.firstMove === true){
                   myPawn.getPawnTargets('firstUpP', row, cell);
                //    cellObject.firstMove = false; //move this to movePiece or updateBoard function
               }
           }
        //    console.log(myPawn.cellsToPaint);
           if (!_checkingForCheck){
               _cellsToPaint = myPawn.cellsToPaint;
               paintTargets(_cellsToPaint);
           }
        //    console.log(_cellsForCheck);
           break;
   }
}


function Piece(row, cell, pieceType, pieceColor, _boardStateArray, _checkingForCheck){ //, _cellsForCheck
   this.row = row;
   this.cell = cell;
   this.pieceType = pieceType;
   this.pieceColor = pieceColor;
   this._boardStateArray = _boardStateArray;
   this.cellsToPaint = [];
   this._checkingForCheck = _checkingForCheck;
   this._cellsForCheck = _cellsForCheck;
}
Piece.prototype.getTargets = function(direction, row, cell){ //do we want to put this on Rook and Bishop, then have Queen use them?
    this.row = row;
    this.cell = cell;
    var targetCell;
    var potentialCapture = 0;
    while (potentialCapture === 0){
        switch (direction) {
            case 'up':
                this.row--;
                break;
            case 'right':
                this.cell++;
                break;
            case 'down':
                this.row++;
                break;
            case 'left':
                this.cell--;
                break;
            case 'upLeft':
                this.row--;
                this.cell--;
                break;
            case 'upRight':
                this.row--;
                this.cell++;
                break;
            case 'downLeft':
                this.row++;
                this.cell--;
                break;
            case 'downRight':
                this.row++;
                this.cell++;
                break;
        }
        if (this.row < 0 || this.cell < 0 || this.row > 7 || this.cell > 7){
            break;
        }
        if (!this._boardStateArray[this.row][this.cell].pieceType){
            targetCell = (this.row) + '' + (this.cell);
            if (_checkingForCheck){
                this._cellsForCheck.push(targetCell);
            }else{
                this.cellsToPaint.push(targetCell);
                // this._boardStateArray[this.row][this.cell].painted = true;
            }
        }else if (this._boardStateArray[this.row][this.cell] && this._boardStateArray[this.row][this.cell].pieceColor === this.pieceColor){
            break;
        }else if (this._boardStateArray[this.row][this.cell] && this._boardStateArray[this.row][this.cell].pieceColor !== this.pieceColor){
            targetCell = (this.row) + '' + (this.cell);
            if (_checkingForCheck){
                this._cellsForCheck.push(targetCell);
            }else{
                this.cellsToPaint.push(targetCell);
                // this._boardStateArray[this.row][this.cell].painted = true;
            }
            potentialCapture++;
            break;
        }
    }
};

function Rook(id, cellObject, _boardStateArray, _checkingForCheck, _cellsForCheck){
   Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, _boardStateArray, _checkingForCheck, _cellsForCheck);
}
Rook.prototype = Piece.prototype;


function Bishop(id, cellObject, _boardStateArray, _checkingForCheck, _cellsForCheck){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, _boardStateArray, _checkingForCheck, _cellsForCheck);
}
Bishop.prototype = Piece.prototype;


function Queen(id, cellObject, _boardStateArray, _checkingForCheck, _cellsForCheck){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, _boardStateArray, _checkingForCheck, _cellsForCheck);
}
Queen.prototype = Piece.prototype;


function Knight(id, cellObject, _boardStateArray, _checkingForCheck, _cellsForCheck){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, _boardStateArray, _checkingForCheck, _cellsForCheck);
}
Knight.prototype = Piece.prototype;
Knight.prototype.getKnightTargets = function(direction, row, cell){
    this.row = row;
    this.cell = cell;
    var targetCell;
    switch (direction) {
        case 'upRightKn':
            this.row--;
            this.row--;
            this.cell++;
            break;
        case 'upLeftKn':
            this.row--;
            this.row--;
            this.cell--;
            break;
        case 'downRightKn':
            this.row++;
            this.row++;
            this.cell++;
            break;
        case 'downLeftKn':
            this.row++;
            this.row++;
            this.cell--;
            break;
        case 'rightUpKn':
            this.cell++;
            this.cell++;
            this.row--;
            break;
        case 'rightDownKn':
            this.cell++;
            this.cell++;
            this.row++;
            break;
        case 'leftUpKn':
            this.cell--;
            this.cell--;
            this.row--;
            break;
        case 'leftDownKn':
            this.cell--;
            this.cell--;
            this.row++;
            break;
    }
    if (this.row < 0 || this.cell < 0 || this.row > 7 || this.cell > 7){
        return;
    }
    if (!this._boardStateArray[this.row][this.cell].pieceType){
        targetCell = (this.row) + '' + (this.cell);
        if (_checkingForCheck){
            this._cellsForCheck.push(targetCell);
        }else{
            this.cellsToPaint.push(targetCell);
            // this._boardStateArray[this.row][this.cell].painted = true;
        }
        return;
    }else if (this._boardStateArray[this.row][this.cell] && this._boardStateArray[this.row][this.cell].pieceColor === this.pieceColor){
        return;
    }else if (this._boardStateArray[this.row][this.cell] && this._boardStateArray[this.row][this.cell].pieceColor !== this.pieceColor){
        targetCell = (this.row) + '' + (this.cell);
        if (_checkingForCheck){
            this._cellsForCheck.push(targetCell);
        }else{
            this.cellsToPaint.push(targetCell);
            // this._boardStateArray[this.row][this.cell].painted = true;
        }
        return;
    }
};

function King(id, cellObject, _boardStateArray, _checkingForCheck, _cellsForCheck){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, _boardStateArray, _checkingForCheck, _cellsForCheck);
}
King.prototype = Piece.prototype;
King.prototype.getKingTargets = function(direction, row, cell){
    this.row = row;
    this.cell = cell;
    var targetCell;
    switch (direction) {
        case 'up':
            this.row--;
            break;
        case 'right':
            this.cell++;
            break;
        case 'down':
            this.row++;
            break;
        case 'left':
            this.cell--;
            break;
        case 'upLeft':
            this.row--;
            this.cell--;
            break;
        case 'upRight':
            this.row--;
            this.cell++;
            break;
        case 'downLeft':
            this.row++;
            this.cell--;
            break;
        case 'downRight':
            this.row++;
            this.cell++;
            break;
    }
    if (this.row < 0 || this.cell < 0 || this.row > 7 || this.cell > 7){
        return;
    }
    if (!this._boardStateArray[this.row][this.cell].pieceType){
        targetCell = (this.row) + '' + (this.cell);
        if (_checkingForCheck){
            this._cellsForCheck.push(targetCell);
        }else{
            this.cellsToPaint.push(targetCell);
            // this._boardStateArray[this.row][this.cell].painted = true;
        }
        return;
    }else if (this._boardStateArray[this.row][this.cell] && this._boardStateArray[this.row][this.cell].pieceColor === this.pieceColor){
        return;
    }else if (this._boardStateArray[this.row][this.cell] && this._boardStateArray[this.row][this.cell].pieceColor !== this.pieceColor){
        targetCell = (this.row) + '' + (this.cell);
        if (_checkingForCheck){
            this._cellsForCheck.push(targetCell);
        }else{
            this.cellsToPaint.push(targetCell);
            // this._boardStateArray[this.row][this.cell].painted = true;
        }
        return;
    }
};
// King.prototype.checkForCheck = function(cellsToPaint, _kingOpponentColor, _cellsForCheck, _kingWithinKing){
//     for (var i=0; i < this._boardStateArray.length; i++){
//         for (var j=0; j < this._boardStateArray.length; j++){
//             if (this._boardStateArray[i][j].pieceType && this._boardStateArray[i][j].pieceColor === _kingOpponentColor){
//                 if(this._boardStateArray[i][j].pieceType === 'king'){
//                     this._kingWithinKing = true;
//                     movePiece(i + '' + j);
//                     // this._kingWithinKing = false;
//                 }else{
//                     movePiece(i + '' + j);
//                 }
//             }
//         }
//     }
//     this._kingWithinKing = false;
//     for (var k=0; k < this.cellsToPaint.length; k++){
//         for(var l=0; l < this._cellsForCheck.length; l++){
//             if(this.cellsToPaint[k] === this._cellsForCheck[l]) { //value is in both arrays
//                 // this.cellsToPaint.splice(this.cellsToPaint[k], 1); THIS IS WRONG!!!!
//                 this.cellsToPaint.splice(k, 1);
//                 i--;
//             }
//         }
//     }
// };

function Pawn(id, cellObject, _boardStateArray, _checkingForCheck, _cellsForCheck){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, _boardStateArray, _checkingForCheck, _cellsForCheck);
}
Pawn.prototype = Piece.prototype;
Pawn.prototype.getPawnTargets = function(direction, row, cell){
    this.row = row;
    this.cell = cell;
    var targetCell;
    switch (direction) {
        case 'up':
            this.row--;
            break;
        case 'down':
            this.row++;
            break;
        case 'upLeft':
            this.row--;
            this.cell--;
            break;
        case 'upRight':
            this.row--;
            this.cell++;
            break;
        case 'downLeft':
            this.row++;
            this.cell--;
            break;
        case 'downRight':
            this.row++;
            this.cell++;
            break;
        case 'firstDownP':
            this.row++;
            if (this._boardStateArray[this.row][this.cell].pieceType){
                break;
            }else{
                this.row++;
            }
            break;
        case 'firstUpP':
            this.row--;
            if (this._boardStateArray[this.row][this.cell].pieceType){
                break;
            }else{
                this.row--;
            }
            break;
    }
    if (this.row < 0 || this.cell < 0 || this.row > 7 || this.cell > 7){
        return;
    }
    if (direction === 'upLeft' || direction === 'upRight' || direction === 'downLeft' || direction === 'downRight'){
        if (_checkingForCheck){
            targetCell = (this.row) + '' + (this.cell);
            this._cellsForCheck.push(targetCell);
        } else if (!this._boardStateArray[this.row][this.cell].pieceType){
            return;
        }
    }
    if (direction === 'up' || direction === 'down' || direction === 'firstUpP' || direction === 'firstDownP'){
        if (_checkingForCheck){
            return;
        }else if (this._boardStateArray[this.row][this.cell].pieceType){
            return;
        }
    }
    if (!this._boardStateArray[this.row][this.cell].pieceType){
        targetCell = (this.row) + '' + (this.cell);
        if (_checkingForCheck){
            this._cellsForCheck.push(targetCell);
        }else{
            this.cellsToPaint.push(targetCell);
            // this._boardStateArray[this.row][this.cell].painted = true;
        }
        return;
    }else if (this._boardStateArray[this.row][this.cell] && this._boardStateArray[this.row][this.cell].pieceColor === this.pieceColor){
        return;
    }else if (this._boardStateArray[this.row][this.cell] && this._boardStateArray[this.row][this.cell].pieceColor !== this.pieceColor){
        targetCell = (this.row) + '' + (this.cell);
        if (_checkingForCheck){
            this._cellsForCheck.push(targetCell);
        }else{
            this.cellsToPaint.push(targetCell);
            // this._boardStateArray[this.row][this.cell].painted = true;
        }
        return;
    }
};

function checkForCheck(){
    for (var i=0; i < _boardStateArray.length; i++){
        for (var j=0; j < _boardStateArray.length; j++){
            if (_boardStateArray[i][j].pieceType && _boardStateArray[i][j].pieceColor === _kingOpponentColor){
                if(_boardStateArray[i][j].pieceType === 'king'){
                    _kingWithinKing = true;
                    movePiece(i + '' + j);
                    _kingWithinKing = false;
                }else{
                    movePiece(i + '' + j);
                }
            }
        }
    }
    for (var k=0; k < _cellsToPaint.length; k++){
        for(var l=0; l < _cellsForCheck.length; l++){
            if(_cellsToPaint[k] === _cellsForCheck[l]) { //value is in both arrays
                // this.cellsToPaint.splice(this.cellsToPaint[k], 1); THIS IS WRONG!!!!
                _cellsToPaint.splice(k, 1);
                k--;
            }
        }
    }
}

function paintTargets(_cellsToPaint){
    for (var i=0; i < _cellsToPaint.length; i++){
        var availableRow = parseInt(_cellsToPaint[i][0]);
        var availableCell = parseInt(_cellsToPaint[i][1]);
        _boardStateArray[availableRow][availableCell].painted = true;
        var cellId = document.getElementById(availableRow + '' + availableCell);
        cellId.setAttribute('class', 'available-cell');
    }
}

function updateBoard(){
    for (var i=0; i < _boardStateArray.length; i++){
        delete _pieceEnRouteObject.firstClick;
        for (var j=0; j < _boardStateArray.length; j++){
            if (_boardStateArray[i][j].firstClick === true){
                // document.getElementById(i + '' + j).innerHTML = i + '' + j; //print cell numbers
                document.getElementById(i + '' + j).innerHTML = ''; //delete innerHTML of firstClick
                document.getElementById(i + '' + j).setAttribute('class', 'cell'); //un-paint
                delete _boardStateArray[i][j].firstClick; // delete .firstClick
                delete _boardStateArray[i][j].pieceType; // delete .pieceType
                delete _boardStateArray[i][j].pieceColor; // delete .pieceColor
            }
            if (_boardStateArray[i][j].newLocation === true){
                if (_boardStateArray[i][j].pieceType){
                    if(_boardStateArray[i][j].pieceType === 'king'){
                        swal({
                            title: "CONGRATULATIONS!",
                            text: "You have captured the enemy King!",
                            type: "success",
                            confirmButtonColor: "#DD6B55",
                            confirmButtonText: "Start a New Game!",
                            closeOnConfirm: false,
                            },
                                function(isConfirm){
                                    if (isConfirm) {
                                        resetGame();
                                    }
                                });
                    }
                }else{
                    // document.getElementById(i + '' + j).innerHTML = i + '' + j;
                }
                document.getElementById(i + '' + j).innerHTML = _pieceEnRouteHTML; // print piece in newLocation
                document.getElementById(i + '' + j).setAttribute('class', 'cell'); // un-paint
                _boardStateArray[i][j] = _pieceEnRouteObject; // add temp cellObject to newLocation
                _boardStateArray[i][j].firstMove = false; // firstMove is false so that pawn will not paint 2 cells after one move
                delete _boardStateArray[i][j].newLocation; // delete .newLocation
            }
            if (_boardStateArray[i][j].painted === true){
                document.getElementById(i + '' + j).setAttribute('class', 'cell'); //un-paint
                delete _boardStateArray[i][j].painted;
            }
        }
    }
    _cellsToPaint = [];
    _cellsForCheck = [];
    _pieceEnRouteObject = {};
    _pieceEnRouteHTML = '';
    _kingOpponentColor = '';
    // console.log(_boardStateArray);
    // console.log(_cellsToPaint);
}

function resetGame(){
    _boardStateArray = [];
    setUp();
    _cellsToPaint = [];
    _cellsForCheck = [];
    _pieceEnRouteObject = {};
    _pieceEnRouteHTML = '';
    _checkingForCheck = false;
    _kingOpponentColor = '';
    _pieceHighlighted = false;
    _kingWithinKing = false;
    _turnCount = 0;
    newGameAlert();

}
