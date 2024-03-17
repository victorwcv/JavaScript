// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.


// function to calculate paired socks from array of sock colors
function sockMerchant(ar) {
  // reduce array to an object with sock counts
  const mapSocks = ar.reduce((acc, curr) => {
    // set count for current sock color
    acc[curr] = (acc[curr] || 0) + 1;
    // return object
    return acc;
  }, {});
 
  // calculate number of paired socks
  return Object.values(mapSocks).reduce((pairs, count) => pairs + Math.floor(count / 2), 0);
}