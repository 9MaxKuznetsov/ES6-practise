const add = (x, y) => x + y;

const square = (x) => x * x;

const giveMeAnswer = () => 42;

const log = () => console.log(`Logging`);

const multiply = (x, y) => {
  let result = x * y;
  return result;
};

const getPerson = () => ({name: `John`});

(() => console.log(`IIFE`))();

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

numbers.forEach((number) => sum += number);

let squared = numbers.map((n) => n * n);

const person = {
  name: `Bob`,
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, my name is ${this.name}`);
      console.log(this);
    }, 1000)
  }
};

person.greet();

console.log(add(2, 5));
console.log(square(3));
console.log(giveMeAnswer());
log();
console.log(multiply(3, 5));
console.log(getPerson());
console.log(sum);
console.log(squared);
