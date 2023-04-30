// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   get(index) {
//     return this.data[index];
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }

//   delete(index) {
//     const item = this.data[index];
//     this.shiftItem(index);
//   }

//   shiftItem(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// const newArray = new MyArray();
// newArray.push("hi");
// newArray.push("hello");
// newArray.push("hey");
// newArray.delete(1);
// console.log(newArray);

// exercise 1
// create a function that reverses a string:
// my answer
// function reverse(str) {
//   let array = [];
//   let reverseStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     array.push(str[i]);
//   }
//   array.forEach((char) => (reverseStr += char));
//   console.log(reverseStr);
// }

// reverse("Hi, how are you");

// example answer
// function reverse(str) {
//   if (!str || str.length < 2 || typeof str !== "string") return;
//   const backwards = [];
//   const indexLength = str.length - 1;
//   for (let i = indexLength; i >= 0; i--) {
//     backwards.push(str[i]);
//   }

//   return backwards.join("");
// }

// better solution
// function reverse(str) {
//   str.split("").reverse().join("");
// }

// const reverse = (str) => [...str].reverse().join(".");

// exercise 2
// merge 2 arrays
// const mergeSortedArrays = (arr1, arr2) => [...arr1, ...arr2].sort();

// console.log(mergeSortedArrays([3, 6, 1], [5, 8, 2]));
