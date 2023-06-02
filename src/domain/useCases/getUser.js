import AsyncStorage from "@react-native-async-storage/async-storage"
import { httpClient } from "../../common/utils/httpClient"

export async function getUser() {
  try {
    const sessionId = await AsyncStorage.getItem('sessionId')
    const response = await httpClient.get('/user', {
      headers: {
        "Set-Cookie": `session_id=${sessionId}`
      }
    })

    return response.data
  } catch (error) {
    return null
  }
}