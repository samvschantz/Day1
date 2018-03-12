var talkingCalendar = function(date) {
  var year
  var month
  var monthObj = {
    1:'January',
    2:'February',
    3:'March',
    4:'April',
    5:'May',
    6:'June',
    7:'July',
    8:'August',
    9:'September',
    10:'October',
    11:'November',
    12:'December',
  }
  var ordinalSuffix
  var monthNum
  for (i = 0; i < date.length; i++){
    year = (date[0].toString())+(date[1].toString())+(date[2].toString())+(date[3].toString())
  if (date[5] === '0'){
    month = monthObj[date[6]]
  } else {
    monvath = monthObj[date[5] + date[6]]
  }
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
    if (date[8] === '0'){
      console.log(month + ' ' + date[9] + ordinalSuffix + ', ' + year)
        } else {
      console.log(month + ' ' + date[8] + date[9] + ordinalSuffix + ', ' + year)
        }
}


talkingCalendar("2017/12/02")
talkingCalendar("2007/11/11")
talkingCalendar("1987/08/24")
talkingCalendar("2014/03/07")