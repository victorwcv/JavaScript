// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.


function sockMerchant(ar) {
  const mapSocks = ar.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
  }, {});
  
  return Object.values(mapSocks).reduce((pairs, count) => pairs + Math.floor(count / 2), 0);
}