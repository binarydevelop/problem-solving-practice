function subArrayWithGivenSum(arr, sum){
    let currSum = 0;
    let subtractCounter = 0;
    for(let i = 0; i< arr.length; i++){
      currSum += arr[i];
      while(currSum > sum){
        currSum  -= arr[subtractCounter];
        subtractCounter++;
      }
      if(currSum == sum){
        return [subtractCounter, i] ;
      }
    }
  }
  
  
  console.log(subArrayWithGivenSum([1,2,3,4,6,88],10));