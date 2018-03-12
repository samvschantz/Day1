var merge = function(arrayOne, arrayTwo){
  var outputArray = []
  for (var i = 0; i < arrayOne.length; i++){
    outputArray.push(arrayOne[i])
  }
  for (i = 0; i < arrayTwo.length; i++){
    outputArray.push(arrayTwo[i])
  }
  return outputArray.sort()
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);