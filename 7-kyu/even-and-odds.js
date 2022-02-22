function evensAndOdds(num) {
  if (num % 2 === 0) {
    return num.toString(2);
  }
  return num.toString(16);
}

// clever
// const evensAndOdds = n => n.toString(n%2 ? 16 : 2);

evensAndOdds(31); // returns 1f
evensAndOdds(30); // returns 11110
