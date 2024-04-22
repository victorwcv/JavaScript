// x = cat A
// y = cat B
// z = mouse C

function catAndMouse(x, y, z) {
  let catA = Math.abs(x - z);
  let catB = Math.abs(y - z);
  return catA < catB ? 'Cat A' :
  catA > catB ? 'Cat B' :
  'Mouse C';
}

console.log(catAndMouse(1,3,2));
