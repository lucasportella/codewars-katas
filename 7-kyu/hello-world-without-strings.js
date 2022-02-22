const helloWorld = () => {
  HelloWorldBinary = [1001000, 1100101, 1101100, 1101100, 1101111, 101100, 100000, 1010111, 1101111, 1110010, 1101100, 1100100, 100001];

  return HelloWorldBinary.reduce((acc, curr, index) => (index > 0 ? acc + String.fromCharCode(parseInt(curr, 2)) : acc), String.fromCharCode(parseInt(HelloWorldBinary[0], 2)));
};

helloWorld();
