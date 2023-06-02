import { useEffect, useState } from "react"
import { getContents } from "../../domain/useCases/getContents"

export function useContents() {
  const [contents, setContents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  function refresh() {
    fetch()
  }

  async function fetch() {
    setLoading(true)
    try {
      const data = await getContents()
      setContents(data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  return {
    contents,
    loading,
    error,
    refresh
  }
}