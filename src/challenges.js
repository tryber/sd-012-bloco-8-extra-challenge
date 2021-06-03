// 1.Quanto custa o sanduíche trybe?
// 2.Montar e validar sanduíche recebendo ingredientes e retornar o preço
// 3.Calcular menu com promoção baseado no dia
// 4.Procurar pizzas mais baratas que X
// 5.Calcular preço final e quanto fica pra cada amigo
// 6.Retornar lanches e preço dos combos
const data = require("../data");

/**
 *
 * 1 Requisito getSandwichPrice
 *  - encontre o sandwich
 *  - encontre os ingredients do sandwich
 *      - a partir de um id, encontre um ingrediente
 *  - a partir dos ingredientes do sandwich encontrar o preco final
 */

function findIngredient(id) {
  return data.menu.sandwichItems.find((item) => item.id === id);
}

function findSandwichByName(sandwichName) {
  return data.premade.sandwichs.find(
    (itemArray) => itemArray.name === sandwichName
  );
}

function getSandwichPrice(sandwichName) {
  const sandwich = findSandwichByName(sandwichName);

  if (!sandwich) {
    return "Sanduíche não encontrado";
  }

  const ingredients = sandwich.ingredients;

  const precoFinal = ingredients.reduce((accumulator, itemArray) => {
    const ingredienteProcurado = findIngredient(itemArray);
    return ingredienteProcurado.price + accumulator;
  }, 0);

  return precoFinal;
}

function getDayMenu(day) {}

function getSharedBill(ordersIDs, qtd) {}

function makeSandwich(items) {}

function getCheapestPizza(price) {}

function getComboSandwichsAndPrices() {}

module.exports = {
  getSandwichPrice,
  getDayMenu,
  getSharedBill,
  makeSandwich,
  getCheapestPizza,
  getComboSandwichsAndPrices,
};
