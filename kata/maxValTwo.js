var multiplicationTable = function(maxValue) {
  var multiplesArray = []
  var multiples
  var tableArray = []
  var numSpaces
  var multiplesArrayString
  var lineString
  var lineArray = []
  var numLines = ((maxValue * maxValue).toString().length) + 2 // the number of dashes between plusses in a line

  lineArray.push('+')
  for (z = 0; z < numLines; z++){
    lineArray.push('-')
  }
  lineString = lineArray.join('')

  for (i = 1; i <= maxValue; i++){
    for (p = 0; p < maxValue; p++){
    multiplesArray.push(lineString)
      }
      multiplesArray.push('+' + '\n')
    for (x = 1; x <= maxValue; x++){
    multiplesArray.push('| ')
    multiples = (i * x) * (maxValue - (maxValue - 1))
    multiplesArray.push(multiples)
    multiplesString = multiples.toString()
    numSpaces = (numLines - (multiplesString.length) - 1) // redefining numspaces to get correct number of spaces equation will be (number of dashes- number of multiples digits) - 1
    for (v = 0; v < numSpaces; v++){
      multiplesArray.push(' ')
      }
    }                        // the block of code that ends on this line pushes one line of multiples then loops with an iteration of i
    multiplesArray.push('|' + '\n')
  }
  for (p = 0; p < maxValue; p++){
    multiplesArray.push(lineString)
      }
      multiplesArray.push('+' + '\n')
  multiplesArray.toString()
    var multiplesArrayString = multiplesArray.join('')
  //tableArray.push(multiplesArrayString)
  //for (y = 0; y < maxValue; y + maxValue){
    //tableArray.push(line + '\n')
    //for (z = 0; z < (maxValue * 4); z++){
    //}
    //}
  /*for (y = 0; y <= maxValue; y++){
    tableArray.push(line + '\n')
    for (z = 0; z < (maxValue * 4); z++){
      if (multiplesArray[z] !== ' '){
      tableArray.push('| ' + multiplesArray[z + (maxValue * y)])
    } else {
      tableArray.push(multiplesArray[z + (maxValue * y)])
    }
    }
    tableArray.push('\n')
  }*/
  console.log(multiplesArrayString)
  //console.log(tableArray)
  //console.log(numLines)
  //console.log(lineString)
};


multiplicationTable(1)
multiplicationTable(5)
multiplicationTable(10)
multiplicationTable(12)
//console.log(multiplicationTable(1));
//console.log(multiplicationTable(5));
//console.log(multiplicationTable(10));