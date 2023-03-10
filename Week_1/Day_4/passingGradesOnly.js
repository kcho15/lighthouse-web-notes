const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

// Write code to filter this list to only passing grades, greater than or equal to 70

// Declare callback func and refactor it to be inline and anonymous 
const passingGradesAnon = grades.filter(function(score){ return score >= 70 }) // explicit return
// must specify that function "return"'s 


const passingGradesArrow = grades.filter(score => score >= 70); 
// implicit return, "return" not req

// Tests
console.log(passingGradesAnon )
console.log(passingGradesArrow); 

// Notes
// .reject is the opposite of .filter