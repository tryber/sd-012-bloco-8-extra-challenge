const { getComboSandwichsAndPrices } = require("../src/challenges");

describe("6. Retornar lanches e preço dos combos", () => {
  it("should return cheapest pizza", () => {
    const combos = [
      {
        drink: "Coca 1L",
        name: "Combo 01",
        price: 23.47,
        sandwich: "Trybe Sandwich",
      },
    ];
    expect(getComboSandwichsAndPrices()).toEqual(combos);
  });
});
