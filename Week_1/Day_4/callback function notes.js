// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found();   // execute callback
    }
  }
}

const actionWhenFound = function() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// This code illustrates how a function can be treated as an ordinary value and passed around
// to another function. We pass a reference to the function named actionWhenFound
// as an argument to another function, findWaldo 
// actionWhenFound is a callback function. It is first defined, then passed as
// an argument to another function, and finally executed once a specific event occurs. 