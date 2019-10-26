const perfect = require('./index')

test('6 must be perfect number', () => {
  expect(perfect(6)).toBe(true)
})

test('28 must be perfect number', () => {
  expect(perfect(28)).toBe(true)
})

test('496 must be perfect number', () => {
  expect(perfect(496)).toBe(true)
})

test('8128 must be perfect number', () => {
  expect(perfect(8128)).toBe(true)
})

test('0 must not be perfect number', () => {
  expect(perfect(0)).toBe(false)
})

test('undefined must not be perfect number', () => {
  expect(perfect()).toBe(false)
})

test('negative numbers must not be perfect number', () => {
  expect(perfect(-6)).toBe(false)
})

test('NaN numbers must not be perfect number', () => {
  expect(perfect(NaN)).toBe(false)
})

test('undefined numbers must not be perfect number', () => {
  expect(perfect(undefined)).toBe(false)
})

test('array of numbers must not be perfect number', () => {
  expect(perfect([1,2,3,4])).toBe(false)
})
