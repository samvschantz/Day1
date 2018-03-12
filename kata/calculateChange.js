var calculateChange = function(total, cash) {
  var changeTotal = cash - total
  if (changeTotal >= 2000){
    var numTwenty = Math.floor(changeTotal/2000)
    changeTotal = changeTotal - (numTwenty * 2000)
  }
  if (changeTotal >= 1000){
    var numTen = Math.floor(changeTotal/1000)
    changeTotal = changeTotal - (numTen * 1000)
  }
  if (changeTotal >= 500){
    var numFive = Math.floor(changeTotal/500)
    changeTotal = changeTotal - (numFive * 500)
  }
  if (changeTotal >= 200){
    var numTwo = Math.floor(changeTotal/200)
    changeTotal = changeTotal - (numTwo * 200)
  }
  if (changeTotal >= 100){
    var numOne = Math.floor(changeTotal/100)
    changeTotal = changeTotal - (numOne * 100)
  }
  if (changeTotal >= 25){
    var numQuarter = Math.floor(changeTotal/25)
    changeTotal = changeTotal - (numQuarter * 25)
  }
  if (changeTotal >= 10){
    var numDime = Math.floor(changeTotal/10)
    changeTotal = changeTotal - (numDime * 10)
  }
  if (changeTotal >= 5){
    var numNickel = Math.floor(changeTotal/5)
    changeTotal = changeTotal - (numNickel * 5)
  }
  if (changeTotal >= 1){
    var numPenny = changeTotal/1
    changeTotal = changeTotal - numPenny
  }
  var changeObject = {
    twentyDollar: numTwenty,
    tenDollar: numTen,
    fiveDollar: numFive,
    twoDollar: numTwo,
    oneDollar: numOne,
    quarter: numQuarter,
    dime: numDime,
    nickel: numNickel,
    penny: numPenny
  }
  if (changeObject.twentyDollar === undefined){
    delete changeObject.twentyDollar;
  }
  if (changeObject.tenDollar === undefined){
    delete changeObject.tenDollar;
  }
  if (changeObject.fiveDollar === undefined){
    delete changeObject.fiveDollar;
  }
  if (changeObject.twoDollar === undefined){
    delete changeObject.twoDollar;
  }
  if (changeObject.oneDollar === undefined){
    delete changeObject.oneDollar;
  }
  if (changeObject.quarter === undefined){
    delete changeObject.quarter;
  }
  if (changeObject.dime === undefined){
    delete changeObject.dime;
  }
  if (changeObject.nickel === undefined){
    delete changeObject.nickel;
  }
  if (changeObject.penny === undefined){
    delete changeObject.penny;
  }
  return changeObject
};




console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));