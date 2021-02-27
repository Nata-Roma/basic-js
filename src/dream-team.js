const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if(!Array.isArray(members)) {
    return false;
  }

  const arr = members.filter((elem) => typeof elem === "string");
  let str = "";
  const arrTrim = arr.map((elem) => elem.trim());
  arrTrim.forEach((elem) => (str += elem[0]));

  return str.toLowerCase().split('').sort().join('').toUpperCase();
};
