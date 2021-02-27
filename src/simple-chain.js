const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    const str = String(value);
    this.chain.push(`( ${str} )`);

    return this;
  },
  removeLink(position) {
    if (
      position >= this.getLength() ||
      typeof position !== "number" ||
      !position ||
      position < 0
    ) {
      this.chain = [];
      throw new Error("error");
    }
    this.chain.splice(--position, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const str = this.chain.join("~~");
    this.chain = [];
    return str;
  }
};

module.exports = chainMaker;
