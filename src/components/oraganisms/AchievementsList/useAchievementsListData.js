import axios from 'axios'
import { useState, useCallback } from 'react'

export const useAchievementsListData = () => {
  const [achievements, setAchievements] = useState([])
  const [page, setPage] = useState({})
  const [loading, setLoading] = useState(false)

  const fetchData = useCallback(async (url, source = null) => {
    setLoading(true)
    try {
      const {
        data: { next, previous, count, results },
      } = await axios.get(
        url,
        source
          ? {
              cancelToken: source.token,
            }
          : null
      )
      setAchievements(results)
      setPage({ next, previous, count })
      setLoading(false)
    } catch (e) {
      return setLoading(false)
    }
  }, [])
  const getCancelToken = useCallback(() => {
    return axios.CancelToken.source()
  }, [])
  const resetData = useCallback((source) => {
    source.cancel()
  }, [])

  return { fetchData, achievements, getCancelToken, resetData, page, loading }
}
