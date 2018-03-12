var talkingCalendar = function(date) {
  var year
  var month
  var day
  for (i = 0; i < date.length; i++){
    year = (date[0].toString())+(date[1].toString())+(date[2].toString())+(date[3].toString()) //right now this will return a single number get it to return 4 separate
  if (date[5] === 1){
      if (date[6] === 1){
        month = 'November'
      } else if (date[6] === 2) {
        month = 'December'
      } else {
        month = 'October'
      }
  } else {
    if (date[6] === 1){
      month = 'January'
    } else if (date[6] === 2) {
      month = 'February'
    } else if (date[6] === 3) {
      month = 'March'
    } else if (date[6] === 4) {
      month = 'April'
    } else if (date[6] === 5) {
      month = 'May'
    } else if (date[6] === 6) {
      month = 'June'
    } else if (date[6] === 7) {
      month = 'July'
    } else if (date[6] === 8) {
      month = 'August'
    } else {
      month = 'September'
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
  }
  console.log(month + ' ' + year + ' ' + date[8] + date[9] + ordinalSuffix)
};

talkingCalendar("2017/12/02")
talkingCalendar("2007/11/11")
talkingCalendar("1987/08/24")


//console.log(talkingCalendar("2017/12/02"));
//console.log(talkingCalendar("2007/11/11"));
//console.log(talkingCalendar("1987/08/24"));

//December 2nd, 2017
//November 11th, 2007
//August 24th, 1987