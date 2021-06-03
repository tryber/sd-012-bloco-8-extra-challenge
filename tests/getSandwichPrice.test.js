const { it, expect } = require("@jest/globals");
const { getSandwichPrice } = require("../src/challenges");

describe("1. Quanto custa o sanduíche trybe?", () => {
  it("should return sandwich price", () => {
    expect(getSandwichPrice("Trybe Sandwich")).toBe(16.47);
  });

  it("should return undefined with wrong sandwich", () => {
    expect(getSandwichPrice("Fake Sandwich")).toBe("Sanduíche não encontrado");
  });
});
