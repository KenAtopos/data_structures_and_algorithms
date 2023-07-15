// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

// const bstFromPreorder = function (preorder) {
//   if (!preorder.length) return null;

//   let root = new TreeNode(preorder[0]);

//   let stack = [];
//   stack.push(root);

//   let i = 1;

//   debugger;
//   while (i < preorder.length) {
//     let topEle = stack.at(-1);

//     while (stack.length && preorder[i] > stack.at(-1).val) {
//       topEle = stack.pop();
//     }

//     let node = new TreeNode(preorder[i]);

//     if (node.val < topEle.val) topEle.left = node;
//     else topEle.right = node;

//     stack.push(node);
//     i++;
//   }

//   return root;
// };

// bstFromPreorder([8, 5, 1, 7, 10, 12]);
