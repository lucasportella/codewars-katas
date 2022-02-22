/* eslint-disable no-restricted-syntax, guard-for-in */
function solution(number) {
  let result = '';
  const blocks = [];
  let numberRest = number;
  const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (const numeral in arabicNumerals) {
    if (numberRest >= arabicNumerals[numeral]) {
      const divisionResult = parseInt(numberRest / arabicNumerals[numeral], 10);
      blocks.push(divisionResult);
      numberRest %= arabicNumerals[numeral];
    } else {
      blocks.push(0);
    }
  }
  for (const numeral in blocks) {
    result += romanNumerals[numeral].repeat(blocks[numeral]);
  }

  return result;
}

solution(1000); // should return 'M'
