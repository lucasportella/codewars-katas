const countBits = (n) => {
  const binary = n.toString(2).match(/1/g);
  return binary ? binary.length : 0;
};

countBits(0); // returns 0
countBits(176284063); // returns 14
