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