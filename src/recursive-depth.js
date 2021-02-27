const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr, level = 0) {
    if (Array.isArray(arr)) {
      let count = ++level;
      for (let i = 0; i < arr.length; i++) {
        let sublevel = this.calculateDepth(arr[i], level);
        count = Math.max(count, sublevel);
      }
      return count;
    } else {
      return level;
    }
  }
  
};