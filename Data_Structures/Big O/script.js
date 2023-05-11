// const nemo = ["nemo"];
// const everyone = [
//   "dory",
//   "bruce",
//   "marlin",
//   "nemo",
//   "grill",
//   "bloat",
//   "nigel",
//   "squirt",
//   "darla",
//   "hank",
// ];

// const large = new Array(10000).fill("nemo");

// const findNemo = function (array) {
//   let t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") {
//       console.log("nemo found!");
//     }
//   }
//   let t1 = performance.now();
//   console.log(`call to find nemo took ${t1 - t0} ms`);
// };

// findNemo(large); // O(n) --> Linear time

// // O(1) --> constant time
// const boxes = [0, 1, 2, 3, 4, 5];
// function logFirstTwoBoxes(boxes) {
//   console.log(boxes[0], boxes[1]); // O(1) O(1)
// }

// logFirstTwoBoxes(boxes); // O(2)

// challenge 1
// function funChallenge(input) {
//   let a = 10; // O(1)
//   a = 50 + 3; // O(1)

//   for (let i = 0; i < input.length; i++) {
//     anotherFunction(); // O(n)
//     let stranger = true; // O(n)
//     a++; // O(n)
//   } // O(n)
//   return a; // O(1)
// }

// BIG O notation (3 + 4n)

// challenge 2
// function anotherFunChallenge(input) {
//   let a = 5; // O(1)
//   let b = 10;
//   let c = 50;
//   for (let i = 0; i < input; i++) {
//     let x = i + 1; // O(n)
//     let y = i + 2; // O(n)
//     let z = i + 3; // O(n)
//   }
//   for (let j = 0; j < input; j++) {
//     let p = j * 2; // O(n)
//     let q = j * 2; // O(n)
//   }
//   let whoAmI = "I don't know"; // O(1)
// }

// Big O notation ( 3 + 5n + 1) --> O(n)

// 1. Worst case
// const nemo = ["nemo"];
// const everyone = [
//   "dory",
//   "bruce",
//   "marlin",
//   "nemo",
//   "grill",
//   "bloat",
//   "nigel",
//   "squirt",
//   "darla",
//   "hank",
// ];

// // const large = new Array(10000).fill("nemo");

// const findNemo = function (array) {
//   let t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") {
//       console.log("nemo found!");
//       break;
//     }
//   }
// };

// findNemo(everyone);

// 2. remove constants
// function testFunc(items) {
//   console.log(items[0]);

//   const middleIndex = Math.floor(items.length / 2);
//   let index = 0;

//   while (index < middleIndex) {
//     console.log(items[index]);
//     index++;
//   }

//   for (let i = 0; i < 100; i++) {
//     console.log("Hi");
//   }
// }

// O(1 + n / 2 + 100); --> O(n) (drop the constants)

// 3. different terms for input
// function compressBoxesTwice(boxes, boxes2) {
//   boxes.forEach(function (boxes) {
//     console.log(boxes);
//   });

//   boxes2.forEach(function (boxes) {
//     console.log(boxes);
//   });
// }

// O(a + b)

// log all pairs of array
// const boxes = [1, 2, 3, 4, 5];

// function logAllArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i], array[j]);
//     }
//   }
// }

// logAllArray(boxes);

// O(n^2)

// 4. drop non dominants
// function func1(numbers) {
//   console.log("there are the numbers:");
//   numbers.forEach((number) => console.log(number));

//   console.log("and there are their");
//   numbers.forEach((firstNumber) =>
//     numbers.forEach((secondNumber) => console.log(firstNumber + secondNumber))
//   );
// }

// func1([1, 2, 3, 4, 5]);

// O(n + n^2) always keep the dominant term --> O(n^2)

// O(n!) --> factorial time

// space complexity
// function booooo(n) {
//   for (let i = 0; i < n.length; i++) {
//     console.log(i);
//   }
// }

// booooo([1, 2, 3, 4, 5]);

// function arrayOfNTimes(n) {
//   let hiArray = []; // variable
//   for (let i = 0; i < n; i++) {
//     hiArray[i] = "hi"; // data structure as created an array here
//   }
//   return hiArray;
// }

// console.log(arrayOfNTimes(6)); // O(n)

// exercise
// find 1st, nth
// const array = ["hi", "my", "tina"];

// console.log(array[0]); // O(1)
// console.log(array[array.length - 1]); // O(1)

// for of
// for (let i of array) {
//   console.log(i);
// }
