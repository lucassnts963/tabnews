import { useEffect, useState } from "react"
import { getUser } from "../../domain/useCases/getUser"

export function useUser() {
  const [user, setUser] = useState(null)

  async function fetch() {
    const data = await getUser()
    setUser(data)
  }

  useEffect(() => {
    fetch()
  }, [])

  return user
}