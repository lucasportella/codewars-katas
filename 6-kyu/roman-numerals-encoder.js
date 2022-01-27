function solution(number){
    let result = ''
    const blocks = []
    let number_rest = number
    const arabicNumerals = [1000, 500, 100, 50, 10, 5, 1]
    const romanNumerals = ['M', 'D', 'C', 'L', 'X', 'V', 'I']

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

    let formatted_result = result

    for (let roman in result) {
        counter = ''
        
    }
    return result
  }

  console.log(solution(35));

// 2044
// 2000
// 40
// 1111 --> 