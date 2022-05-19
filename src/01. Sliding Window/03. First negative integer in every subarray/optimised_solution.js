function firstNegative(arr, windowSize){
    let windowStart = 0;
    let q = [];
    let result = [];
    for(let windowEnd = 0; windowEnd< arr.length; windowEnd++){
      if(arr[windowEnd] < 0 ){
        q.push(arr[windowEnd])
      }
      if(windowEnd - windowStart + 1 == windowSize ){ 
        if(q.length == 0 ){
          result.push(0)
        }else {
          result.push(q[0])
        }
        if(q[0]== arr[windowStart]){ 
          q.shift();
        }
        windowStart++;
      }
    }
    return result;
  }
console.log(firstNegative([12, -1, 7 , 8, -15, 30, -16, 28], 3));
  
console.log(firstNegative([12, 1, 7, 8, 15, 30, 16, 28], 3));

/* 
How does it work? 
We start by making a queue which only inserts -ve numbers inside it. Whenever the winodw Size is reached 
we move the window forward and check if the first elemnt of the queue is pointing at the windowStart if yes 
then we remove it since it is going out of the window.
*/