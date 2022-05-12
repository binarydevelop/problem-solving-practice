function subArraywithMaxSum(arr, windowSize){
    let currentSum = 0 ;
    let maxSum = 0;
    for(let i = 0; i < windowSize; i++){
      currentSum += arr[i];
    }
    for(let j = windowSize; j <= arr.length - windowSize; j++){
      currentSum += arr[j] - arr[j - windowSize];
      maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum;
  }
  console.log(subArraywithMaxSum([4, 2, 3, 5,7, 1, 2], 3));