// let myLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 13,
//         next: {
//           value: 4,
//           next: null,
//         },
//       },
//     },
//   },
// };

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.pre = null;
//   }
// }

// class DoublyLinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//       pre: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }

//   printList() {
//     const array = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       array.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     console.log(array);
//     return array;
//   }

//   append(newValue) {
//     const nextNode = new Node(newValue);
//     nextNode.pre = this.tail;
//     this.tail.next = nextNode;
//     this.tail = nextNode;
//     this.length++;
//     return this;
//   }

//   // prepend(newValue) {
//   //   const firstNode = {
//   //     value: newValue,
//   //     next: this.head,
//   //   };
//   //   this.head = firstNode;
//   //   this.length++;
//   //   return this;
//   // }

//   prepend(newValue) {
//     const firstNode = new Node(newValue);
//     firstNode.next = this.head;
//     this.head = firstNode;
//     firstNode.next.pre = firstNode;
//     this.length++;
//     return this;
//   }

//   // insert(index, value) {
//   //   const newNode = new Node(value);
//   //   let currentNode = this.head;
//   //   let preNode = null;

//   //   for (let i = 0; i < index; i++) {
//   //     preNode = currentNode;
//   //     currentNode = currentNode.next;
//   //   }

//   //   newNode.next = currentNode;
//   //   preNode.next = newNode;
//   //   this.length++;

//   //   return this;
//   // }

//   insert(index, value) {
//     if (index === 0) {
//       this.prepend(value);
//       return this;
//     }

//     if (index >= this.length) {
//       this.append(value);
//       return this;
//     }

//     let i = 0;
//     let currentNode = this.head;
//     const newNode = new Node(value);

//     while (i !== index - 1) {
//       currentNode = currentNode.next;
//       i++;
//     }

//     let restNode = currentNode.next;

//     currentNode.next = newNode;
//     newNode.next = restNode;
//     newNode.pre = currentNode;
//     restNode.pre = newNode;

//     this.length++;

//     return this;
//   } // only changed the linked not the whole this.

//   remove(index) {
//     let i = 0;
//     let currentNode = this.head;

//     while (i !== index - 1) {
//       currentNode = currentNode.next;
//       i++;
//     }

//     let restNode = currentNode.next;
//     currentNode.next = restNode.next;
//     restNode.next.pre = currentNode;

//     this.length--;

//     return this;
//   }
// }

// const myLinkedList = new DoublyLinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(20);
// myLinkedList.insert(2, 99);
// // myLinkedList.insert(2, 88);
// myLinkedList.printList();
// myLinkedList.remove(3);
// console.log(myLinkedList);
// myLinkedList.printList();

// add a method reverse() to the linked list that reverses the entire list of nodes

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    console.log(newNode);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;

    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.reverse();
