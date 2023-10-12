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
