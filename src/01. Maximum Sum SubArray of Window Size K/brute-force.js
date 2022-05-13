function subArraywithMaxSum(arr, windowSize){
    let maxTill = 0
    for(let i = 0; i<= arr.length - windowSize; i++ ){ 
    //subtracting arr.length -windowSize gives the element from the last - size of window 
    //ex: length of array is 7 and window is 3 then 7-3 = 4 so it will run till 4 {0,1,2,3,4} and not on 5 as 5+3 =8 undefined will be added
        let sum = 0;
        for(let j = i; j< i + windowSize; j++){ 
            sum += arr[j];
        }
        maxTill = Math.max(maxTill, sum)
    }
    return maxTill
}