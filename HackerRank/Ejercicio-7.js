function getMoneySpent(keyboards, drives, b) {
  let buy = -1;
  for (let i = 0; i < keyboards.length; i++) {
      for (let j = 0; j < drives.length; j++) {
          if (keyboards[i] + drives[j] <= b) {
              if(keyboards[i] + drives[j] > buy) {
                  buy = keyboards[i] + drives[j];
              }
          } 
          
      }
  }
  return buy;
}

console.log(getMoneySpent([40,50,60], [5,8,12],  60));