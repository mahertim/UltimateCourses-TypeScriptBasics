const pizza = {
  name: 'Pepperoni',
  price: 15,
  getName() {
    return this.name;
  },
};

console.log(pizza.getName());

const toppings = ['pepperoni'];

function createOrder(thePizza = pizza, theToppings = toppings) {
  return { thePizza, theToppings };
}

console.log(createOrder(pizza, toppings));
