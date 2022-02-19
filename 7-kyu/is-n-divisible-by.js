function isDivisible(...n) {
  for (let i = 1; i < n.length; i += 1) {
    if (n[0] % n[i] !== 0) {
      return false;
    }
  }
  return true;
}

isDivisible(5, 3, 1, 2);
isDivisible(50, 5, 10, 25);
