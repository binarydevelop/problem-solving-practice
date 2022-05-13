function firstNegative(arr, windowSize){
    let firstNegatives = [];
    for(let i = 0; i <= arr.length - windowSize; i++){
      let negFound = false;
      for(let j = i ; j < i + windowSize; j++){
        if(arr[j]< 0){
          negFound = true;
          firstNegatives.push(arr[j])
          break;
        }
      }
      if(!negFound){
        firstNegatives.push(0)
      }
    }
    return firstNegatives
  }
  
  
  // arr.length = 8 
  console.log(firstNegative([12, 1, 7, 8 ,-15, 30 , 16, 28], 3));