// 1.Quanto custa o sanduíche trybe?
// 2.Montar e validar sanduíche recebendo ingredientes e retornar o preço 
// 3.Calcular menu com promoção baseado no dia
// 4.Procurar pizzas mais baratas que X
// 5.Calcular preço final e quanto fica pra cada amigo
// 6.Retornar lanches e preço dos combos
const data = require('../data');

function getIngredientsPrice(ingredients) {
  return ingredients.reduce((acc, id) => {
    const ingredient = data.menu.sandwichItems.find(ingredient => ingredient.id === id);

    if (ingredient) {
      return ingredient.price + acc;
    }

    return acc; //lançar erro?
  }, 0)
}

function getSandwichPrice(sandwichName) {
  const sandwich = data.premade.sandwichs.find(sandwich => sandwich.name === sandwichName);

  if (sandwich) {
    const price = getIngredientsPrice(sandwich.ingredients);

    return price;
  }

  throw new Error('Sanduíche não encontrado');
}

function getDiscountedMenu() {
  const discount = 0.1;

  const pizzasDiscounted = data.menu.pizzas.map(pizza => ({
    ...pizza,
    price: pizza.price - (pizza.price * discount),
  }))

  return {
    ...data.menu,
    pizzas: pizzasDiscounted
  }
}

function getDayMenu(day) {
  if (data.saleDays.includes(day)) {
    return getDiscountedMenu();
  }

  return data.menu;
}

function findById(id) {
  const foundPizza = data.menu.pizzas.find(pizza => pizza.id === id)

  if (foundPizza) {
    return foundPizza;
  }

  const foundDrink = data.menu.drinks.find(drink => drink.id === id);

  if (foundDrink) {
    return foundDrink;
  }

  throw new Error('Produto não encontrado');
}

function getSharedBill(ordersIDs, qtd) {
  const total = ordersIDs.reduce((acc, order) => {
    const product = findById(order.id);
    const totalProductPrice = product.price * order.qtd;

    return acc + totalProductPrice;
  }, 0);

  return total / qtd;
}

function reduceSandwichItemsToObject() {
  return data.menu.sandwichItems
    .reduce((acc, item) => ({ ...acc, [item.name]: item }), {});
}

function makeSandwich(items) {
  const sandwichItems = reduceSandwichItemsToObject();

  if (items.some(item => !sandwichItems[item])) {
    throw new Error(`Pedido inválido`);
  }

  return items
    .map(item => ({ ...sandwichItems[item] }))
    .reduce((acc, item) => acc + item.price, 0);
}

function getCheapestPizza(price) {
  return data.menu.pizzas.filter(pizza => pizza.price < price);
}

module.exports = {
  getSandwichPrice,
  getDayMenu,
  getDiscountedMenu,
  getSharedBill,
  makeSandwich,
  getCheapestPizza
}

