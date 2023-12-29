/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
  let count = 0;
  const remainders = new Array(k).fill(0);
  console.log(remainders);
  ar.forEach(number => {
    console.log(number);
    const remainder = number % k;
    console.log(remainder);
    count += remainders[(k - remainder) % k];
    console.log(count);
    remainders[remainder]++;
    remainders
  });

  console.log(count);
  return count;
}

divisibleSumPairs(6, 4, [1, 3, 2, 6, 1, 2])

function divisibleSumPairs2(n, k, ar) {
  let pairs = [];

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        pairs.push([ar[i], ar[j]]);
      }
    }
  }

  return console.log(pairs);
}

divisibleSumPairs2(6, 4, [1, 3, 2, 6, 1, 2])
