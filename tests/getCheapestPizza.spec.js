const data = require('../data');
const { getCheapestPizza } = require('../src/challenges')

describe('4. Procurar pizzas mais baratas que X', () => {
  it('should return cheapest pizza', () => {
    expect(getCheapestPizza(1000)).toEqual(data.menu.pizzas);
  })

  it('should return any pizza if price is to low', () => {
    expect(getCheapestPizza(1)).toEqual([]);
  })
})