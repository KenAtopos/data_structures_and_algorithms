// let counter = 0;

// function inception() {
//   debugger;
//   if (counter > 2) return "done!";
//   counter++;
//   return inception(); // here inception became "done"
// }

// inception();

// 1. identify the base case
// 2. identify the recursive case
// 3. return when needed. usually you have 2 returns

// exercise 1
// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// function findFactorialRecursive(number) {
//   //code here
//   // debugger;
//   if (number < 2) {
//     return number;
//   } // O(n)

//   return number * findFactorialRecursive(number - 1);
// }

// function findFactorialIterative(number) {
//   //code here
//   let answer = 1;

//   while (number > 1) {
//     answer = answer * number;
//     number--;
//   }
//   console.log(answer);
//   return answer;
// } // O(n)

// findFactorialIterative(4);

// findFactorialRecursive(5);

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8
// let array = [];

// function fibonacciIterative(n) {
//   //code here;

//   if (n < 2) {
//     for (let i = 0; i <= n; i++) {
//       array.push(i);
//     }
//   } else {
//     array.push(0);
//     array.push(1);
//     for (let i = 2; i <= n; i++) {
//       const num = array.at(-1) + array.at(-2);
//       array.push(num);
//     }
//   }

//   console.log(array);
//   return array;
// } // O(n)
// fibonacciIterative(8);

// function fibonacciRecursive(n) {
//   //code here;
//   if (n < 2) {
//     return n;
//   }

//   return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// } // O(2^n)

// fibonacciRecursive(3);

//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  // base case

  // recursion
  return str.unshift(str.pop());
}

reverseString("yoyo mastery");
//should return: 'yretsam oyoy'
