import { useEffect, useState } from "react"
import { getComment } from "../../domain/useCases/getComments"

export function useComments(info) {
  const [comments, setComment] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  function refresh() {
    fetch()
  }

  async function fetch() {
    setLoading(true)
    try {
      const data = await getComment(info)
      setComment(data)
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
    comments,
    loading,
    error,
    refresh
  }
}