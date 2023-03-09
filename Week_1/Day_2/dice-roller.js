// Write a program that takes a single parameter from the cmd line, a number, and rolls that many six-sided dice

// Declare variable for command line, slice the array and take the new first element as a number using [0] 
const numberOfDice = process.argv.slice(2)[0];
let diceRoll = [];

// Use Math.random for dice roll with function that accepts range between 1-6 representing possible dice rolls
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Loop through the array and push each element 
for (let i = 0; i < numberOfDice; i++) {
  diceRoll.push(randomInRange(1, 6));
}

// Print, using join(", ") the resulting rolls
console.log(`Rolled ${numberOfDice} dice: ${diceRoll.join(", ")}`);
