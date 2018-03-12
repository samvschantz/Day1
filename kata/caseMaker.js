var camelCase = function(input){
  var outputArray = []
  for (i = 0; i < input.length; i++){
    if (input.charAt(i - 1) === ' '){
    outputArray.push(input.charAt(i).toUpperCase())
    } else if (input.charAt(i) === ' '){
      //do nothing
    } else {
      outputArray.push(input.charAt(i))
    }
  }
  return outputArray.join('')
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));