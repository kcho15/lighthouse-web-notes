// Get command line arguments and slice to usable strings 
let args = process.argv.slice(2); 

// Slice after first letter of word, add first letter to end, add 'ay'
function pigLatin(word) {
  return word.slice(1) + word[0] + 'ay';
} 

// Pass pigLatin as callback function to map 
const result = args.map(pigLatin); 

// Join the words into one sentence
const newStr = result.join(" "); 

console.log(newStr); 
