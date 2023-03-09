// The second argument/parameter is expected to be a (callback) function
// ver 1. using for loop
// const findWaldo = function(names, found) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

// ver 2. using .forEach
const findWaldo = function(names, found) {
  names.forEach(function(name, index) {
    if (name === "Waldo") {
      found(index);   // execute callback
    }
  });
}

// our callback function
const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound); 

// This code illustrates how a function can be treated as an ordinary value and passed around
// to another function. We pass a reference to the function named actionWhenFound
// as an argument to another function, findWaldo 
// actionWhenFound is a callback function. It is first defined, then passed as
// an argument to another function, and finally executed once a specific event occurs. 