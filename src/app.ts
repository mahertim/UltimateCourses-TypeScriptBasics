const pizza = {
  name: 'Pepperoni',
  price: 15,
};

const toppings = ['pepperoni'];

const order = {
  ...pizza,
  toppings,
};

const finalOrder = { id: 0, ...order, coupon: 'none' };

console.log(finalOrder);
