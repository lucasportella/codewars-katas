function pigIt(str){
    const punctuationMap = [',','.','!','?',';', ':']
    return str.split(' ').map((word) => punctuationMap.includes(word) ? word : word.slice(1,word.length) + word[0] + 'ay').join(' ').trim()
  }

  console.log(pigIt('hello mr simple !'));
