// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

function pickingNumbers(a) {
  a.sort((x, y) => x - y);

  let maxLength = 0;
  let currentLength = 1;
  let currentElement = a[0];

  for (let i = 1; i < a.length; i++) {
    if (a[i] - currentElement <= 1) {
      currentLength++;
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
      }
      currentElement = a[i];
      currentLength = 1;
    }
  }

  if (currentLength > maxLength) {
    maxLength = currentLength;
  }

  return maxLength;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
