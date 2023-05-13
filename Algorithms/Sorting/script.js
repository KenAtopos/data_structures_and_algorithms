// bubble sort
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function bubbleSort(array) {
//   for (let j = array.length - 1; j > 0; j--) {
//     for (let i = 0; i < j; i++) {
//       const previous = array[i];
//       const next = array[i + 1];
//       if (previous > next) {
//         array[i] = next;
//         array[i + 1] = previous;
//       }
//     }
//   }
//   return array;
// }

// bubbleSort(numbers);
// console.log(numbers);

// selection sort
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function selectionSort(array) {
//   for (let j = 0; j < array.length - 1; j++) {
//     let smallestIndex = j;
//     for (let i = j + 1; i < array.length; i++) {
//       if (array[i] < array[smallestIndex]) {
//         smallestIndex = i;
//       }
//     }
//     if (smallestIndex !== j) {
//       let temp = array[j];
//       array[j] = array[smallestIndex];
//       array[smallestIndex] = temp;
//     }
//   }
//   return array;
// }

// selectionSort(numbers);
// console.log(numbers);

// insertion sort
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function insertionSort(array) {
//   for (let i = 1; i < array.length; i++) {
//     let current = array[i];
//     let j = i - 1;
//     while (j >= 0 && current < array[j]) {
//       array[j + 1] = array[j];
//       j--;
//     }
//     array[j + 1] = current;
//   }
//   return array;
// }

// insertionSort(numbers);
// console.log(numbers);

// Merge Sort
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function mergeSort(array) {
//   if (array.length === 1) {
//     return array;
//   }
//   // Split Array in into right and left
//   const length = array.length;
//   const middle = Math.floor(length / 2);
//   const left = array.slice(0, middle);
//   const right = array.slice(middle);
//   // console.log('left:', left);
//   // console.log('right:', right);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   const result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;
//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }
//   // console.log(left, right)
//   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// const answer = mergeSort(numbers);
// console.log(answer);

// quick sort
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function quickSort(array, left, right) {
//   const len = array.length;
//   let pivot;
//   let partitionIndex;

//   if (left < right) {
//     pivot = right;
//     partitionIndex = partition(array, pivot, left, right);

//     //sort left and right
//     quickSort(array, left, partitionIndex - 1);
//     quickSort(array, partitionIndex + 1, right);
//   }
//   return array;
// }

// function partition(array, pivot, left, right) {
//   let pivotValue = array[pivot];
//   let partitionIndex = left;

//   for (let i = left; i < right; i++) {
//     if (array[i] < pivotValue) {
//       swap(array, i, partitionIndex);
//       partitionIndex++;
//     }
//   }
//   swap(array, right, partitionIndex);
//   return partitionIndex;
// }

// function swap(array, firstIndex, secondIndex) {
//   var temp = array[firstIndex];
//   array[firstIndex] = array[secondIndex];
//   array[secondIndex] = temp;
// }

// //Select first and last index as 2nd and 3rd parameters
// quickSort(numbers, 0, numbers.length - 1);
// console.log(numbers);

//#1 - Sort 10 schools around your house by distance:
// insertion sort

//#2 - eBay sorts listings by the current Bid amount:
// radix or counting sort // fix integers

//#3 - Sport scores on ESPN
// quick sort

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// merge sort

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// insertion sort

//#6 - Temperature Records for the past 50 years in Canada
// quick sort

//#7 - Large user name database needs to be sorted. Data is very random.
// merge sort? quick sort

//#8 - You want to teach sorting for the first time
// bubble sort selection sort
