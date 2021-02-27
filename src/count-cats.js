const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if(!matrix || !matrix.length) {
    return 0;
  }
  let count = 0;
  matrix.forEach((matr) => {
    const arr = matr.filter((elem) => elem === "^^");
    if(arr.length) {
      count += arr.length; 
    }
  })
  return count;
};
