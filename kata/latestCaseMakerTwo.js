 var makeCase = function(inputString, caseString){

  var outputArray = inputString.split('')

  /*
  This code block creates an array that holds the index
  of the first letters of a string and the spaces
  */

  var casePriority
  var priorityArray = []
  var caseArray = []


    for (y = 0; y < caseString.length; y++){
      caseArray.push(caseString[y])
      if (caseString[y] === 'upper' || caseString[y] === 'lower'){ // here we assign priority to the different cases
          priorityArray.push(0)
        } else if (caseString[y] === 'vowel' || caseString[y] === 'consonant'){
          priorityArray.push(1)
        } else {
          priorityArray.push(2)
      }
    }


  console.log(caseArray)

  var firstLettersIndex =[0]
  var spacesIndex = []

  for (z = 0; z < inputString.length; z++) {
    if (inputString.charAt(z) === ' '){
      spacesIndex.push(z)
      firstLettersIndex.push(z+1)
    }
  }

  var currentCase

  for (x = 0; x < priorityArray.length; x++){
    if (priorityArray[x] === 2){
      console.log(caseArray[x])

      //camel thisIsCamelCase
      if (caseArray[x] === 'camel'){
        for (i = 1; i < firstLettersIndex.length; i++){
          outputArray.splice(firstLettersIndex[i], 1, inputString.charAt(firstLettersIndex[i]).toUpperCase())
        }

        for (i = 0; i < spacesIndex.length; i++){
          outputArray.splice((spacesIndex[i]) - i, 1)
        }
      }
      //pascal ThisIsPascalCase
      if (caseArray[x] === 'pascal'){
        for (i = 0; i < firstLettersIndex.length; i++){
          outputArray.splice(firstLettersIndex[i], 1, inputString.charAt(firstLettersIndex[i]).toUpperCase())
        }

        for (i = 0; i < spacesIndex.length; i++){
          outputArray.splice((spacesIndex[i]) - i, 1)
        }
      }

      //snake this_is_snake_case
      if (caseArray[x] === 'snake'){
        for (i = 0; i < spacesIndex.length; i++){
          outputArray.splice(spacesIndex[i], 1, '_')
        }
      }

      //kebab
      if (caseString === 'kebab'){
        for (i = 0; i < spacesIndex.length; i++){
          outputArray.splice(spacesIndex[i], 1, '-')
        }
      }

      //title
      if (caseString === 'title'){
        for (i = 0; i < firstLettersIndex.length; i++){
          outputArray.splice(firstLettersIndex[i], 1, inputString.charAt(firstLettersIndex[i]).toUpperCase())
        }
      }
    }
  }

  //vowel
  //consonant

  //upper
  //lower

  console.log(spacesIndex)
  //console.log(firstLettersIndex)
  console.log(outputArray)
  console.log(priorityArray)
}

makeCase('this is a string', 'camel')
makeCase("this is a string", "pascal")
makeCase("this is a string", "snake")
makeCase("this is a string", "kebab")
makeCase("this is a string", "title")
makeCase("this is a string", "vowel")
makeCase("this is a string", ["upper", "snake"])
makeCase("this is a string", ["vowel", "camel"])

/*makeCase("this is a string", "camel") === "thisIsAString";
makeCase("this is a string", "pascal") === "ThisIsAString";
makeCase("this is a string", "snake") === "this_is_a_string";
makeCase("this is a string", "kebab") === "this-is-a-string";
makeCase("this is a string", "title") === "This Is A String";
makeCase("this is a string", "vowel") === "thIs Is A strIng";
makeCase("this is a string", "consonant") === "THiS iS a STRiNG";
makeCase("this is a string", ["upper", "snake"]) === "THIS_IS_A_STRING";*/





