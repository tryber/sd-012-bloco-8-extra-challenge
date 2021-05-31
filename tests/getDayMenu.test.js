const { it, expect } = require('@jest/globals');
const data = require('../data');
const { getDayMenu, getDiscountedMenu } = require('../src/challenges')

describe('3. Calcular menu com promoção baseado no dia', () => {
  it('should return common menu', () => {
    expect(getDayMenu('Friday')).toEqual(data.menu);
  })

  it('should return discounted menu', () => {
    const expected = getDiscountedMenu();

    expect(getDayMenu('Monday')).toEqual(expected);
  })
})