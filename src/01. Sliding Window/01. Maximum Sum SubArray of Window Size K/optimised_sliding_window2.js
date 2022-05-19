function subArraywithMaxSum(arr, windowSize){
    let windowStart = 0 ;
    let currentSum = 0;
    let maxSum = 0;
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++ ){
      currentSum += arr[windowEnd];
  
      if(windowEnd - windowStart + 1 == windowSize ){
        maxSum = Math.max(currentSum, maxSum);
        currentSum -= arr[windowStart];
        windowStart++;
      }
    } 
    return maxSum;
  }
  console.log(subArraywithMaxSum([4, 2, 3, 5,7, 1, 2], 3));


  /* 
  
  How does it run??
  
  The loop starts at 0th index and adds until the windowSize is covered which is determined by (windowEnd - windowStart + 1 == windowSize) this condition
  When that is reached maximum is assigned for that winow by comparing it with maxSum.
  Then the windowStart is shifted one position 
  forward. and the sum is subtracted from that window. 
  */