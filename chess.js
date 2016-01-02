var _boardStateArray = [];
var _cellsToPaint = [];
var uCode = {
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
            //    status: 'none',
           };
           rowArray.push(cellObject);
           if (i === 1){ //black pawns
               cellId.innerHTML = uCode.bPawn;
               cellObject.pieceType = 'pawn';
               cellObject.pieceColor = 'black';
            //    cellObject.cellStatus = 'piece';
               cellObject.firstMove = true;
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if (i === 6){ //white pawns
               cellId.innerHTML = uCode.wPawn;
               cellObject.pieceType = 'pawn';
               cellObject.pieceColor = 'white';
            //    cellObject.cellStatus = 'piece';
               cellObject.firstMove = true;
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if ((i === 0 && j === 0) || (i === 0 && j === 7)){ //black rooks
               cellId.innerHTML = uCode.bRook;
               cellObject.pieceType = 'rook';
               cellObject.pieceColor = 'black';
            //    cellObject.cellStatus = 'piece';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if ((i === 7 && j === 0) || (i === 7 && j === 7)){ //white rooks
               cellId.innerHTML = uCode.wRook;
               cellObject.pieceType = 'rook';
               cellObject.pieceColor = 'white';
            //    cellObject.cellStatus = 'piece';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if ((i === 0 && j === 2) || (i === 0 && j === 5)){ //black bishops
               cellId.innerHTML = uCode.bBishop;
               cellObject.pieceType = 'bishop';
               cellObject.pieceColor = 'black';
            //    cellObject.cellStatus = 'piece';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if ((i === 7 && j === 2) || (i === 7 && j === 5)){ //white bishops
               cellId.innerHTML = uCode.wBishop;
               cellObject.pieceType = 'bishop';
               cellObject.pieceColor = 'white';
            //    cellObject.cellStatus = 'piece';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if ((i === 0 && j === 1) || (i === 0 && j === 6)){ //black knights
               cellId.innerHTML = uCode.bKnight;
               cellObject.pieceType = 'knight';
               cellObject.pieceColor = 'black';
            //    cellObject.cellStatus = 'piece';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if ((i === 7 && j === 1) || (i === 7 && j === 6)){ //white knights
               cellId.innerHTML = uCode.wKnight;
               cellObject.pieceType = 'knight';
               cellObject.pieceColor = 'white';
            //    cellObject.cellStatus = 'piece';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if (i === 0 && j === 4){ //black king
               cellId.innerHTML = uCode.bKing;
               cellObject.pieceType = 'king';
               cellObject.pieceColor = 'black';
            //    cellObject.cellStatus = 'piece';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if (i === 7 && j === 4){ //white king
               cellId.innerHTML = uCode.wKing;
               cellObject.pieceType = 'king';
               cellObject.pieceColor = 'white';
            //    cellObject.cellStatus = 'piece';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if (i === 0 && j === 3){ //black queen
               cellId.innerHTML = uCode.bQueen;
               cellObject.pieceType = 'queen';
               cellObject.pieceColor = 'black';
            //    cellObject.cellStatus = 'piece';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if (i === 7 && j === 3){ //white queen
               cellId.innerHTML = uCode.wQueen;
               cellObject.pieceType = 'queen';
               cellObject.pieceColor = 'white';
            //    cellObject.cellStatus = 'piece';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
           } else if (i > 1 && i < 6){ //blank cells
            //    cellObject.cellStatus = 'none';
               cellId.addEventListener("click", function (event){
                   console.log(event);
                   determinePiece(event.target.id);
                   });
               document.getElementById(i + '' + j).innerHTML = i + '' + j; //print cell numbers
           }
       }
       _boardStateArray.push(rowArray);
   }
   console.log(_boardStateArray);
}
setUp();

function determinePiece(id){
   var row = parseInt(id[0]);
   var cell = parseInt(id[1]);
   var cellObject = _boardStateArray[row][cell];
   var pieceColor = cellObject.pieceColor;
   var firstMove = cellObject.firstMove;
   switch (cellObject.pieceType) {
       case 'rook':
           var myRook = new Rook(id, cellObject, _boardStateArray);
           myRook.getTargets('up', row, cell);
           myRook.getTargets('down', row, cell);
           myRook.getTargets('left', row, cell);
           myRook.getTargets('right', row, cell);
           console.log(myRook.cellsToPaint);
           _cellsToPaint = myRook.cellsToPaint;
           paintTargets(_cellsToPaint);
           break;
       case 'bishop':
           var myBishop = new Bishop(id, cellObject, _boardStateArray);
           myBishop.getTargets('upRight', row, cell);
           myBishop.getTargets('upLeft', row, cell);
           myBishop.getTargets('downRight', row, cell);
           myBishop.getTargets('downLeft', row, cell);
           console.log(myBishop.cellsToPaint);
           _cellsToPaint = myBishop.cellsToPaint;
           paintTargets(_cellsToPaint);
           break;
       case 'queen':
           var myQueen = new Queen(id, cellObject, _boardStateArray);
           myQueen.getTargets('upRight', row, cell);
           myQueen.getTargets('upLeft', row, cell);
           myQueen.getTargets('downRight', row, cell);
           myQueen.getTargets('downLeft', row, cell);
           myQueen.getTargets('up', row, cell);
           myQueen.getTargets('down', row, cell);
           myQueen.getTargets('left', row, cell);
           myQueen.getTargets('right', row, cell);
           console.log(myQueen.cellsToPaint);
           _cellsToPaint = myQueen.cellsToPaint;
           paintTargets(_cellsToPaint);
           break;
       case 'knight':
           var myKnight = new Knight(id, cellObject, _boardStateArray);
           myKnight.getKnightTargets('upRightKn', row, cell);
           myKnight.getKnightTargets('upLeftKn', row, cell);
           myKnight.getKnightTargets('downRightKn', row, cell);
           myKnight.getKnightTargets('downLeftKn', row, cell);
           myKnight.getKnightTargets('rightUpKn', row, cell);
           myKnight.getKnightTargets('rightDownKn', row, cell);
           myKnight.getKnightTargets('leftUpKn', row, cell);
           myKnight.getKnightTargets('leftDownKn', row, cell);
           console.log(myKnight.cellsToPaint);
           _cellsToPaint = myKnight.cellsToPaint;
           paintTargets(_cellsToPaint);
           break;
       case 'king':
           var myKing = new King(id, cellObject, _boardStateArray);
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
           paintTargets(_cellsToPaint);
           break;
       case 'pawn':
           var myPawn = new Pawn(id, cellObject, _boardStateArray);
           if (pieceColor === 'black'){
               if (firstMove === true){
                   myPawn.getPawnTargets('firstDownP', row, cell);
                   myPawn.getPawnTargets('down', row, cell);
                   myPawn.getPawnTargets('downRight', row, cell);
                   myPawn.getPawnTargets('downLeft', row, cell);
                   cellObject.firstMove = false; //move this to movePiece or updateBoard function
               }else{
                   myPawn.getPawnTargets('down', row, cell);
                   myPawn.getPawnTargets('downRight', row, cell);
                   myPawn.getPawnTargets('downLeft', row, cell);
               }
           }else{
               if (firstMove === true){
                   myPawn.getPawnTargets('firstUpP', row, cell);
                   myPawn.getPawnTargets('up', row, cell);
                   myPawn.getPawnTargets('upRight', row, cell);
                   myPawn.getPawnTargets('upLeft', row, cell);
                   cellObject.firstMove = false; //move this to movePiece or updateBoard function
               }else{
                   myPawn.getPawnTargets('up', row, cell);
                   myPawn.getPawnTargets('upRight', row, cell);
                   myPawn.getPawnTargets('upLeft', row, cell);
               }
           }
           console.log(myPawn.cellsToPaint);
           _cellsToPaint = myPawn.cellsToPaint;
           paintTargets(_cellsToPaint);
           break;
   }
}


function Piece(row, cell, pieceType, pieceColor, _boardStateArray){
   this.row = row;
   this.cell = cell;
   this.pieceType = pieceType;
   this.pieceColor = pieceColor;
   // this.cellStatus = cellStatus;
   this._boardStateArray = _boardStateArray;
   this.cellsToPaint = [];
}
Piece.prototype.getTargets = function(direction, row, cell){ //do we want to put this on Rook and Bishop, then have Queen use them?
    this.row = row;
    this.cell = cell;
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
            var targetCell = (this.row) + '' + (this.cell);
            this.cellsToPaint.push(targetCell);
            // _boardStateArray[row][cell].cellStatus = 'available';
        }else if (this._boardStateArray[this.row][this.cell] && this._boardStateArray[this.row][this.cell].pieceColor === this.pieceColor){
            break;
        }else if (this._boardStateArray[this.row][this.cell] && this._boardStateArray[this.row][this.cell].pieceColor !== this.pieceColor){
            var targetCell = (this.row) + '' + (this.cell);
            this.cellsToPaint.push(targetCell);
            // _boardStateArray[row][cell].cellStatus = 'available';
            potentialCapture++;
            break;
        }
    }
};
//movePiece function on Piece prototype? will need to empty _cellsToPaint


function Rook(id, cellObject, _boardStateArray){
   Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, _boardStateArray);
}
Rook.prototype = Piece.prototype;
// Rook.prototype.getRookTargets = function(direction) {
//     Piece.prototype.getTargets.call(this);
// };

function Bishop(id, cellObject, _boardStateArray){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, _boardStateArray);
}
Bishop.prototype = Piece.prototype;
// Bishop.prototype.getTargets = function(direction){
//     Piece.getTargets(direction);
// };

function Queen(id, cellObject, _boardStateArray){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, _boardStateArray);
}
Queen.prototype = Piece.prototype;
// Queen.prototype.getTargets = function(direction) {
//     Rook.prototype.getTargets.call(this);
//     Bishop.prototype.getTargets.call(this);
// };

function Knight(id, cellObject, _boardStateArray){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, _boardStateArray);
}
Knight.prototype = Piece.prototype;
Knight.prototype.getKnightTargets = function(direction, row, cell){
    this.row = row;
    this.cell = cell;
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
        var targetCell = (this.row) + '' + (this.cell);
        this.cellsToPaint.push(targetCell);
        // _boardStateArray[row][cell].cellStatus = 'available';
        return;
    }else if (this._boardStateArray[this.row][this.cell] && this._boardStateArray[this.row][this.cell].pieceColor === this.pieceColor){
        return;
    }else if (this._boardStateArray[this.row][this.cell] && this._boardStateArray[this.row][this.cell].pieceColor !== this.pieceColor){
        var targetCell = (this.row) + '' + (this.cell);
        this.cellsToPaint.push(targetCell);
        // _boardStateArray[row][cell].cellStatus = 'available';
        return;
    }
};

function King(id, cellObject, _boardStateArray){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, _boardStateArray);
}
King.prototype = Piece.prototype;
King.prototype.getKingTargets = function(direction, row, cell){
    this.row = row;
    this.cell = cell;
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
        var targetCell = (this.row) + '' + (this.cell);
        this.cellsToPaint.push(targetCell);
        // _boardStateArray[row][cell].cellStatus = 'available';
        return;
    }else if (this._boardStateArray[this.row][this.cell] && this._boardStateArray[this.row][this.cell].pieceColor === this.pieceColor){
        return;
    }else if (this._boardStateArray[this.row][this.cell] && this._boardStateArray[this.row][this.cell].pieceColor !== this.pieceColor){
        var targetCell = (this.row) + '' + (this.cell);
        this.cellsToPaint.push(targetCell);
        // _boardStateArray[row][cell].cellStatus = 'available';
        return;
    }
};

function Pawn(id, cellObject, _boardStateArray){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, _boardStateArray);
}
Pawn.prototype = Piece.prototype;
Pawn.prototype.getPawnTargets = function(direction, row, cell){
    this.row = row;
    this.cell = cell;
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
            this.row++;
            break;
        case 'firstUpP':
            this.row--;
            this.row--;
            break;
    }
    if (this.row < 0 || this.cell < 0 || this.row > 7 || this.cell > 7){
        return;
    }
    if (direction === 'upLeft' || direction === 'upRight' || direction === 'downLeft' || direction === 'downRight'){
        if (!this._boardStateArray[this.row][this.cell].pieceType){
            return;
        }
    }
    if (direction === 'up' || direction === 'down' || direction === 'firstUpP' || direction === 'firstDownP'){
        if (this._boardStateArray[this.row][this.cell].pieceType){
            return;
        }
    }
    if (!this._boardStateArray[this.row][this.cell].pieceType){
        var targetCell = (this.row) + '' + (this.cell);
        this.cellsToPaint.push(targetCell);
        // _boardStateArray[row][cell].cellStatus = 'available';
        return;
    }else if (this._boardStateArray[this.row][this.cell] && this._boardStateArray[this.row][this.cell].pieceColor === this.pieceColor){
        return;
    }else if (this._boardStateArray[this.row][this.cell] && this._boardStateArray[this.row][this.cell].pieceColor !== this.pieceColor){
        var targetCell = (this.row) + '' + (this.cell);
        this.cellsToPaint.push(targetCell);
        // _boardStateArray[row][cell].cellStatus = 'available';
        return;
    }
};

function paintTargets(_cellsToPaint){
        var availableRow;
        var availableCell;
        var cellClassArray;
    for (var i=0; i < _cellsToPaint.length; i++){
        availableRow = parseInt(_cellsToPaint[i][0]);
        availableCell = parseInt(_cellsToPaint[i][1]);
        cellClassArray = document.getElementById(_boardStateArray[availableRow][availableCell].id).className.split(' ');
        cellClassArray.push('available-cell');
    }
    document.getElementById(_boardStateArray[availableRow][availableCell].id).className = cellClassArray.join(' ');
    console.log(_boardStateArray);
}
