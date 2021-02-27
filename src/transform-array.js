const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if(!Array.isArray(arr)) {
    throw new Error('error');
  }

  let newArr = [...arr];
  let length = newArr.length;

  for (let i = 0; i < length; i++) {
    switch (newArr[i]) {
      case '--discard-prev':
        if (i === 0) {
          delete newArr[i];
          break;
        } else {
          delete newArr[i - 1];
          delete newArr[i];
          break;
        }
      case '--discard-next':
        if (i === length - 1) {
          delete newArr[i];
          break;
        } else {
          delete newArr[i + 1];
          delete newArr[i];
          break;
        }
      case '--double-prev':
        if (i === 0) {
          delete newArr[i];
          break;
        } else {
          delete newArr[i];
          newArr.splice(i - 1, 0, newArr[i - 1]);
          length++;
          break;
        }
      case '--double-next':
        if (i === length - 1) {
          delete newArr[i];
          break;
        } else {
          delete newArr[i];
          newArr.splice(i + 1, 0, newArr[i + 1]);
          length++;
          break;
        }
      default:
        break;
    }
  }

  newArr = newArr.filter((elem) =>  elem !== undefined);
  newArr = newArr.filter((elem) =>  elem !== '--double-next');
  newArr = newArr.filter((elem) =>  elem !== '--double-prev');
  newArr = newArr.filter((elem) =>  elem !== '--discard-next');
  newArr = newArr.filter((elem) =>  elem !== '--discard-prev');

  return newArr;
};
