var boardStateArray = [];
var cellsToPaint = [];

// var boardStateArray = new Array(8);
// for (i = 0; i < boardStateArray.length; i++){
//     boardStateArray[i] = new Array(8);
// }
// console.log(boardStateArray);

// String.fromCharCode(parseInt(unicode, 16)) //get unicode chess pieces

var wPawn = String.fromCharCode(parseInt(2659, 16));
var wRook = String.fromCharCode(parseInt(2656, 16));
var wKnight = String.fromCharCode(parseInt(2658, 16));
var wBishop = String.fromCharCode(parseInt(2657, 16));
var wKing = String.fromCharCode(parseInt(2654, 16));
var wQueen = String.fromCharCode(parseInt(2655, 16));
var bPawn = String.fromCharCode(parseInt('265F', 16));
var bRook = String.fromCharCode(parseInt('265C', 16));
var bKnight = String.fromCharCode(parseInt('265E', 16));
var bBishop = String.fromCharCode(parseInt('265D', 16));
var bKing = String.fromCharCode(parseInt('265A', 16));
var bQueen = String.fromCharCode(parseInt('265B', 16));

function setUp() {
    // printNonPawnPieces();
    for(var i = 0; i < 8; i++) {
       var rowArray = [];
       for (var j = 0; j < 8; j++) {
           var cell = document.getElementById;
           var cellId = document.getElementById(i + '' + j);
           cellId.setAttribute('id', i + '' + j);
           var cellObject = {
               id: i + '' + j,
               status: 'none',
           };
           rowArray.push(cellObject);
           if (i === 1){
               cellId.innerHTML = bPawn; //black pawns
               cellObject.pieceType = 'pawn';
               cellObject.pieceColor = 'black';
               cellObject.cellStatus = 'piece';
               cellObject.firstMove = true;
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if (i === 6){
               cellId.innerHTML = wPawn; //white pawns
               cellObject.pieceType = 'pawn';
               cellObject.pieceColor = 'white';
               cellObject.cellStatus = 'piece';
               cellObject.firstMove = true;
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if ((i === 0 && j === 0) || (i === 0 && j === 7)){ //black rooks
               cellId.innerHTML = bRook;
               cellObject.pieceType = 'rook';
               cellObject.pieceColor = 'black';
               cellObject.cellStatus = 'piece';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if ((i === 7 && j === 0) || (i === 7 && j === 7)){ //white rooks
               cellId.innerHTML = wRook;
               cellObject.pieceType = 'rook';
               cellObject.pieceColor = 'white';
               cellObject.cellStatus = 'piece';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if ((i === 0 && j === 2) || (i === 0 && j === 5)){ //black bishops
               cellId.innerHTML = bBishop;
               cellObject.pieceType = 'bishop';
               cellObject.pieceColor = 'black';
               cellObject.cellStatus = 'piece';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if ((i === 7 && j === 2) || (i === 7 && j === 5)){ //white bishops
               cellId.innerHTML = wBishop;
               cellObject.pieceType = 'bishop';
               cellObject.pieceColor = 'white';
               cellObject.cellStatus = 'piece';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if ((i === 0 && j === 1) || (i === 0 && j === 6)){ //black knights
               cellId.innerHTML = bKnight;
               cellObject.pieceType = 'knight';
               cellObject.pieceColor = 'black';
               cellObject.cellStatus = 'piece';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if ((i === 7 && j === 1) || (i === 7 && j === 6)){ //white knights
               cellId.innerHTML = wKnight;
               cellObject.pieceType = 'knight';
               cellObject.pieceColor = 'white';
               cellObject.cellStatus = 'piece';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if (i === 0 && j === 4){ //black king
               cellId.innerHTML = bKing;
               cellObject.pieceType = 'king';
               cellObject.pieceColor = 'black';
               cellObject.cellStatus = 'piece';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if (i === 7 && j === 4){ //white king
               cellId.innerHTML = wKing;
               cellObject.pieceType = 'king';
               cellObject.pieceColor = 'white';
               cellObject.cellStatus = 'piece';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if (i === 0 && j === 3){ //black queen
               cellId.innerHTML = bQueen;
               cellObject.pieceType = 'queen';
               cellObject.pieceColor = 'black';
               cellObject.cellStatus = 'piece';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if (i === 7 && j === 3){ //white queen
               cellId.innerHTML = wQueen;
               cellObject.pieceType = 'queen';
               cellObject.pieceColor = 'white';
               cellObject.cellStatus = 'piece';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if (i > 1 && i < 6){
               cellObject.cellStatus = 'none';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
               document.getElementById(i + '' + j).innerHTML = i + '' + j; //print cell numbers
           }
       }
       boardStateArray.push(rowArray);
   }
   console.log(boardStateArray);
}
setUp();

// function Piece(row, cell, cellObject, id, piece, pieceColor, status, clicked){
//     this.row = parseInt(id[0]);
//     this.cell = parseInt(id[1]);
//     this.cellObject = boardStateArray[row][cell];
//     this.id = id;
//     this.piece = cellObject.piece;
//     this.pieceColor = cellObject.pieceColor;
//     this.status = cellObject.status;
//     this.clicked = true;
//     console.log(boardStateArray);
// }
//
// function Rook(id, piece){
//     Piece.call(this, row, cell, id, 'Rook', pieceColor, status, clicked);
// }
//
// Rook.prototype = Piece.prototpye;
// Rook.prototype.getTargets = function(){
//     checkAvailalbe(row, cell, 'up', pieceColor);
//     checkAvailalbe(row, cell, 'right', pieceColor);
//     checkAvailalbe(row, cell, 'down', pieceColor);
//     checkAvailalbe(row, cell, 'left', pieceColor);
//     updateBoard();
// };

function determinePiece(id){
   var row = parseInt(id[0]);
   var cell = parseInt(id[1]);
   var cellObject = boardStateArray[row][cell];
   var pieceColor = cellObject.pieceColor;
   switch (cellObject.pieceType) {
       case 'rook':
           var myRook = new Rook(id, cellObject);
           myRook.getTargets('up', row, cell, pieceColor);
           myRook.getTargets('down', row, cell, pieceColor);
           myRook.getTargets('left', row, cell, pieceColor);
           myRook.getTargets('right', row, cell, pieceColor);
           console.log(cellsToPaint);
           break;
       case 'bishop':
           var myBishop = new Bishop(id, cellObject);
           myBishop.getTargets('upRight', row, cell, pieceColor);
           myBishop.getTargets('upLeft', row, cell, pieceColor);
           myBishop.getTargets('downRight', row, cell, pieceColor);
           myBishop.getTargets('downLeft', row, cell, pieceColor);
           console.log(cellsToPaint);
           break;
       case 'queen':
           var myQueen = new Queen(id, cellObject);
           myQueen.getTargets('upRight', row, cell, pieceColor);
           myQueen.getTargets('upLeft', row, cell, pieceColor);
           myQueen.getTargets('downRight', row, cell, pieceColor);
           myQueen.getTargets('downLeft', row, cell, pieceColor);
           myQueen.getTargets('up', row, cell, pieceColor);
           myQueen.getTargets('down', row, cell, pieceColor);
           myQueen.getTargets('left', row, cell, pieceColor);
           myQueen.getTargets('right', row, cell, pieceColor);
           console.log(cellsToPaint);
           break;
       case 'knight':
           var myKnight = new Knight(id, cellObject);
           myKnight.getKnightTargets('upRightKn', row, cell, pieceColor, pieceType);
           myKnight.getKnightTargets('upLeftKn', row, cell, pieceColor, pieceType);
           myKnight.getKnightTargets('downRightKn', row, cell, pieceColor, pieceType);
           myKnight.getKnightTargets('downLeftKn', row, cell, pieceColor, pieceType);
           myKnight.getKnightTargets('rightUpKn', row, cell, pieceColor, pieceType);
           myKnight.getKnightTargets('rightDownKn', row, cell, pieceColor, pieceType);
           myKnight.getKnightTargets('leftUpKn', row, cell, pieceColor, pieceType);
           myKnight.getKnightTargets('leftDownKn', row, cell, pieceColor, pieceType);
           console.log(cellsToPaint);
           break;
       case 'king':
           var myKing = new King(id, cellObject);
           myKing.getKnightTargets('upRight', row, cell, pieceColor, pieceType);
           myKing.getKnightTargets('upLeft', row, cell, pieceColor, pieceType);
           myKing.getKnightTargets('downRight', row, cell, pieceColor, pieceType);
           myKing.getKnightTargets('downLeft', row, cell, pieceColor, pieceType);
           myKing.getKnightTargets('up', row, cell, pieceColor, pieceType);
           myKing.getKnightTargets('down', row, cell, pieceColor, pieceType);
           myKing.getKnightTargets('left', row, cell, pieceColor, pieceType);
           myKing.getKnightTargets('right', row, cell, pieceColor, pieceType);
           console.log(cellsToPaint);
           break;
       case 'pawn':
           var myPawn = new Pawn(id, cellObject);
           if (pieceColor === 'black'){
               if (firstMove){
                   myPawn.getKnightTargets('firstDownP', row, cell, pieceColor, pieceType);
                   myPawn.getKnightTargets('down', row, cell, pieceColor, pieceType);
                   myPawn.getKnightTargets('downRight', row, cell, pieceColor, pieceType);
                   myPawn.getKnightTargets('downLeft', row, cell, pieceColor, pieceType);
                   cellObject.firstMove = false;
               }else{
                   myPawn.getKnightTargets('down', row, cell, pieceColor, pieceType);
                   myPawn.getKnightTargets('downRight', row, cell, pieceColor, pieceType);
                   myPawn.getKnightTargets('downLeft', row, cell, pieceColor, pieceType);
               }
           }else{
               if (firstMove){
                   myPawn.getKnightTargets('firstUpP', row, cell, pieceColor, pieceType);
                   myPawn.getKnightTargets('up', row, cell, pieceColor, pieceType);
                   myPawn.getKnightTargets('upRight', row, cell, pieceColor, pieceType);
                   myPawn.getKnightTargets('upLeft', row, cell, pieceColor, pieceType);
                   cellObject.firstMove = false;
               }else{
                   myPawn.getKnightTargets('up', row, cell, pieceColor, pieceType);
                   myPawn.getKnightTargets('upRight', row, cell, pieceColor, pieceType);
                   myPawn.getKnightTargets('upLeft', row, cell, pieceColor, pieceType);
               }
           }
           console.log(cellsToPaint);
           break;
   }
}


function Piece(row, cell, pieceType, pieceColor, cellStatus){
   this.row = row;
   this.cell = cell;
   this.pieceType = pieceType;
   this.pieceColor = pieceColor;
   this.cellStatus = cellStatus;
}
Piece.prototype.getTargets = function(direction, row, cell, pieceColor){
    var fails = 0;
    var cellsHighlighted = 0;
    var justPainted = false;
    while (fails < 2){
        switch (direction) {
            case 'up':
                row--;
                break;
            case 'right':
                cell++;
                break;
            case 'down':
                row++;
                break;
            case 'left':
                cell--;
                break;
            case 'upLeft':
                row--;
                cell--;
                break;
            case 'upRight':
                row--;
                cell++;
                break;
            case 'downLeft':
                row++;
                cell--;
                break;
            case 'downRight':
                row++;
                cell++;
                break;
        }
        if (row < 0 || cell < 0 || row > 7 || cell > 7){
            break;
        }
        if (boardStateArray[row][cell].cellStatus === 'none'){
            var targetCell = (row) + '' + (cell);
            cellsToPaint.push(targetCell);
            boardStateArray[row][cell].cellStatus = 'available';
            if (fails > 0){
                //break?
            }
            fails = 0;
            justPainted = true;
        }else if (boardStateArray[row][cell].cellStatus === 'piece' && boardStateArray[row][cell].pieceColor === pieceColor){
            break;
        }else if (boardStateArray[row][cell].cellStatus === 'piece' && boardStateArray[row][cell].pieceColor !== pieceColor){
            fails++;
            if (justPainted && fails === 0){
                break;
            }
            if (fails > 0){
                justPainted = false;
            }
        }
    }
};
//piece prototype move function?


function Rook(id, cellObject){
   Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, cellObject.cellStatus);
}
Rook.prototype = Piece.prototype;
// Rook.prototype.getRookTargets = function(direction, row, cell, pieceColor) {
    //piece object constructor (new type of object called piece - contructor that takes x and y, what type of piece, build functions for prototype)
    //rook and bishop inherit from piece, create a get targets function for each prototype - each has own implementation - take 2d board array and location of piece to decide where piece can go
    //queen is just rook and bishop get targets functions


   // checkAvailable(this, row, cell, 'up', pieceColor);
   // checkAvailable(this, row, cell, 'right', pieceColor);
   // checkAvailable(this, row, cell, 'down', pieceColor);
   // checkAvailable(this, row, cell, 'left', pieceColor);
   // updateBoard();


   // var fails = 0;
   // var cellsHighlighted = 0;
   // var justPainted = false;
   // while (fails < 2){
   //     switch (direction) {
   //         case 'up':
   //             row--;
   //             break;
   //         case 'right':
   //             cell++;
   //             break;
   //         case 'down':
   //             row++;
   //             break;
   //         case 'left':
   //             cell--;
   //             break;
        //    case 'upLeft':
        //        row--;
        //        cell--;
        //        break;
        //    case 'upRight':
        //        row--;
        //        cell++;
        //        break;
        //    case 'downLeft':
        //        row++;
        //        cell--;
        //        break;
        //    case 'downRight':
        //        row++;
        //        cell++;
        //        break;
//        }
//        if (row < 0 || cell < 0 || row > 7 || cell > 7){
//            break;
//        }
//        if (boardStateArray[row][cell].cellStatus === 'none'){
//            var targetCell = (row) + '' + (cell);
//            cellsToPaint.push(targetCell);
//            boardStateArray[row][cell].cellStatus = 'available';
//            if (fails > 0){
//                //break?
//            }
//            fails = 0;
//            justPainted = true;
//        }else if (boardStateArray[row][cell].cellStatus === 'piece' && boardStateArray[row][cell].pieceColor === pieceColor){
//            break;
//        }else if (boardStateArray[row][cell].cellStatus === 'piece' && boardStateArray[row][cell].pieceColor !== pieceColor){
//            fails++;
//            if (justPainted && fails === 0){
//                break;
//            }
//            if (fails > 0){
//                justPainted = false;
//            }
//        }
//    }
// };


function Bishop(id, cellObject){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, cellObject.cellStatus);
}
Bishop.prototype = Piece.prototype;
// Bishop.prototype.getBishopTargets = function(direction, row, cell, pieceColor){
//     //upLeft, upRight, downLeft, downRight
//     var fails = 0;
//     var cellsHighlighted = 0;
//     var justPainted = false;
//     while (fails < 2){
//         switch (direction) {
//             // case 'up':
            //     row--;
            //     break;
            // case 'right':
            //     cell++;
            //     break;
            // case 'down':
            //     row++;
            //     break;
            // case 'left':
            //     cell--;
            //     break;
//             case 'upLeft':
//                 row--;
//                 cell--;
//                 break;
//             case 'upRight':
//                 row--;
//                 cell++;
//                 break;
//             case 'downLeft':
//                 row++;
//                 cell--;
//                 break;
//             case 'downRight':
//                 row++;
//                 cell++;
//                 break;
//         }
//         if (row < 0 || cell < 0 || row > 7 || cell > 7){
//             break;
//         }
//         if (boardStateArray[row][cell].cellStatus === 'none'){
//             var targetCell = (row) + '' + (cell);
//             cellsToPaint.push(targetCell);
//             boardStateArray[row][cell].cellStatus = 'available';
//             if (fails > 0){
//                 //break?
//             }
//             fails = 0;
//             justPainted = true;
//         }else if (boardStateArray[row][cell].cellStatus === 'piece' && boardStateArray[row][cell].pieceColor === pieceColor){
//             break;
//         }else if (boardStateArray[row][cell].cellStatus === 'piece' && boardStateArray[row][cell].pieceColor !== pieceColor){
//             fails++;
//             if (justPainted && fails === 0){
//                 break;
//             }
//             if (fails > 0){
//                 justPainted = false;
//             }
//         }
//     }
// };

function Queen(id, cellObject){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, cellObject.cellStatus);
}
Queen.prototype = Piece.prototype;
// Queen.prototype = Rook.prototype;
// Queen.prototype = Bishop.prototype;

// Queen.prototype.getQueenTargets = function(direction, row, cell, pieceColor) {
//     Rook.prototype.getRookTargets.call(this);
//     Bishop.prototype.getBishopTargets.call(this);
// };

function Knight(id, cellObject){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, cellObject.cellStatus);
}
Knight.prototype = Piece.prototype;
Knight.prototype.getKnightTargets = function(direction, row, cell, pieceColor, pieceType){
    switch (direction) {
        case 'up':
            row--;
            break;
        case 'right':
            cell++;
            break;
        case 'down':
            row++;
            break;
        case 'left':
            cell--;
            break;
        case 'upLeft':
            row--;
            cell--;
            break;
        case 'upRight':
            row--;
            cell++;
            break;
        case 'downLeft':
            row++;
            cell--;
            break;
        case 'downRight':
            row++;
            cell++;
            break;
        case 'upRightKn':
            row--;
            row--;
            cell++;
            break;
        case 'upLeftKn':
            row--;
            row--;
            cell--;
            break;
        case 'downRightKn':
            row++;
            row++;
            cell++;
            break;
        case 'downLeftKn':
            row++;
            row++;
            cell--;
            break;
        case 'rightUpKn':
            cell++;
            cell++;
            row--;
            break;
        case 'rightDownKn':
            cell++;
            cell++;
            row++;
            break;
        case 'leftUpKn':
            cell--;
            cell--;
            row--;
            break;
        case 'leftDownKn':
            cell--;
            cell--;
            row++;
            break;
        case 'firstDownP':
            row++;
            row++;
            break;
        case 'firstUpP':
            row--;
            row--;
            break;
    }
    if (row < 0 || cell < 0 || row > 7 || cell > 7){
        return;
    }
    if (pieceType == 'pawn'){
        if (direction === 'upLeft' || direction === 'upRight' || direction === 'downLeft' || direction === 'downRight'){
            if (boardStateArray[row][cell].cellStatus === 'none'){
                return;
            }
        }
        if (direction === 'up' || direction === 'down' || direction === 'firstUpP' || direction === 'firstDownP'){
            if (boardStateArray[row][cell].cellStatus === 'piece'){
                return;
            }
        }
    }
    if (boardStateArray[row][cell].cellStatus === 'none'){
        var targetCell = (row) + '' + (cell);
        cellsToPaint.push(targetCell);
        boardStateArray[row][cell].cellStatus = 'available';
        return;
    }else if (boardStateArray[row][cell].cellStatus === 'piece' && boardStateArray[row][cell].pieceColor === pieceColor){
        return;
    }else if (boardStateArray[row][cell].cellStatus === 'piece' && boardStateArray[row][cell].pieceColor !== pieceColor){
        var targetCell = (row) + '' + (cell);
        cellsToPaint.push(targetCell);
        boardStateArray[row][cell].cellStatus = 'available';
        return;
    }
};

function King(id, cellObject){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, cellObject.cellStatus);
}
King.prototype = Piece.prototype;
// King.prototype.getKingTargets = function(direction, row, cell, pieceColor){};

function Pawn(id, cellObject){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, cellObject.cellStatus);
}
Pawn.prototype = Piece.prototype;
// Pawn.prototype.getPawnTargets = function(direction, row, cell, pieceColor){};






// function checkAvailalbe (row, cell, direction, pieceColor){
//     var fails = 0;
//     var cellsHighlighted = 0;
//     var justPainted = false;
//     while (fails < 2){
//         switch (direction) {
//             case 'up':
//                 row--;
//                 break;
//             case 'right':
//                 cell++;
//                 break;
//             case 'down':
//                 row++;
//                 break;
//             case 'left':
//                 cell--;
//                 break;
//             case 'upLeft':
//                 row--;
//                 cell--;
//                 break;
//             case 'upRight':
//                 row--;
//                 cell++;
//                 break;
//             case 'downLeft':
//                 row++;
//                 cell--;
//                 break;
//             case 'downRight':
//                 row++;
//                 cell++;
//                 break;
//         }
//         if (row < 0 || cell < 0 || row > 7 || cell > 7){
//             break;
//         }
//         if (boardStateArray[row][cell].status === 'none'){
//             var targetCell = (row) + '' + (cell);
//             cellsToPaint.push(targetCell);
//             boardStateArray[row][cell].status = 'available';
//             if (fails > 0){
//                 //break?
//             }
//             fails = 0;
//             justPainted = true;
//         }else if (boardStateArray[row][cell].status === 'piece' && boardStateArray[row][cell].piece === pieceColor){
//             break;
//         }else if (boardStateArray[row][cell].status === 'piece' && boardStateArray[row][cell].piece !== pieceColor){
//             fails++;
//             if (justPainted && fails === 0){
//                 break;
//             }
//             if (fails > 0){
//                 justPainted = false;
//             }
//         }
//     }
// }

function updateBoard(typeOfEvent){
    for (var i=0; i<boardStateArray.length; i++){
        for (var j=0; j<boardStateArray[i].length; j++){
            var cellClassArray = document.getElementById(boardStateArray[i][j].id).className.split(' ');
            if (typeOfEvent === 'piece moved'){
            } else{ //if piece doesn't move
                if (boardStateArray[i][j].status === 'available' && _toggleHighlightedCells){
                    cellClassArray.push('available-cell');
                }else if (boardStateArray[i][j].status === 'none'){
                    if (cellClassArray.indexOf('available-cell') !== -1){
                        cellClassArray.splice(cellClassArray.indexOf('available-cell'), 1);
                    }
                    if (cellClassArray.indexOf('clicked-cell') !== -1){
                        cellClassArray.splice(cellClassArray.indexOf('clicked-cell'), 1);
                    }
                }else if (boardStateArray[i][j].clicked === true){
                    cellClassArray.push('clicked-cell');
                }else if (boardStateArray[i][j].status === 'piece' && cellClassArray.indexOf('clicked-cell') !== -1) {
                    cellClassArray.splice(cellClassArray.indexOf('clicked-cell'), 1);
                    _availableSquares = [];
                    boardStateArray[i][j].potentiallyJumpedOver = false;
                }
            }
            document.getElementById(boardStateArray[i][j].id).className = cellClassArray.join(' ');
        }
    }
}
