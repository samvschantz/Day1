var multiplicationTable = function(maxValue) {

    var numDashes = (((maxValue * maxValue).toString().length) + 2)
    var numSpaces
    var multiples
    var multiplesString
    var multiplesArray = []
    var outputString = ''

    for (var i = 1; i <= maxValue; i++){
        if (i !== 1){
            outputString += '|'
        }

        outputString += '\n' + (('+' + '-'.repeat(numDashes)).repeat(maxValue) + '+') + '\n'

        for (var x = 1; x <= maxValue; x ++){
            multiples = (i * x)
            multiplesArray.push(multiples)
            multiplesString = multiples.toString()
            numSpaces = (numDashes - (multiplesString.length + 1))

            outputString += ('| ' + (i * x) + (' '.repeat(numSpaces)))
        }
    }

    outputString +='|' + '\n' + (('+' + '-'.repeat(numDashes)).repeat(maxValue) + '+') + '\n'

    return outputString

};


console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));