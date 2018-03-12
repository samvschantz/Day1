var camelCase = function(input){
  var outputArray = []
  var spacesArray = []
  var capitalArray = []
  var finishedArray = []
  for (i = 0; i < input.length; i++){
    outputArray.push(input.charAt(i))
  }
  for (i = 0; i < outputArray.length; i++){
    if (outputArray[i] === ' '){
      spacesArray.push(i)
    }
  }
  for (i = 0; i < outputArray.length; i++){
    if (outputArray[i] === ' '){
      capitalArray.push(outputArray[i + 1].toUpperCase())
  }
  for (i = 0; i < outputArray.length; i ++){
    for (x = 0; x < spacesArray.length; x++){
    if (outputArray[i] === spacesArray[x])
      outputArray.push(spacesArray[x])
  }
  }
}
console.log(spacesArray)
console.log(outputArray)
console.log(capitalArray)
};


camelCase("this is a string")
camelCase("loopy lighthouse")
camelCase("supercalifragalisticexpialidocious")
//console.log(camelCase("this is a string"));
//console.log(camelCase("loopy lighthouse"));
//console.log(camelCase("supercalifragalisticexpialidocious"));