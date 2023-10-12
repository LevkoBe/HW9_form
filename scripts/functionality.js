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

// Not carrying
let multipie = (...args) => args.reduce((accumulator, currentValue) => accumulator * currentValue);

multiply = (firstArgument) => {
  const next = (secondArgument) => multiply.call(null, firstArgument * secondArgument);
  next.valueOf = () => firstArgument;
  return next;
};

console.log("Multiplications:");
console.log(+multiply(2)(3)(10)); //  60
console.log(multiply(-1)(677)(568)(2)); // without "+" it won't work as expected
console.log(+multiply(-1)(2)(3)(4)(-1)(2)(3)(4)(-1)(2)(3)(4)); // -769072
console.log(+multiply(3)); //  3

console.log("Factorialization =");
console.log("0! = ", getFactorial(0));
console.log("1! = ", getFactorial(1));
console.log("2! = ", getFactorial(2));
console.log("3! = ", getFactorial(3));
console.log("4! = ", getFactorial(4));
console.log("5! = ", getFactorial(5));
console.log('"5"! = ', getFactorial("5"));
console.log('"bla"! = ', getFactorial("bla"));
console.log('"blabla"! = ', getFactorial("blabla"));
console.log('"blablabla"! = ', getFactorial("blablabla"));
console.log('"Hello, world!"! = ', getFactorial("Hello, world!"));
console.log('"1234?"! = ', getFactorial("1234?"));

// Hello!
// I was working on the 9th assignment for a while, but still have no idea: is it possible at all to
// have currying functions with undefined number of curries ? Because in the task we have examples like:
// console.log(multiply(a)(b)(c)); console.log(multiply(a)(b)); etc., which can take any number of
// brackets with numbers, and multiply them.But from what I understand, if we make currying functions in
// a way that they are "recursive"(in this special, currying form), at some point they will just return
// "multiply" wrapper, but not the value-product (in this case we'd not be able to create the chain of
// currying function). And we'll get(at least I do) in console not the number of product, but the function
// "multiply" itself.On the other hand, if we knew number of parameters, we would create specific carrying
// function like: let a = (b) => (c) => a * b * c; and then the result for the bracket pairs would be number for sure.
// Solution: to put "+" at the beginning, but the task is different...
