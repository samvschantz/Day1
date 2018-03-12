var talkingCalendar = function(date) {
  var year
  var month
  var ordinalSuffix
  for (i = 0; i < date.length; i++){
    year = (date[0].toString())+(date[1].toString())+(date[2].toString())+(date[3].toString())
  if (date[5] === '0' && date[6] === '1' ){
      month = 'January'
      } else if (date[5] === '0' && date[6] === '2' ){
        month = 'February'
      } else if (date[5] === '0' && date[6] === '3' ){
        month = 'March'
      } else if (date[5] === '0' && date[6] === '4' ){
        month = 'April'
      } else if (date[5] === '0' && date[6] === '5' ){
        month = 'May'
      } else if (date[5] === '0' && date[6] === '6' ){
        month = 'June'
      } else if (date[5] === '0' && date[6] === '7' ){
        month = 'July'
      } else if (date[5] === '0' && date[6] === '8' ){
        month = 'August'
      } else if (date[5] === '0' && date[6] === '9' ){
        month = 'September'
      } else if (date[5] === '1' && date[6] === '0' ){
        month = 'October'
      } else if (date[5] === '1' && date[6] === '1' ){
        month = 'November'
      } else if (date[5] === '1' && date[6] === '2' ){
        month = 'December'
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