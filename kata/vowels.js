var makeCase = function(inputString, caseString){
  vowelsArray = ['a','e','i','o','u'] // & sometimes y
  vowelsIndex = []
  for (i = 0; i < inputString.length; i++){
    for (x = 0; x < vowelsArray.length; x++){
      if (inputString.charAt(i) === vowelsArray[x])
        vowelsIndex.push(i)
    }
  }
  console.log(vowelsIndex)
}

makeCase("this is a string", ["vowel", "camel"])
makeCase('this is a string', 'camel')
makeCase("this is a string", "pascal")
makeCase("this is a string", "snake")
makeCase("this is a string", "kebab")
makeCase("this is a string", "title")
makeCase("this is a string", "vowel")
makeCase("this is a string", ["upper", "snake"])
makeCase("this is a string", ["vowel", "camel"])