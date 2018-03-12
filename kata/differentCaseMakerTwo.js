var makeCase = function(inputString, caseString){

  var firstLetters = []

  for (i = 0; i < inputString.length; i++){
    if (i === 0){
      firstLetters.push(inputString.charAt(i))
    } else if (inputString.charAt(i - 1) === ' ') {
      firstLetters.push(inputString.charAt(i))
    } else {
      firstLetters.push('')
    }
  }
  console.log(firstLetters)
}

makeCase('this is a string', 'camel')
makeCase("this is a string", "pascal")
makeCase("this is a string", "snake")