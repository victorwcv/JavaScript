const inputsTabla4 = document.querySelectorAll(".tabla-4 input");
const BPH = document.getElementById('BPH-tabla-4')
nums4 = [];

inputsTabla4.forEach(input => {

  input.addEventListener('change', (e) => {
    nums4.push( parseInt(e.target.value));
    console.log(nums4); 
    if(nums4.length === 3) {
      let ops = ((nums4[0] + (nums4[1]/12) + (nums4[2]/96)) / 64.98)*100;
      BPH.innerHTML = `% ${ops.toFixed(2)}`
    }
  });
});