class Calculator {
  static getFactorial(n) {
    if (isNaN(parseInt(n))) {
      return this.getStringorial(n);
    }
    n = parseInt(n);
    if (n === 0) {
      return 1;
    }
    return n * this.getFactorial(n - 1);
  }

  static getStringorial(str) {
    if (str) {
      return str + this.getStringorial(str.substr(1));
    }
    return str;
  }

  static multiply(a) {
    const next = (b) => Calculator.multiply(a * b);
    next.valueOf = () => a;
    return next;
  }
}

module.exports = Calculator;
