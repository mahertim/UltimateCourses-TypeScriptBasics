let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y) => {
  if (y) return x * y;
  return x;
};

const sum1 = sumOrder(25);
const sum2 = sumOrder(25, 2);

console.log(`Sum 1: ${sum1}`);
console.log(`Sum 2: ${sum2}`);
