const inputsTabla1 = document.querySelectorAll(".tabla-1 input");
const inputsTabla2 = document.querySelectorAll(".tabla-2 input");
const inputsTabla3 = document.querySelectorAll(".tabla-3 input");
const porcentaje = document.getElementById('porciento-1')
const porcentaje2 = document.getElementById('porciento-2')
const porcentaje3 = document.getElementById('porciento-3')
porcentaje.innerHTML = '% 0';
porcentaje2.innerHTML = '% 0';
porcentaje3.innerHTML = '% 0';

const nums1 = [];
const nums2 = [];
const nums3 = [];

inputsTabla1.forEach(input => {

  input.addEventListener('change', (e) => {
    nums1.push( parseInt(e.target.value));
    console.log(nums1); 
    if(nums1.length === 3) {
      let ops = ((nums1[0] + (nums1[1]/12) + (nums1[2]/96)) / 64.98)*100;
      porcentaje.innerHTML = `% ${ops.toFixed(2)}`
    }
  });
});

inputsTabla2.forEach(input => {

  input.addEventListener('change', (e) => {
    nums2.push( parseInt(e.target.value));
    console.log(nums2); 
    if(nums2.length === 3) {
      let ops = ((nums2[0] + (nums2[1]/12) + (nums2[2]/96)) / 64.61)*100;
      porcentaje2.innerHTML = `% ${ops.toFixed(2)}`
    }
  });
});

inputsTabla3.forEach(input => {

  input.addEventListener('change', (e) => {
    nums3.push( parseInt(e.target.value));
    console.log(nums3); 
    if(nums3.length === 3) {
      let ops = ((nums3[0] + (nums3[1]/12) + (nums3[2]/96)) / 64.61)*100;
      porcentaje3.innerHTML = `% ${ops.toFixed(2)}`
    }
  });
});

  
