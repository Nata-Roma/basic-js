const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(method) {
    this.phrase = '';
    if(method || method === undefined) {
      this.method = true;
    } else {
      this.method = false;
    }
  }

  getInitials(str, key) {
    const start = "a".charCodeAt();
    const right = /[a-z]/;
    const arr = str.toLowerCase().split("").map((char) => {
      if (char.search(right) === -1) {
        return char;
      } else {
        return char.charCodeAt() - start;
      }
    });
    const arr1 = key.toLowerCase().split("").map((char) => char.charCodeAt() - start);
    return {arr, arr1, start};
  };

  getReverse(out) {
    if(this.method) {
      this.phrase = out.join("").toUpperCase(); 
    } else {
      this.phrase = out.reverse().join("").toUpperCase(); 
    }
    return out;
  };

  getCode(aux, start) {
    return aux.map((elem) => {
      if (typeof elem === "number") {
        return String.fromCharCode(elem + start);
      } else {
        return elem;
      }
    });
    
  };

  encrypt(str, key) {
    const {arr, arr1, start} = this.getInitials(str, key);

    let aux = [];
    let j = 0;

    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        let diff = arr1[j] + arr[i];
        if (diff >= 26) {
          diff -= 26;
        }
        aux.push(diff);
        if (j >= arr1.length - 1) {
          j = 0;
        } else {
          j++;
        }
      } else {
        aux.push(arr[i]);
      }
    }
    const out = this.getCode(aux, start);;
    this.getReverse(out);
    
    return this.phrase;
  }
  decrypt(str, key) {
    const {arr, arr1, start} = this.getInitials(str, key);

    let aux = [];
    let j = 0;

    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        let diff = arr[i] - arr1[j];
        if (diff < 0) {
          diff += 26;
        }
        aux.push(diff);
        if (j >= arr1.length - 1) {
          j = 0;
        } else {
          j++;
        }
      } else {
        aux.push(arr[i]);
      }
    }
    const out = this.getCode(aux, start);;
    this.getReverse(out);
    
    return this.phrase;
  }
}

module.exports = VigenereCipheringMachine;
