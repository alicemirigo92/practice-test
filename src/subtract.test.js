const { default: expect } = require('expect');
const subtract = require('./subtract');

test('properly subtract two numbers', () => {
  expect(subtract(3, 2)).toBe(1)
})
