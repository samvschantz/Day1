/*var talkingCalendar = function(date) {
for (var i = 0; i < date.length; i++)
if (date[9] === '4' || '5' || '6' || '7' || '8' || '9' || '0'){
      ordinalSuffix = 'qq'
    } else if (date [8] === '1' && date [9] === '1' || '2' || '3'){
      ordinalSuffix = 'th'
    } else if (date[9] === '3'){
      ordinalSuffix = 'rd'
    } else if (date [9] === '2'){
      ordinalSuffix = 'nd'
    } else {
      ordinalSuffix = 'st'
    }
    console.log(date[8] + date[9] + ordinalSuffix)
  }*/
var talkingCalendar = function(date) {
  var ordinalSuffix
  for (var i = 0; i < date.length; i++){
if (date[9] !== '1' && date[9] !== '2' && date[9] !== '3'){
      ordinalSuffix = 'th'
    } else if ((date [8] === '1' && date[9] === '1') || (date[8] === '1' && date[9] ===  '2') || (date[8]=== '1' && date[9] === '3')){
      ordinalSuffix = 'th'
    } else if (date[9] === '3'){
      ordinalSuffix = 'rd'
    } else if (date [9] === '2'){
      ordinalSuffix = 'nd'
    } else {
      ordinalSuffix = 'st'
    }
  }
console.log(date[8] + date[9] + ordinalSuffix)
}

/*var talkingCalendar = function(date) {
  for (var i = 0; i < date.length; i++){
    if (date[9] === 2){
    }
  }
}*/




talkingCalendar("2017/12/02")
talkingCalendar("2007/11/11")
talkingCalendar("1987/08/24")