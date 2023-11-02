let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// build in objects
let now: Date = new Date();

let colors: string[] = ['red', 'green', 'yellow'];

let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Class

class Car1 {}

let car1: Car1 = new Car();

//Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//When to use Annotations

//1) Function that returns the 'any' type
// const json = '{"x":10,"y":20}';
// const coordinates = JSON.parse(json);
// console.log(coordinates);

//Solution we use annotations

const json = '{"x":10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//2) When we declare a variable on one line and initialize it later

// let words = ['red', 'green', 'blue'];
// let foundWord;

// for (let i = 0; i < words.length; i++) {
//   if (words[i] === 'green') {
//     foundWord = true;
//   }
// }

// Solution:

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be interferred correctly

// let numbers = [-10, -1, 12];
// let numberAboveZero = false;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     numberAboveZero = numbers[i];
//   }
// }

// 4) Solution:

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}