// https://www.codewars.com/kata/54d496788776e49e6b00052f/train/javascript
// Given an array of positive or negative integers

// I= [i1,..,in]

// you have to produce a sorted array P of the form

// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

// P will be sorted by increasing order
//  of the prime numbers. The final result has to be given as a string
//  in Java, C#, C, C++ and as an array of arrays in other languages.

// Example:
// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

// Notes:

// It can happen that a sum is 0 if some numbers are negative!
// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears
//  in the result, the sum of the numbers for which 5 is a factor
//  is 0 so we have [5, 0] in the result amongst others.

// In Fortran - as in any other language - the returned string is not
//  permitted to contain any redundant trailing whitespace: you can use
// dynamically allocated character strings.

// Sample tests:
// function testing(arr, exp) {
//     console.log(arr);
//     let ans =  sumOfDivided(arr);
//     console.log("Actual: ", ans);
//     console.log("Expect: ", exp);
//     Test.assertSimilar(ans, exp);
//     console.log("#");
// }

// describe("Tests",function() {
// it("sumOfDivided",function() {
//     testing([12, 15], [ [2, 12], [3, 27], [5, 15] ]);
//     testing([15,21,24,30,45], [ [2, 54], [3, 135], [5, 90], [7, 21] ]);
// })})

function sumOfDivided(lst) {
  // your code
  return [[2, 12]];
}

const isPrime = (n) => {
  // n must be positive natural number
  if (n === 2) { return true; }
  if (n === 1 || n % 2 === 0) { return false; }
  for (let i = 3; i < n; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};