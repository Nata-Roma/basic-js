const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const activity = parseFloat(sampleActivity);

  let check = false;
  if (
    typeof activity !== "number" ||
    activity <= 0 ||
    activity > MODERN_ACTIVITY ||
    isNaN(activity)
  ) {
    check = true;
  }

  if (typeof sampleActivity !== "string" || !sampleActivity || check) {
    return false;
  }

  const rate = 0.693 / HALF_LIFE_PERIOD;
  const age = Math.ceil(Math.log(MODERN_ACTIVITY / activity) / rate);

  return age;
};
