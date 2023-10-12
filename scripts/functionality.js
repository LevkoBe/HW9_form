let getFactorial = (numba) => {
  if (isNaN(parseInt(numba))) {
    return getStringorial(numba);
  }
  numba = parseInt(numba);
  if (numba == 0) {
    return 1;
  }
  return numba * getFactorial(numba - 1);
};
let getStringorial = (str) => {
  if (str) {
    return str + getStringorial(str.substr(1));
  }
  return str;
};

// Carrying
let m = (a) => a;
let mm = (a) => (b) => a * b;
let mmm = (a) => (b) => (c) => a * b * c;
let mmmm = (a) => (b) => (c) => (d) => a * b * c * d;

function multiple(x) {
  let product = x;

  function next(y) {
    product *= y;
    return next;
  }
  next.toString = function () {
    return product;
  };

  return next;
}

console.log(multiple(2)(3)(10).toString); //  60
console.log(multiple(-1)(677)(568)(2).toString); //  -769072
console.log(multiple(3).toString); //  3

// Not carrying
let multiply = (...args) => args.reduce((accumulator, currentValue) => accumulator * currentValue);

console.log(multiply(2)(3)(10)); //  60
console.log(multiply(-1)(677)(568)(2)); //  -769072
console.log(multiply(3)); //  3

console.log(getFactorial(0));
console.log(getFactorial(1));
console.log(getFactorial(2));
console.log(getFactorial(3));
console.log(getFactorial(4));
console.log(getFactorial(5));
console.log(getFactorial("5"));
console.log(getFactorial("bla"));
console.log(getFactorial("blabla"));
console.log(getFactorial("blablabla"));
console.log(getFactorial("Hello, world!"));
console.log(getFactorial("1234?"));
