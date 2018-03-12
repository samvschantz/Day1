var multiplicationTable = function(maxValue) {
  var topLine = '+----'
  var endLine = '+'
  var line = topLine.repeat(maxValue) + endLine
  var multiplesArray = []
  var multiples
  var tableArray = []
  var space = ' '
  //var numSpaces = (multiples.toString()).length
  for (i = 1; i <= maxValue; i++){
    for (x = 1; x <= maxValue; x++){
    multiples = (i * x) * (maxValue - (maxValue - 1))
    multiplesArray.push(multiples)
    }
  }
  for (y = 0; y <= maxValue; y++){
    tableArray.push(line + '\n')
    for (z = 0; z < maxValue; z++){
      //num of digits
      tableArray.push('| ' + multiplesArray[z + (maxValue * y)])
      //for (c = 0; c < numSpaces; c++)
      //tableArray.push(' ')
    }
    tableArray.push('\n')
  }
  //console.log(multiplesArray)
  //console.log(joinedMultiples)
  console.log(tableArray.join(''))
  //console.log(maxValue.toString())
  //console.log(numSpaces)
};


multiplicationTable(1)
multiplicationTable(5)
multiplicationTable(10)
//console.log(multiplicationTable(1));
//console.log(multiplicationTable(5));
//console.log(multiplicationTable(10));