// import { add, minus, multi } from './math'
// test('测试加法', () => {
//   expect(add(5, 3)).toBe(8)
// })
// test('测试减法', () => {
//   expect(minus(5, 2)).toBe(3)
// })
// test('测试乘法', () => {
//   expect(multi(4, 3)).toBe(12)
// })
// 匹配器
test('toEqual', () => {
  const a = { one: 1 }
  expect(a).toEqual({ one: 1 })
  // toBeNull toBeUndefined toBeGreaterThan(数字)
  // toBeCloseTo(浮点数) toMatch(匹配字符串) *toContain(Array,Set) toThrow...
})
test('toMatch', () => {
  const a = 'xlchen'
  expect(a).toMatch('c')
})
