function maxSumSubarray(arr, n){
    let maxSum = 0; 
    for(let i = 0; i< arr.length ; i++){
      let currentSum = 0;
      for(j = i; j < arr.length; j++){
        currentSum += arr[j];
        if(currentSum > maxSum){
          maxSum = currentSum
        }
      }
    }
    return maxSum
  }
  console.log(maxSumSubarray([ -2, -3, 4, -1, -2, 1, 5, -3 ], 8));