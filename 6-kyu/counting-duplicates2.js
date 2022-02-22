function countingDuplicates(text) {
  const repeat = [];
  const inputArray = text.toLowerCase().split('');
  const inputCopy = [...inputArray];

  inputArray.forEach((letter) => {
    inputCopy.shift();
    if (inputCopy.some((el) => el === letter) && !repeat.some((element) => element === letter)) {
      repeat.push(letter);
    }
  });
  return repeat.length;
}

countingDuplicates('Indivisibilities'); // returns 2
