var conditionalSum = function(values, condition) {
  var answerArray = []
  if (typeof values[0] === 'number' &&condition === 'even'){
    for (var i = 0; i < values.length; i++){
      if (values[i]%2 === 0){
        answerArray.push(values[i])
        }
      }
    } else if (typeof values[0] === 'number' && condition === 'odd'){
    for (var i = 0; i < values.length; i++){
      if (values[i]%2 !== 0){
        answerArray.push(values[i])
      }
    }
  } else {
    answerArray.push(0)
  }
  var total = 0;
  for (var i = 0; i < answerArray.length; i++){
    total += answerArray[i]
  }
  return total
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));