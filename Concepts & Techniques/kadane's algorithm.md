## Kadane's Algorithm
Kadane's Algorithm is an iterative dynamic programming algorithm ( A method that is often used to solve finite-dimensional nonlinear constrained global optimal control problems ), so to understand Kadane's Algorithm we need to understand Dynamic Programming first. Kadane's Algorithm is used to solve the famous problem - Maximum Subarray Sum. This Algorithm is used to solve the problem in linear time.

Kadane's Algorithm is an example of dynamic programming algorithm, which uses the solutions of previous sub-problems to find the overall optimum solution.

- Maximum sum subarray problem
Kadane's Algorithm says that the maximum subarray at each element is either the current element itself, or the current element plus the maximum subarray ending at the previous element. For negative elements we need to have a slight modification in it. 

- [Explanation](https://dev.to/alisabaj/kadane-s-algorithm-the-maximum-subarray-problem-c31)