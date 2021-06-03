// 1.Quanto custa o sanduíche trybe?
// 2.Montar e validar sanduíche recebendo ingredientes e retornar o preço
// 3.Calcular menu com promoção baseado no dia
// 4.Procurar pizzas mais baratas que X
// 5.Calcular preço final e quanto fica pra cada amigo
// 6.Retornar lanches e preço dos combos
const data = require("../data");

function findIngredientById(id) {
  return data.menu.sandwichItems.find((item) => item.id === id);
}

function findSandwichByName(sandwichName) {
  return data.premade.sandwichs.find(
    (itemArray) => itemArray.name === sandwichName
  );
}

function getSandwichPrice(sandwichName) {
  /**
   *
   * 1 Requisito getSandwichPrice
   *  - encontre o sandwich
   *  - encontre os ingredients do sandwich
   *      - a partir de um id, encontre um ingrediente
   *  - a partir dos ingredientes do sandwich encontrar o preco final
   */
  const sandwich = findSandwichByName(sandwichName);

  if (!sandwich) {
    return "Sanduíche não encontrado";
  }

  const ingredients = sandwich.ingredients;

  const precoFinal = ingredients.reduce((accumulator, itemArray) => {
    const ingredienteProcurado = findIngredientById(itemArray);
    return ingredienteProcurado.price + accumulator;
  }, 0);

  return precoFinal;
}

function getDayMenu(day) {
  /**
   *
   * 3 Requisito getDayMenu
   *  - encontre o dia dentro do array de saleDays e retorna o menu
   *  - diminui o preco dos items em 10% se o dia nao existe no saleDays
   */
  const isDayInSaleDays = data.saleDays.some((itemArray) => itemArray === day);

  if (isDayInSaleDays) {
    //Adiciona o desconto
    const discount = 0.1; // 10%
    data.menu.pizzas = data.menu.pizzas.map((itemMenu) => ({
      ...itemMenu,
      price: itemMenu.price - itemMenu.price * discount,
    }));
  }

  return data.menu;
}

function getSharedBill(ordersIDs, qtd) {}

function findIngredientByName(ingredientName) {
  return data.menu.sandwichItems.find((item) => item.name === ingredientName);
}

function makeSandwich(items) {
  /**
   *
   * 2 Requisito makeSandwich
   *  - encontre o ingrediente pelo nome
   *  - a partir dos ingredientes do sandwich encontrar o preco final
   */
  return items.reduce((acc, itemName) => {
    const foundItem = findIngredientByName(itemName);
    return foundItem.price + acc;
  }, 0);
}

function getCheapestPizza(price) {
  /**
   *
   * 4 Requisito getCheapestPizza
   *  - filtrar as pizzas
   */
  return data.menu.pizzas.filter((pizza) => pizza.price < price);
}

function getComboSandwichsAndPrices() {}

module.exports = {
  getSandwichPrice,
  getDayMenu,
  getSharedBill,
  makeSandwich,
  getCheapestPizza,
  getComboSandwichsAndPrices,
};
