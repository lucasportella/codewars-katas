function descendingOrder(n) {
  return parseInt((n.toString().split('').sort((a, b) => b - a).join('')), 10);
}

descendingOrder(42145); // returns 54421
