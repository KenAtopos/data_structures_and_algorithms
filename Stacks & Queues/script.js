// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }

//   peek() {
//     return this.top;
//   }

//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       const preNodes = this.top;
//       this.top = newNode;
//       this.top.next = preNodes;
//     }
//     this.length++;

//     return this;
//   }

//   pop() {
//     if (!this.top) return null;
//     if (this.top === this.bottom) this.bottom = null;
//     this.top = this.top.next;
//     this.length--;

//     return this;
//   }

//   //isEmpty
// }

// const myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.pop();
// myStack.pop();
// myStack.pop();

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.data = [];
//   }

//   peek() {
//     return this.data[this.data.length - 1];
//   }

//   push(value) {
//     this.data.push(value);
//     return this;
//   }

//   pop() {
//     this.data.pop();
//     return this;
//   }

//   //isEmpty
// }

// const myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.pop();
// myStack.pop();
// myStack.pop();

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }

//   peek() {
//     return this.first;
//   }

//   enqueue(value) {
//     const newNode = new Node(value);
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       //   let prevNode = this.first;
//       //   for (let i = 0; i < this.length - 1; i++) {
//       //     prevNode = prevNode.next;
//       //   }
//       //   prevNode.next = newNode;
//       this.last.next = newNode;
//       this.last = newNode;
//     }

//     this.length++;

//     return this;
//   }

//   dequeue() {
//     if (!this.first) return null;
//     if (this.first === this.last) this.last = null;

//     // const holding = this.first // holding in case of the garbage collection
//     this.first = this.first.next;

//     this.length--;

//     return this;
//   }
//   //isEmpty;
// }

// const myQueue = new Queue();

// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// myQueue.dequeue();

class CrazyQueue {
  constructor() {
    this.popStack = [];
    this.pushStack = [];
  }

  enqueue(value) {
    const length = this.popStack.length;
    for (let i = 0; i < length; i++) {
      this.pushStack.push(this.popStack.pop());
    }
    this.pushStack.push(value);
    return this;
  }

  dequeue() {
    const length = this.pushStack.length;
    for (let i = 0; i < length; i++) {
      this.popStack.push(this.pushStack.pop());
    }
    this.popStack.pop();
    return this;
  }
  peek() {
    if (this.pushStack.length > 0) {
      return this.pushStack[0];
    }
    return this.popStack[this.popStack.length - 1];
  }
}

const myQueue = new CrazyQueue();
myQueue.peek();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();
