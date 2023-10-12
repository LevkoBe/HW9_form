const { expect } = require("chai");
const Calculator = require("./scripts/Calculator.js");

describe("Calculate", function () {
  it("Multiply - Two Arguments", function () {
    let result = +Calculator.multiply(50)(2);
    expect(result).to.equal(100);
  });

  it("Multiply - Multiple Arguments", function () {
    let result = +Calculator.multiply(-1)(2)(3)(4)(-1)(2)(3)(4)(-1)(2)(3)(4);
    expect(result).to.equal(-13824);
  });

  it("Multiply - Single Argument", function () {
    let result = +Calculator.multiply(3);
    expect(result).to.equal(3);
  });

  it("Get Factorial - 0!", function () {
    let result = Calculator.getFactorial(0);
    expect(result).to.equal(1);
  });

  it("Get Factorial - 1!", function () {
    let result = Calculator.getFactorial(1);
    expect(result).to.equal(1);
  });

  it("Get Factorial - 2!", function () {
    let result = Calculator.getFactorial(2);
    expect(result).to.equal(2);
  });

  it("Get Factorial - 3!", function () {
    let result = Calculator.getFactorial(3);
    expect(result).to.equal(6);
  });

  it("Get Factorial - 4!", function () {
    let result = Calculator.getFactorial(4);
    expect(result).to.equal(24);
  });

  it("Get Factorial - 5!", function () {
    let result = Calculator.getFactorial(5);
    expect(result).to.equal(120);
  });

  it("Get Factorial - '5'!", function () {
    let result = Calculator.getFactorial("5");
    expect(result).to.equal(120);
  });

  it("Get Factorial - 'bla'!", function () {
    let result = Calculator.getFactorial("bla");
    expect(result).to.equal("blalaa");
  });

  it("Get Factorial - 'blabla'!", function () {
    let result = Calculator.getFactorial("blabla");
    expect(result).to.equal("blablalablaablablalaa");
  });

  it("Get Factorial - 'blablabla'!", function () {
    let result = Calculator.getFactorial("blablabla");
    expect(result).to.equal("blablablalablablaablablablablalablaablablalaa");
  });

  it("Get Factorial - 'Hello, world!'!", function () {
    let result = Calculator.getFactorial("Hello, world!");
    expect(result).to.equal("Hello, world!ello, world!llo, world!lo, world!o, world!, world! world!world!orld!rld!ld!d!!");
  });

  it("Get Factorial - '1234?'!", function () {
    let result = Calculator.getFactorial("1234?");
    expect(result).to.equal(Infinity);
  });
});
