import { httpClient } from '../../common/utils/httpClient'

export async function getContents() {
  try {
    const response = await httpClient.get('/contents')
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}