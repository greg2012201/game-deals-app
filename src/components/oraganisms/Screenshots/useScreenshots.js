import axios from 'axios'
import { useCallback, useState } from 'react'

export const useScreenshots = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  const fetchData = useCallback(async (url) => {
    setLoading(true)
    try {
      const { data } = await axios.get(url)
      setLoading(false)

      setData(data.results)
    } catch (e) {
      throw Error(e)
    }
  }, [])

  return { data, loading, fetchData }
}
