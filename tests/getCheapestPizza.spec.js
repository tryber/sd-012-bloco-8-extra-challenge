const data = require('../data');
const { getCheapestPizza } = require('../src/challenges')

describe('4. Procurar pizzas mais baratas que X', () => {
  it('should return the cheapest pizzas', () => {
    expect(getCheapestPizza(1000)).toEqual(data.menu.pizzas);
  })

  it('should return empty array if price is to low', () => {
    expect(getCheapestPizza(1)).toEqual([]);
  })
})