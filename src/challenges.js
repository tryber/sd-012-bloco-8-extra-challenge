// 1.Quanto custa o sanduíche trybe?
// 2.Montar e validar sanduíche recebendo ingredientes e retornar o preço 
// 3.Calcular menu com promoção baseado no dia
// 4.Procurar pizzas mais baratas que X
// 5.Calcular preço final e quanto fica pra cada amigo
// 6.Retornar lanches e preço dos combos
const data = require('../data');

function getIngredientsPrice(ingredients){
  return ingredients.reduce((acc, id) => {
    const ingredient = data.menu.sandwichItems.find(ingredient => ingredient.id === id);

    if(ingredient){
      return ingredient.price + acc;
    }

    return acc; //lançar erro?
  }, 0)
}

function getSandwichPrice(sandwichName){
  const sandwich = data.premade.sandwichs.find(sandwich => sandwich.name === sandwichName);

  if(sandwich) {
    const price = getIngredientsPrice(sandwich.ingredients);

    return price;
  }

  throw new Error('Sanduíche não encontrado');
}

module.exports = {
  getSandwichPrice
}