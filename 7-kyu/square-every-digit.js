function squareDigits(num) {
  let result = '';
  for (let i = 0; i < String(num).length; i += 1) {
    result += String(Number(String(num)[i]) * Number(String(num)[i]));
  }
  return Number(result);
}

console.log(squareDigits(9119));
// 811181
