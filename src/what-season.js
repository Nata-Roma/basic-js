const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  const seasons = [
    'spring',
    'summer',
    'autumn',
    'winter',
  ];

  if(!date) {
    return 'Unable to determine the time of year!';
  }

  let season = '';
  seasons.forEach((elem) => {
    if(elem === date) {
      season = date;
    }
  });

  if(season) {
    return season;
  }

  if(!date.getTime()) {
    throw new Error('error');
  }
const newDate = new Date(date);
  const month = newDate.getMonth();
   if(isNaN(month)) {
    //  return 'Unable to determine the time of year!';
    throw new Error('error');
   }

  if(month >= 11 || month <= 1) {
    return 'winter';
  }
  if(month >= 2 && month <= 4) {
    return 'spring';
  }
  if(month >= 5 && month <= 7) {
    return 'summer';
  }
  if(month >= 8 && month <= 10) {
    return 'autumn';
  } 

};
