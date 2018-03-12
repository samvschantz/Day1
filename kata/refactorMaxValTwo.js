var multiplicationTable = function(maxValue) {

var numDashes = (((maxValue * maxValue).toString().length) + 2) // number of dashes remains consistent

var numSpaces //the number of spaces changes for each multiple so this var has to be defined for each of multiples during iteration

var multiples
var multiplesString  //turning multiples into a string to use for numSpaces definition on line 25

var multiplesArray = []

var outputString = ''

var lineArray = []
var tableArray = []

for (i = 1; i <= maxValue; i++){   // this block of code uses two iterators to add the correct values into the multiplesArray variable
if (i !== 1){
    outputString += '|'
}
outputString += '\n' + (('+' + '-'.repeat(numDashes)).repeat(maxValue) + '+') + '\n'
  for (x = 1; x <= maxValue; x ++){  // lots of variables defined in this double code block because they need to change every time something happens we will have another loop declared later for printing I think cannot create second loop for printing because variables are then not defined
    multiples = (i * x)             // these are the numbers we need to display as a string
    multiplesArray.push(multiples)  // array containing values created by line above
    multiplesString = multiples.toString()
    numSpaces = (numDashes - (multiplesString.length + 1)) // variable representing the number of spaces trailing each number
    /*
    At this point we have a lot of what we need
    we know the multiples and have them in a variable that changes with every iteration
    we have those multiples in string form as well in a variable
    we have a multiples array with all our multiples - which may not be necessary
    we have the number of dashes we need for the table
    we have the number of spaces we need to trail each character
    next we make an array with strings that define a line in lineArray
    to put later into tableArray
    */
    //tableArray.push((i * x) + ' '.repeat(numSpaces))

    outputString += ('| ' + (i * x) + (' '.repeat(numSpaces)))
  }
    //outputString += '\n' + (('+' + '-'.repeat(numDashes)).repeat(maxValue) + '+') + '\n'
    //tableArray.push(('+' + '-'.repeat(numDashes)).repeat(maxValue) + '+')
}
outputString +='|' + '\n' + (('+' + '-'.repeat(numDashes)).repeat(maxValue) + '+') + '\n'
console.log(outputString)
//console.log(tableArray)
//console.log(multiplesString)
//console.log(multiplesArray)
//console.log(numSpaces)
};


multiplicationTable(1)
//multiplicationTable(3)
multiplicationTable(5)
multiplicationTable(10)

