// Preferred solution, as per mentor advice
let args = process.argv;
let numbersToAdd = args.slice(2);
let totalSum = 0;

for (const number of numbersToAdd) {
  totalSum += Number(number);
}

console.log(totalSum);

// Original attempt, also working solution
// let i = 2;

// let sum = 0
// while (i < process.argv.length) {
//sum += Number(process.argv[i]);
//i++
//}
// for-in loop is for objects
// for-of loop is for arrays

// c style loop want to use when you need to access the index

// forEach, map, reduce -> higher order methods!

// While loop is good for recursion
