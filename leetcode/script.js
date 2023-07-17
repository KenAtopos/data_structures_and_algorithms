// const findTheWinner = function (n, k) {
//   let queue = [];

//   for (let i = 1; i <= n; i++) {
//     queue.push(i);
//   }

//   debugger;
//   while (queue.length !== 1) {
//     if (k <= queue.length) {
//       queue.push(...queue.splice(0, k - 1));
//       queue.shift();
//     } else {
//       queue.push(...queue.splice(0, k - queue.length - 1));
//       queue.shift();
//     }

//     console.log(queue);
//   }

//   return queue[0];
// };

// findTheWinner(7, 6);
