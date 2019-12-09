let selectedToping: string = 'pepperoni';

function selectTopping(topping: string): void {
  selectedToping = topping;
}

selectTopping('bacon');

console.log(selectedToping);
