var prompt = require("prompt-sync")();

var answer = prompt('Please write a sentence under 81 characters with no spaces')

function squareCode(input){

  var numArrays = Math.ceil(Math.sqrt(input.length)) //number of coded "words" and number of columns as well

  var inputArray = input.split('')

  var outputArray = []

  var numRows = (Math.ceil((input.length) / numArrays))

  for (i = 0; i < numRows; i++){
    outputArray.push(inputArray.slice((numArrays * i), (numArrays * (i + 1))))
  }

  var wordsArray = []

  for (i = 0; i < numArrays; i++){
    var tempArray = []
    for (x = 0; x < numRows; x++){
      tempArray.push(outputArray[x][i])
    }
    wordsArray.push(tempArray.join(''))
  }

  var resultString = ''

  for (i = 0; i < numArrays; i++){
    resultString += wordsArray[i] + ' '
  }

  console.log(resultString)
}

squareCode(answer);

