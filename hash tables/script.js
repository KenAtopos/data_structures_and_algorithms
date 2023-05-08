// let user = {
//   age: 54,
//   name: "Kylie",
//   magic: true,
//   scream: function () {
//     console.log("ahhhhhh!");
//   },
// };

// exercise 1:
// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//     }
//     return hash;
//   }

//   set(key, value) {
//     const index = this._hash(key);

//     if (!this.data[index]) {
//       this.data[index] = [];
//     }

//     this.data[index].push([key, value]);
//     return this.data;
//   }

//   get(key) {
//     const hash = this._hash(key);
//     const currentBucket = this.data[hash];
//     if (currentBucket) {
//       for (let i = 0; i < currentBucket.length; i++) {
//         if (currentBucket[i][0] === key) {
//           return currentBucket[i][1];
//         }
//       }
//     }
//     return undefined;
//   }

//   keys() {
//     const keysArray = [];
//     for (let i = 0; i < this.data.length; i++) {
//       if (this.data[i]) {
//         keysArray.push(this.data[i][0][0]);
//       }
//     }
//     return keysArray;
//   }
// }

// const myHashTable = new HashTable(50);
// myHashTable.set("grapes", 10000);
// // myHashTable.get("grapes");
// myHashTable.set("apples", 9);
// // myHashTable.get("apples");
// myHashTable.set("oranges", 25);
// myHashTable.keys();

// exercise 2
//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// function firstRecurringCharacter(input) {
//   for (let i = 0; i < input.length; i++) {
//     const restArray = input.slice(i + 1);
//     const currentNum = input[i];
//     const repeatArray = [];
//     if (restArray.includes(currentNum)) {
//       console.log(currentNum);
//       return currentNum;
//     } else {
//       return undefined;
//     }
//   }
// } // O(n^2)

const firstRecurringCharacter = function (input) {
  const map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
}; // O(n)

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
