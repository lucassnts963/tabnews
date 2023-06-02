import { httpClient } from '../../common/utils/httpClient'

export async function getComment(data) {
  const { slug, owner_username } = data
  try {
    const response = await httpClient.get(`/contents/${owner_username}/${slug}/children`)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}