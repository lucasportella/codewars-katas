function solution(number){
    let result = ''
    const blocks = []
    let number_rest = number
    const arabicNumerals = [1000,900, 500, 400, 100, 90, 50,40, 10,9, 5,4, 1]
    const romanNumerals = ['M','CM', 'D','CD', 'C','XC', 'L','XL', 'X','IX','V', 'IV','I']

    for (let numeral in arabicNumerals) {   
        if (number_rest >= arabicNumerals[numeral]) {
            division_result = parseInt(number_rest / arabicNumerals[numeral])
            blocks.push(division_result)
            number_rest = number_rest % arabicNumerals[numeral]
        }
        else {
            blocks.push(0)
        }
    }
    for (let numeral in blocks) {
        result += romanNumerals[numeral].repeat(blocks[numeral])
    }

    return result
  }
