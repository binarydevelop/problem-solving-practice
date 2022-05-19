function missingNumber(array, n){
    array.sort((a , b) => {
      return a - b ; 
    })
    for(let i = 0; i < n + 1 ;i++){ 
      if(array[i] !== i+1){
        return (i+1);
      }
    }
}


/* 
array.length + 1 to compensate for the case when N = 2 or array length is 2 and we have a
single item in array [1] so the index of it is 0 and the second element is missing. 

*/ 