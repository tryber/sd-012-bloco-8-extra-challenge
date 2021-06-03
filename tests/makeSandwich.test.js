const { it, expect } = require("@jest/globals");
const { makeSandwich } = require("../src/challenges");

describe("2. Montar e validar sanduíche recebendo ingredientes e retornar o preço ", () => {
  it("should return sandwich price", () => {
    const items = ["Integral", "Mil Grãos", "Quatro Queijos"];
    expect(makeSandwich(items)).toBe(17.47);
  });
});
