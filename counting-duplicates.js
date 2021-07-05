function descendingOrder(text){
  const noRepeat = [];
  const repeat = [];
  const inputArray = text.toLowerCase().split('');

  inputArray.map((letter) => {
    if (!noRepeat.some((noRepeatLetter) => letter === noRepeatLetter)) {
      noRepeat.push(letter)
    }
  })

  noRepeat.map((noRepeatLetter) => {
    let counter = 0;
    inputArray.map((letter) => {
      if (letter === noRepeatLetter) {
        counter += 1;
      }
      if (counter === 2 && !repeat.some((el) => el === noRepeatLetter)) {
        repeat.push(noRepeatLetter);
      }
    })
  })
  return repeat.length;
}

const a = descendingOrder('Indivisibilities');
console.log((a))
