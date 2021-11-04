// import { add, minus, multi } from './math'
// import { fetchData } from './fetchData'
import Counter from './Counter'
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
// test('toEqual', () => {
//   const a = { one: 1 }
//   expect(a).toEqual({ one: 1 })
//   // toBeNull toBeUndefined toBeGreaterThan(数字)
//   // toBeCloseTo(浮点数) toMatch(匹配字符串) *toContain(Array,Set) toThrow...
// })
// test('toMatch', () => {
//   const a = 'xlchen'
//   expect(a).toMatch('c')
// })

// 测试异步代码
// test('测试异步代码等不等于{success:true}', (done) => {
//   fetchData((data) => {
//     expect(data).toEqual({ success: true })
//     done()
//   })
// })
// test('测试异步代码等不等于{success:true}', () => {
//   return fetchData().then((res) => {
//     expect(res.data).toEqual({ success: true })
//   })
// })
// test('测试异步代码等不等于{success:true}', () => {
//   return expect(fetchData()).resolves.toMatchObject({
//     data: {
//       success: true,
//     },
//   })
// })
// test('测试fetchData等于404', () => {
//   expect.assertions(1) //至少要执行一次
//   return fetchData().catch((e) => {
//     expect(e.toString().indexOf('404') > -1).toBe(true)
//   })
// })
// async await
// test('测试fetchData等于404', () => {
//   return expect(fetchData()).rejects.toThrow()
// })
let counter = null
beforeAll(() => {
  //   console.log('beforeAll')
})
afterAll(() => {
  //   console.log('afterAll')
})
beforeEach(() => {
  counter = new Counter()
  //   console.log('beforeEach')
})
afterEach(() => {
  //   console.log('afterEach')
})
// jest的钩子函数
// 作用域  不要把准备工作放在describe里,要放在钩子函数里
describe('测试加法', () => {
  // test.only 只执行这一个测试用例
  test('测试Counter中的addOne方法', () => {
    console.log('测试Counter中的addOne方法')
    counter.addOne()
    expect(counter.number).toBe(1)
  })
})
describe('测试减法', () => {
  test('测试Counter中的minusOne方法', () => {
    console.log('测试Counter中的minusOne方法')
    counter.minusOne()
    expect(counter.number).toBe(-1)
  })
})
