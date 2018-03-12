var repeatNumbers = function(data) {
  var outputArray = []
  for (var i = 0; i < data.length; i++){
    for (var y = 0; y < data[i][1]; y++){
      outputArray.push(data[i][0])
    }
    if (i < (data.length-1)){
      outputArray.push(',')
    }
  }
  outputArray.toString()
  return outputArray.join('')
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
