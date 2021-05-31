const { it, expect } = require('@jest/globals');
const { getSandwichPrice } = require('../src/challenges');

describe('1. Quanto custa o sanduíche trybe?', () => {
  it('should return sandwich price', () => {
    expect(getSandwichPrice('Trybe Sandwich')).toBe(16.47);
  })

  it('should throw an error with wrong sandwich name', () => {
    expect(() => {
      getSandwichPrice('Fake Sandwich')
    }).toThrowError('Sanduíche não encontrado')
  })
})