function generateBoard(whiteQueen,blackQueen){

    var board = []
    var generadtedBoard = board

    for (i = 0; i < 8; i++){
        zeroArray = []
        for (x = 0; x < 8; x++){
            zeroArray.push(0)
        }
        board.push(zeroArray)
    }

    var whiteQueenArray = []

    for (i = 0; i < 8; i++){
        whiteQueenArray.push(0)
    }

    whiteQueenArray.splice(whiteQueen[1], 1, 1)

    var blackQueenArray = []

    for (i = 0; i < 8; i++){
        blackQueenArray.push(0)
    }

    blackQueenArray.splice(blackQueen[1], 1, 1)

    if (blackQueen[0] === whiteQueen[0]){
        whiteQueenArray.splice(blackQueen[1],1,1)
        board.splice(whiteQueen[0], 1, whiteQueenArray)
    } else {
        board.splice(whiteQueen[0], 1, whiteQueenArray)
        board.splice(blackQueen[0], 1, blackQueenArray)
    }

    queenThreat(board)

        function queenThreat(board){

            console.log(board)

            queenArray = []

            for (i = 0; i < 8; i++){
                for (x = 0; x < 8; x++){
                    if (board[i][x] === 1){
                        queenArray.push(i, x)
                    }
                }
            }

            whiteQueen = queenArray.splice(2,2)
            blackQueen = queenArray.splice(0,2)

            if (Math.abs(whiteQueen[0] - blackQueen[0]) === Math.abs(whiteQueen[1]-blackQueen[1])){
                return true
            } else if (whiteQueen[0] === blackQueen [0] || whiteQueen[1] === blackQueen [1]){
                return true
            } else {
                return false
            }
        }
}
