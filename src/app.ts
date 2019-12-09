const pizza = {
  name: 'Pepperoni',
  toppings: ['pepperoni', 'bacon', 'chilli'],
};

function order({ name: pizzaName, toppings: pizzaToppings }: any) {
  return { pizzaName, pizzaToppings };
}

const { pizzaToppings } = order(pizza);

const toppings = pizzaToppings;

const [first, second, third] = toppings;

console.log(first, second, third);

function logToppings([first, second, third]: any) {
  console.log(
    'Topping 1: ',
    first,
    '\nTopping 2: ',
    second,
    '\nTopping 3: ',
    third,
  );
}

logToppings(toppings);
