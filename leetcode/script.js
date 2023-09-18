// const points = [
//   [0, 0],
//   [2, 2],
//   [3, 10],
//   [5, 2],
//   [7, 0],
// ];

// const minCostConnectPoints = function (points) {
//   let len = points.length;
//   let visited = new Set();
//   let result = 0;
//   let list = new Array(len).fill(Infinity);

//   list[0] = 0;

//   debugger;
//   for (let i = 0; i < len; i++) {
//     let cur = 0;
//     let min = Infinity;

//     for (let j = 0; j < len; j++) {
//       let dis = list[j];

//       if (visited.has(j)) {
//         continue;
//       }

//       if (dis < min) {
//         min = dis;
//         cur = j;
//       }
//     }

//     result += min;
//     visited.add(cur);

//     for (let another = 0; another < len; another++) {
//       if (visited.has(another)) {
//         continue;
//       }

//       let md = manhattan_distance(points[cur], points[another]);

//       if (md > list[another]) {
//         continue;
//       }

//       list[another] = md;
//     }
//   }

//   return result;
// };

// function manhattan_distance(a, b) {
//   return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
// }

// minCostConnectPoints(points);
