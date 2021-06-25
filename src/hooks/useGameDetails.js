import { useState, useCallback } from 'react'
import axios from 'axios'

export const useGameDetails = () => {
  const [data, setData] = useState({})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchData = useCallback(async (url) => {
    setLoading(true)

    try {
      const response = await axios.get(url)
      setLoading(false)
      setData(response.data)
    } catch (e) {
      setLoading(false)
      return setError('Something went wrong')
    }
  }, [])

  return { data, error, fetchData, loading }
}
