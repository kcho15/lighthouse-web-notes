//Pair Programmed by Kevin Cho and Rain Zhu
const swapper = function (key1, object1, key2, object2) {
  console.log("Swap!");

  // Put your solution here
  let swappedObj = {}
  
  for (let element in object1) {
    if (element === key1) {
      swappedObj[element] = object1[element];
      object1[element] = object2[key2]; // swapped elements 
      object2[key2] = swappedObj[element] 
    } 
  }

  console.log("object1: ", object1);
  console.log("object2: ", object2);
};

// Tests 
swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
// Swap!
// object1: { a: 5 , b: 2, c: 3 }
// object2: { a: 4, b: 3, c: 1 }

swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
// Swap!
// object1:  { a: 8, b: 12, c: 6 }
// object2:  { a: 5, b: 1, c: 2, d: 7 }

swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });
// Swap!
// object1:  { a: 1, b: 3, c: 5, d: 7 }
// object2:  { a: 4, b: 0, c: 3 }