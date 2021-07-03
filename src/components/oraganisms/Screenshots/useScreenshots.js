import axios from 'axios'
import { useCallback, useState } from 'react'

export const useScreenshots = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchData = useCallback(async (url) => {
    setLoading(true)
    try {
      const { data } = await axios.get(url)
      setLoading(false)

      setData(data.results)
    } catch (e) {
      setLoading(false)
      setError(e)
      throw Error(e)
    }
  }, [])

  return { error, data, loading, fetchData }
}
