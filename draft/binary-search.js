// draft - not approved
// https://www.codewars.com/kata/547bf139ec2cf10b7c0003e6

function binSearch(arr, toSearch) {
  let index = Math.floor((arr.length - 1) / 2);
  let start = 0;
  let end = arr.length - 1;
  while (arr[index] !== toSearch) {
    if (toSearch > arr[index]) {
      start = index + 1;
      index = Math.floor((start + end) / 2);
    } else {
      end = index - 1;
      index = Math.floor(end / 2);
    }
    if (start > arr.length - 1 || end < 0) {
      return -1;
    }
  }
  return index;
}

binSearch([1, 2, 3, 4, 5], 2); // returns 1
