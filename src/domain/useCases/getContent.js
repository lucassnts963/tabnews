import { httpClient } from '../../common/utils/httpClient'

export async function getContent(data) {
  const { slug, owner_username } = data
  try {
    const response = await httpClient.get(`/contents/${owner_username}/${slug}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}