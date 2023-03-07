// Write a program that takes any number of command line arguments, all strings, and reverses them 
// Initialize variable to store arguments 
let args = process.argv; 
let reverseArgs = args.slice(2); 
let result = ""
for (let i = reverseArgs.length - 1; i >= 0 ; i--) {
  for (let j = reverseArgs[i].length - 1; j >= 0; j--) {
    result += reverseArgs[i][j]; 
  }
  result += " "; // Add a space between arguments
}
console.log(result);  