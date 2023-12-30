/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  let birdCount = {};
  let maxCount = 0;
  let maxID = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let birdID = arr[i];
    birdCount[birdID] = (birdCount[birdID] || 0) + 1;
    if (birdCount[birdID] > maxCount) {
      maxCount = birdCount[birdID];
      maxID = birdID;
    } else if (birdCount[birdID] === maxCount && birdID < maxID) {
      maxID = birdID;
    }
  }
  return maxID;
}

migratoryBirds([
  7, 5, 1, 3, 9, 4, 5, 7, 3, 3, 2, 2, 1, 7, 
]);
