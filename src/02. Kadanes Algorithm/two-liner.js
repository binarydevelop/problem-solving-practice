function maxSubarraySum2(arr, n){
    let sumHere = arr[0]; let globalMax = arr[0];
  
    for(let i = 0; i < arr.length; i++){
      arr[i] + sumHere <= arr[i] ? sumHere = arr[i] : sumHere += arr[i]; 
      globalMax = Math.max(sumHere, globalMax) 
    }
  
    return globalMax
  }
  console.log(maxSubarraySum2([ -1 ], 1));