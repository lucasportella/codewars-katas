// Given an n x n array,
// return the array elements arranged from outermost elements to the middle element,
// traveling clockwise.

const snail = (array) => {
  const result = [];
  let top = 0;
  let bottom = array.length - 1;
  let pointer = 0;
  if (array[0][0]) {
    while (bottom >= top) {
    // get upper part of the square:
      for (let i = 0 + pointer; i <= bottom; i += 1) {
        result.push(array[top][i]);
      }
      // get right:
      for (let i = 1 + pointer; i < bottom + 1; i += 1) {
        result.push(array[i][bottom]);
      }
      // get bottom:
      for (let i = (bottom - 1); i >= 0 + pointer; i -= 1) {
        result.push(array[bottom][i]);
      }
      // get left:
      for (let i = (bottom - 1); i >= 1 + pointer; i -= 1) {
        result.push(array[i][top]);
      }
      // reduces square size:
      top += 1;
      bottom -= 1;
      pointer += 1;
    }
  }
  return result;
};

const arr0 = [[]];
const arr1 = [[1]];
const arr3 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
const arr2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

snail(arr0);
snail(arr1);
snail(arr2);
snail(arr3);
