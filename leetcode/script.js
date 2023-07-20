// const allPossibleFBT = function (n) {
//   let cache = {};
//   return helper(n);

//   function helper(n) {
//     if (n === 1) {
//       return [new TreeNode(0)];
//     }

//     if (cache[n]) {
//       return cache[n];
//     }

//     let result = [];

//     debugger;
//     for (let i = 1; i <= n - 2; i += 2) {
//       let left = helper(i);
//       let right = helper(n - 1 - i);

//       for (let lNode of left) {
//         for (let rNode of right) {
//           let root = new TreeNode(0);
//           root.left = lNode;
//           root.right = rNode;
//           result.push(root);
//         }
//       }
//     }

//     cache[n] = result;

//     return result;
//   }
// };

// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

allPossibleFBT(7);
