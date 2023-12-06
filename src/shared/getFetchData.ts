export const getData = async (baseUrl: string, prefixUrl: string): Promise<any> => {
  try {
    const response = await fetch(baseUrl + '/' + prefixUrl)
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getDataById = async (baseUrl: string, prefixUrl: string, id: string | string[] | undefined): Promise<any> => {
  try {
    const response = await fetch(baseUrl + '/' + prefixUrl + "/" + id)
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error)
  }
}
