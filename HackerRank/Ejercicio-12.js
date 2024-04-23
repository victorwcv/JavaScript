const c = [0, 0,0,1,0,0];

function jumpingOnClouds(c) {
  let totalSteps = 0;
  let currentIndex = 0;

  while (currentIndex < c.length - 1) {
    if (c[currentIndex + 2] === 0 ) {
      currentIndex+=2
    } else {
      currentIndex++
    }
    totalSteps++;
  }
  return totalSteps
}

console.log(jumpingOnClouds(c));
