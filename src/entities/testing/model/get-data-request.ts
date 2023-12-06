import axios from 'axios'

export const getDataRequest = async (url: string) => {
  try {
    return (await axios.get(url)).data
  } catch (error) {
    console.log(error)
  }
}
