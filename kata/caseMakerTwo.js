var makeCase = function(inputString, caseString){

  var casePriority
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

  var outputArray = []

  console.log(priorityArray)


  //thisIsCamelCase
  if (caseString === 'camel'){
    for (i = 0; i < inputString.length; i++){
      if (inputString.charAt(i - 1) === ' '){
        outputArray.push(inputString.charAt(i).toUpperCase())
        } else if (inputString.charAt(i) === ' '){
          //do nothing
        } else {
          outputArray.push(inputString.charAt(i))
      }
    }
  }
  //ThisIsPascalCase
  if (caseString === 'pascal'){
    for (i = 0; i < inputString.length; i++){
      if (i === 0){
        outputArray.push(inputString.charAt(i).toUpperCase())
      } else if (inputString.charAt(i - 1) === ' '){
        outputArray.push(inputString.charAt(i).toUpperCase())
      } else if (inputString.charAt(i) !== ' ') {
        outputArray.push(inputString.charAt(i))
      }
    }
  }

  //this_is_snake_case
  if (caseString === 'snake'){
    for (i = 0; i < inputString.length; i++){
      if(inputString.charAt(i) === ' '){
        outputArray.push('_')
      } else {
        outputArray.push(inputString.charAt(i))
      }
    }
  }
  //this-is-kebab-case
  if (caseString === 'kebab'){
    for (i = 0; i < inputString.length; i++){
      if(inputString.charAt(i) === ' '){
        outputArray.push('-')
      } else {
        outputArray.push(inputString.charAt(i))
      }
    }
  }

  //This Is Title Case
  if (caseString === 'title'){
    for (i = 0; i < inputString.length; i++){
      if (i === 0){
        outputArray.push(inputString.charAt(i).toUpperCase())
      } else if (inputString.charAt(i - 1) === ' '){
        outputArray.push(inputString.charAt(i).toUpperCase())
      } else {
        outputArray.push(inputString.charAt(i))
      }
    }
  }

  vowelArray = ['a', 'e', 'i', 'o', 'u']
  vowelsIndex = []
  //thIs Is VowEl cAsE
  if (caseString === 'vowel'){
    for (i = 0; i < inputString.length; i++){
      for (y = 0; y < vowelArray.length; y++)
        if (inputString.charAt(i) === vowelArray[y]){
          vowelsIndex.push(inputString.indexOf(i))
        }
      }
    }

  //THiS iS CoNSoNaNT CaSe

  console.log(outputArray.join(''))
  console.log(vowelsIndex)

}

makeCase('this is a string', 'camel')
makeCase("this is a string", "pascal")
makeCase("this is a string", "snake")
makeCase("this is a string", "kebab")
makeCase("this is a string", "title")
makeCase("this is a string", "vowel")
makeCase("this is a string", ["upper", "snake"])
/*makeCase("this is a string", "camel") === "thisIsAString";
makeCase("this is a string", "pascal") === "ThisIsAString";
makeCase("this is a string", "snake") === "this_is_a_string";
makeCase("this is a string", "kebab") === "this-is-a-string";
makeCase("this is a string", "title") === "This Is A String";
makeCase("this is a string", "vowel") === "thIs Is A strIng";
makeCase("this is a string", "consonant") === "THiS iS a STRiNG";
makeCase("this is a string", ["upper", "snake"]) === "THIS_IS_A_STRING";*/