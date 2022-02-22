function countingDuplicates(text) {
  const noRepeat = [];
  const repeat = [];
  const inputArray = text.toLowerCase().split('');

  inputArray.forEach((letter) => {
    if (!noRepeat.some((noRepeatLetter) => letter === noRepeatLetter)) {
      noRepeat.push(letter);
    }
  });

  noRepeat.forEach((noRepeatLetter) => {
    let counter = 0;
    inputArray.forEach((letter) => {
      if (letter === noRepeatLetter) {
        counter += 1;
      }
      if (counter === 2 && !repeat.some((el) => el === noRepeatLetter)) {
        repeat.push(noRepeatLetter);
      }
    });
  });
  return repeat.length;
}

countingDuplicates('Indivisibilities'); // returns 2
