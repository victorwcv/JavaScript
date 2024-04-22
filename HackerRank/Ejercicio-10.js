const height = [1,2,3,3,2];


function hurdleRace(k, height) {
  const heighest = height.sort((a,b) => b-a)[0];
  return heighest > k ? heighest-k : 0
}

console.log(hurdleRace(1,height));