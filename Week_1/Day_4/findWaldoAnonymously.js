const findWaldo = function(names, found) {
  names.forEach(function(name, index) {
    if (name === "Waldo") {
      found(index);   // execute callback
    }
  });
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], (index) => {console.log(`Found Waldo at index ${index}!`)}); 

// Instructions: Refactor the code by making the callback anonymous. 