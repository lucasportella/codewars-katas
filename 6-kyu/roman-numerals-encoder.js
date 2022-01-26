function solution(number){
    result = ''
    number_rest = number
    romanNumerals = [
        {1000: 'M'},
        {500: 'D'},
        {100: 'C'},
        {50: 'L'},
        {10: 'X'},
        {5: 'V'},
        {1: 'I'},
    ]
    for (let numeral in romanNumerals) {
        roman = Number(Object.entries(romanNumerals[numeral])[0][1])
        arabic = Object.entries(romanNumerals[numeral])[0][0]
        if (number_rest > arabic) {
            division_result = parseInt(number_rest / arabic)
            number_rest = number % arabic
            console.log(division_result)
        }
    }
  }

  solution(2044)

// 2044
// 2000
// 40
// 1111 --> 