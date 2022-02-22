function getCount(str) {
  let vowelsCount = 0;

  for (let i = 0; i < str.length; i += 1) {
    const vowels = {
      a: true,
      e: true,
      i: true,
      o: true,
      u: true,
    };
    if (vowels[str[i]]) {
      vowelsCount += 1;
    }
  }

  return vowelsCount;
}

getCount('abcdefgh'); // returns 2
