//Pair Programmed by Kevin Cho and Rain Zhu
const swapper = function (key1, object1, key2, object2) {
  console.log("Swap!");

  let swappedObj = {};

  swappedObj[key1] = object1[key1];   // Set object1 to a placeholder, swappedObj
  object1[key1] = object2[key2];       // Swap object1 to object2 
  object2[key2] = swappedObj[key1]      // Swap object2 to our placeholder with object1's original value

  console.log("object1: ", object1);
  console.log("object2: ", object2);
};

// Tests 
swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
// Swap!
// object1: { a: 5 , b: 2, c: 3 } object 1 a: is now object 2's c: 
// object2: { a: 4, b: 3, c: 1 } object 2's c: is now object 1's a: 

swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
// Swap!
// object1:  { a: 8, b: 12, c: 6 }
// object2:  { a: 5, b: 1, c: 2, d: 7 }

swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });
// Swap!
// object1:  { a: 1, b: 3, c: 5, d: 7 }
// object2:  { a: 4, b: 0, c: 3 }