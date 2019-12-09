let pizzaSize: number = 1;

function selectSize(size: 1 | 2 | 3): void {
  pizzaSize = size;
  return;
}

selectSize(3);

console.log(`Pizza size: ${pizzaSize}`);
