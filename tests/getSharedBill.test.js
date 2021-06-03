const { it, expect } = require("@jest/globals");
const { getSharedBill } = require("../src/challenges");

describe("5. Quanto custa o sanduíche trybe?", () => {
  const orders = [
    {
      id: "a82291d3-a866-4e3e-9e99-b9e92cd25319",
      qtd: 2,
    },
    {
      id: "ede6545e-0017-405e-90c1-3871405d4392",
      qtd: 2,
    },
  ];

  it("should return shared bill", () => {
    expect(getSharedBill(orders, 5)).toBe(14.8);
  });

  const wrongOrders = [
    {
      id: "a82291da-a866-4e3e-9e99-b9e92cd25319",
      qtd: 2,
    },
    {
      id: "ede6545e-0017-405e-90c1-3871405d4392",
      qtd: 2,
    },
  ];
});
