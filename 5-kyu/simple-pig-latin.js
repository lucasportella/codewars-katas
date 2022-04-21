// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    const punctuationMap = [',','.','!','?',';', ':']
    const splitted =  str.split(' ')
    const clean = splitted.map((str) => {
        if (punctuationMap.includes(str[str.length -1])) {
            const wordWithPunc = str.slice(1,str.length -1)
            if (wordWithPunc.length) {
                return wordWithPunc + str[0] + 'ay'+ str[str.length -1]
            }
            return str
        }
        return str.slice(1,str[str.length]) + str[0] + 'ay'
    })
    let result = ''
    clean.forEach((str) => result += `${str} `)
    console.log(result.trim());
    return result.trim()
  }

  pigIt('hello mr. simple !')
  pigIt('hello mr. simple!')