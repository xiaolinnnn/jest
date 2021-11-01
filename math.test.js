import { add, minus, multi } from './math'
test('测试加法', () => {
  expect(add(5, 3)).toBe(8)
})
test('测试减法', () => {
  expect(minus(5, 2)).toBe(3)
})
test('测试乘法', () => {
  expect(multi(4, 3)).toBe(12)
})
