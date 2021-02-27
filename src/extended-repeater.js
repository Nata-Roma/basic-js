const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes, separator = "+", addition, additionRepeatTimes, additionSeparator }) {

  if(str === undefined) {
    str = ''
  } else if (typeof str !== "string") {
    str = String(str);
  }

  let ch = str;

  if (addition === undefined) {
    addition = "";
  } else if (typeof addition !== "string") {
    addition = String(addition);
  }

  if (!additionSeparator) {
    additionSeparator = "";
  } else if (typeof additionSeparator !== "string") {
    additionSeparator = additionSeparator.toString();
  }

  if (!repeatTimes) {
    repeatTimes = 0;
  }

  if (!additionRepeatTimes) {
    additionRepeatTimes = 0;
  }

  let arrAddition = "";
  if (addition) {
    if (additionRepeatTimes > 0) {
      if (!additionSeparator) {
        additionSeparator = "";
      } else if (typeof additionSeparator !== "string") {
        additionSeparator.toString();
      }
      let arrAdd = [];
      for (let i = 0; i < additionRepeatTimes; i++) {
        arrAdd.push(addition);
      }
      arrAddition = arrAdd.join(additionSeparator);
    } else {
      arrAddition = addition;
    }
  }

  ch = str + arrAddition;
  let arr = [];

  if (repeatTimes > 0) {
    for (let i = 0; i < repeatTimes; i++) {
      arr.push(ch);
    }
  } else {
    arr.push(ch);
  }

  const out = arr.join(separator);
  return out;
};
