import axios from 'axios'

export const createPost = async (data: any) => {
  return axios.post('https://jsonplaceholder.typicode.com/posts', data)
}
