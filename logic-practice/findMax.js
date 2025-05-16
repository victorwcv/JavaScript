/* Write a function findMax that receives an array of numbers and returns the largest one. */

function findMax(array = []) {

   if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  
  if (array.length === 0) {
    throw new Error('Array must contain at least one number');
  }

  let largest = -Infinity;

  for(const number of array) {
    if (number > largest) largest = number;
  } 

  return largest;
}

const a = findMax([3, 7, 2, 9, 5]); // 9
const b = findMax([-10, -3, -50]); // -3

console.log(a)
console.log(b)