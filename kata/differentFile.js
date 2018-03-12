var makeCase = function(inputString, case) {

  var casePriority

  if (case === 'upper', 'lower'){ // here we assign priority to the different cases
      casePriority = 0
    } else if (case === 'vowel', 'consonant'){
      casePriority = 1
    } else {
      casePriority = 2
    }

  var outputArray = []

  //thisIsCamelCase
  if (case === 'camel'){
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

  //this_is_snake_case

  //this-is-kebab-case

  //This Is Title Case
  console.log(outputArray)

};

makeCase('this is a string', 'camel');