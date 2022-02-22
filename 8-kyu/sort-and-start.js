function twoSort(array) {
  const star = array.sort()[0];
  return star.split('').join('***');
}

const testArray = ['bitcoin', 'take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'perhaps'];

twoSort(testArray); // returns b***i***t***c***o***i***n
