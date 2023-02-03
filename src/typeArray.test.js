const typeArray = require('./typeArray')

test('properly type of array', () => {
  const array = [1, 2, 3]
  expect(typeArray(array)).toEqual(array)
  expect(typeArray(array)).not.toBe(array)
})