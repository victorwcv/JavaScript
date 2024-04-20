function countingValleys(steps, path) {
  let seaLevel = 0
  let valleys = 0;
  let currentStep;
  for (let i = 0; i < path.length; i++) {
      currentStep = path[i];
      if (currentStep === 'U') {
        seaLevel++;
      } else {
        seaLevel--;
      }
      if (currentStep === 'U' && seaLevel === 0 ) {
        valleys++
      }
      console.log(seaLevel);
      console.log(currentStep);
  }
  return valleys;
}

console.log(countingValleys(8,'DDUUDDUDUUUD'));