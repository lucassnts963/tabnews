import { useEffect, useState } from "react"
import { getContent } from "../../domain/useCases/getContent"

export function useContent(info) {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  function refresh() {
    fetch()
  }

  async function fetch() {
    setLoading(true)
    try {
      const data = await getContent(info)
      setContent(data)
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
    content,
    loading,
    error,
    refresh
  }
}