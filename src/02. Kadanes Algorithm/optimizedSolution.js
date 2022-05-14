function maxSubarraySum(arr, size)
{
    let max_ending_here = arr[0], max_so_far = arr[0];
    for (let i = 0; i < size; i++) {

        // include current element to previous subarray only
        // when it can add to a bigger number than itself.
        if (arr[i] <= max_ending_here + arr[i]) {
            max_ending_here += arr[i];
        }

        // Else start the max subarray from current element
        else {
            max_ending_here = arr[i];
        }
        if (max_ending_here > max_so_far) {
            max_so_far = max_ending_here;
        }
    }
    return max_so_far;
}

console.log(maxSubarraySum([ -1, -2, -3, -4 ], 4));