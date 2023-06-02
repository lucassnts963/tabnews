import { httpClient } from '../../common/utils/httpClient'

export async function signInUseCase({ email, password }) {
  try {
    const response = await httpClient.post('/sessions', {email, password})
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}