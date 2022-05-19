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
  
  
  console.log(subArrayWithGivenSum([1,2,3,4,6,88],10)); // 4

  /* 
  How it works? 
  We start by adding first element of the array and keeping a startCounter whenever sum gets higher than 
  the given sum it gets into this while loop which keeps on subtracting the arr[windowStart] from the sum 
  then we have a condition which checks if both sum and currentSum are equal.  
  
  */