# Callback function examples 

## Callback function as a condition
This function accepts and array and callback function as a parameter, and checks against the callback function as a condition

### In line 21 when the function takeUntil is called with the arguments (data1, x => x < 0) we are now iterating over the callback function within our for...of loop. 

### Each item is going to be each element of the array. The item is passed into the callback to determine if the condition is met, truthy or falsey, and either pushes that element into our new result array, or ends the loop and returns the resulting array with pushed elements. 

const takeUntil = function(array, callback) {

  const results = [];
  for (let item of array) {       
    if (!callback(item)) {        // calling the callback function with argument "item" 
      results.push(item)          // if falsey, continue to push the item to resultsif (callback(item)) {
    } else {
      return results;
    }
  };
  return results;
};
   
//Tests

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ])
// Expected Output
// [ 1, 2, 5, 7, 2 ]

## Callback function to "do something" to an array 
This function is intended to mimic how the .map method works.

### We are looping over each item in the array and using that item as a parameter for our callback function to do whatever it is we are asked to do in the input. 

// Our map function will take in two arguments, 1. an array to map 2. a callback function
// the map function will return a new array based on the result of the callback function

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item)); 
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---'); 
  }
  return results; 
}; 

//Tests
const results1 = map(words, word => word[0]);
console.log(results1); 
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); // expected output: pass 
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 'x']); // expected output: fail 