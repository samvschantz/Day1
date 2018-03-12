 var makeCase = function(inputString, caseString){

  var outputArray = inputString.split('')
  var caseArray = []

  if (caseString.constructor !== Array){ //differentiating between array and string but returning both as one array
    caseArray = caseString.split()
  } else {
    caseArray = caseString
  }

  var priorityArray = []

  for (y = 0; y < caseArray.length; y++){
      if (caseArray[y] === 'upper' || caseArray[y] === 'lower'){ // here we assign priority to the different cases
          priorityArray.push(caseArray[y])
        } else if (caseArray[y] === 'vowel' || caseArray[y] === 'consonant'){
          priorityArray.unshift(caseArray[y])
        } else {
          priorityArray.unshift(caseArray[y])
      }
  }

  var firstLettersIndex =[0]
  var spacesIndex = []
  var vowelsIndex = []

  for (z = 0; z < inputString.length; z++) {
    if (inputString.charAt(z) === ' '){
      spacesIndex.push(z)
      firstLettersIndex.push(z+1)
    }
  }

  for (x = 0; x < priorityArray.length; x++){
      //camel thisIsCamelCase
      if (priorityArray[x] === 'camel'){
        for (i = 1; i < firstLettersIndex.length; i++){
          outputArray.splice(firstLettersIndex[i], 1, inputString.charAt(firstLettersIndex[i]).toUpperCase())
        }

        for (i = 0; i < spacesIndex.length; i++){
          outputArray.splice((spacesIndex[i]) - i, 1)
        }
      }
      //pascal ThisIsPascalCase
      if (priorityArray[x] === 'pascal'){
        for (i = 0; i < firstLettersIndex.length; i++){
          outputArray.splice(firstLettersIndex[i], 1, inputString.charAt(firstLettersIndex[i]).toUpperCase())
        }

        for (i = 0; i < spacesIndex.length; i++){
          outputArray.splice((spacesIndex[i]) - i, 1)
        }
      }

      //snake this_is_snake_case
      if (priorityArray[x] === 'snake'){
        for (i = 0; i < spacesIndex.length; i++){
          outputArray.splice(spacesIndex[i], 1, '_')
        }
      }

      //kebab
      if (priorityArray[x] === 'kebab'){
        for (i = 0; i < spacesIndex.length; i++){
          outputArray.splice(spacesIndex[i], 1, '-')
        }
      }

      //title
      if (priorityArray[x] === 'title'){
        for (i = 0; i < firstLettersIndex.length; i++){
          outputArray.splice(firstLettersIndex[i], 1, inputString.charAt(firstLettersIndex[i]).toUpperCase())
        }
      }

      /* Now have ordered cases and we are looping through them to see
      what to apply first*/

    var vowelsArray = ['a','e','i','o','u'] // & sometimes y
    var vowelsIndex = []
    var consonantsIndex = []
      for (i = 0; i < outputArray.length; i++){
        consonantsIndex.push(i)
        for (y = 0; y < vowelsArray.length; y++){
          if (outputArray[i] === vowelsArray[y]){
            vowelsIndex.push(i)
            consonantsIndex.pop(i)
          }
        }
      }

      if (priorityArray[x] === 'vowel'){
        for (i = 0; i < vowelsIndex.length; i++){
          outputArray.splice(vowelsIndex[i], 1, outputArray[vowelsIndex[i]].toString().toUpperCase())
        }
      }

      if (priorityArray[x] === 'consonant'){
        for (i = 0; i < consonantsIndex.length; i++){
          outputArray.splice(consonantsIndex[i], 1, outputArray[consonantsIndex[i]].toString().toUpperCase())
        }
      }

      if (priorityArray[x] === 'upper'){
        for (i = 0; i < outputArray.length; i++){
          outputArray.splice(i, 1, outputArray[i].toString().toUpperCase())
        }
      }

      if (priorityArray[x] === 'lower'){
        for (i = 0; i < outputArray.length; i++){
          outputArray.splice(i, 1, outputArray[i].toString().toLowerCase())
        }
      }
  }
  return outputArray.join('')
}

console.log(makeCase("this is a string", "camel") === "thisIsAString");
console.log(makeCase("this is a string", "pascal") === "ThisIsAString");
console.log(makeCase("this is a string", "snake") === "this_is_a_string");
console.log(makeCase("this is a string", "kebab") === "this-is-a-string");
console.log(makeCase("this is a string", "title") === "This Is A String");
console.log(makeCase("this is a string", "vowel") === "thIs Is A strIng");
console.log(makeCase("this is a string", "consonant") === "THiS iS a STRiNG");
console.log(makeCase("this is a string", ["upper", "snake"]) === "THIS_IS_A_STRING");









