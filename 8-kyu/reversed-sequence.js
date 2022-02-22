const reverseSeq = (n) => {
  const a = [];
  for (let v = n; v >= 1; v -= 1) {
    a.push(v);
  }

  return a;
};

reverseSeq(5); // returns [5, 4, 3, 2, 1]
