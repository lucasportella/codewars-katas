function getCount(str) {
    var vowelsCount = 0;
    
    for (let i = 0; i < str.length; i += 1) {
        const vowels = {
            a: true,
            e: true,
            i: true,
            o: true,
            u: true
        }
        if (vowels[str[i]]) {
            vowelsCount += 1
        }
    }
    
    return vowelsCount;
  }

console.log(getCount('abcdefgh'))