touvar makeCase = function(inputString, caseString){

  var outputArray = []
  var outputString = ''

  var casePriority     // This sets the priority of different cases and places them in an array that corresponds with the caseString
  var priorityArray = []

  if (caseString.constructor === Array){
    for (i = 0; i < caseString.length; i++){
      if (caseString[i] === 'upper' || caseString[i] === 'lower'){ // here we assign priority to the different cases
          priorityArray.push(0)
        } else if (caseString[i] === 'vowel' || caseString[i] === 'consonant'){
          priorityArray.push(1)
        } else {
          priorityArray.push(2)
      }
    }
  }

  var firstLettersArray = []
  var firstLettersIndex = []

  for (i = 0; i < inputString.length; i++){
      if (inputString.charAt(i - 1) === ' ' || i === 0){
        firstLettersArray.push(inputString.charAt(i))
        firstLettersIndex.push(i)
      }
    }

  var vowels = ['a', 'e', 'i', 'o', 'u']
  var stringVowelsArray = []
  var stringVowelsIndex = []

  for (i = 0; i < inputString.length; i++){
    for (x = 0; x < vowels.length; x++){
      if (inputString.charAt(i) === vowels[x]){
        stringVowelsArray.push(inputString.charAt(i))
        stringVowelsIndex.push(i)
      }
    }
  }

  // camel and pascal most difficult because the index of their  first letters changes
  // camel


  console.log(outputArray)

  /*console.log(firstLettersArray)
  console.log(firstLettersIndex)
  console.log(stringVowelsArray)
  console.log(stringVowelsIndex)*/
}

makeCase('this is a string', 'camel')
makeCase("this is a string", "pascal")
makeCase("this is a string", "snake")
makeCase("this is a string", "kebab")
makeCase("this is a string", "title")
makeCase("this is a string", "vowel")
makeCase("this is a string", ["upper", "snake"])
makeCase("this is a string", ["vowel", "camel"])