const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1;
  const rate = turnsSpeed / (60 * 60);
  const seconds = Math.floor(turns / rate); 

  return {seconds, turns};
};
