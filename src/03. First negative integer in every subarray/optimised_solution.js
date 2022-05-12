function firstNegative(arr , k){
    let windowStart = 0;
    let q = [];
    let firstNegativeNumbers = [];
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        if (arr[windowEnd] < 0) {
            q.push(arr[windowEnd]);
        }
  
        if (windowEnd - windowStart + 1 == k) { // Calculate result and Slide the window
            if (q.length == 0) {
                firstNegativeNumbers.push(0);
            } else {
                firstNegativeNumbers.push(q[0]);
  
                // Remove a[windowStart] from the queue since we need to slide the window now.
                // But only if it was added to the queue previously
                if (q[0] == arr[windowStart]) {
                    q.shift();
                }
            }
            windowStart++; // Slide the window ahead
        }
    }
  
    return firstNegativeNumbers;
  }
  
  
  console.log(firstNegative([12, 1, 7, 8, 15, 30, 16, 28], 3));