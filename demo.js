import Axios from 'axios'
import axios from 'axios'
// export const runCallback = (callback) => {
//   callback('abc')
// }
// export const classDemo = (classItem) => {
//   new classItem()
// }

// export const generateConfig = () => {
//   return {
//     server: 'http://localhost',
//     port: 8080,
//     time: new Date(),
//   }
// }
// export const generateAnatherConfig = () => {
//   return {
//     server: 'http://localhost',
//     port: 8080,
//     time: new Date(),
//   }
// }
export const fetchData = () => {
  return axios.get('/').then((res) => res.data)
}
export const getNumber = () => {
  return 123
}
