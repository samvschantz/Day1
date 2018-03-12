var prompt = require("prompt-sync")();

// code below (replace this example)
var randomNumber = Math.floor(Math.random() * 100)
var answer = prompt("Guess a number:");
var i = 0
while (answer !== randomNumber){
  if (answer < randomNumber){
    console.log('Too low');
    answer = prompt("Guess a number:");
    i++;
  } else if (answer > randomNumber){
    console.log('Too high')
    answer = prompt("Guess a number:");
    i++;
  } else if (answer = randomNumber){
    i++;
    console.log('You got it in ' + i + ' attempts')
  } else {
    console.log('Not a number')
    answer = prompt("Guess a number:");
  }
}