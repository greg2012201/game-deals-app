import axios from 'axios'
import { useState, useCallback } from 'react'
const achievementsInitialState = []
export const useAchievementsListData = () => {
  const [achievements, setAchievements] = useState([])
  const [page, setPage] = useState({})
  const [loading, setLoading] = useState(achievementsInitialState)
  const [error, setError] = useState(false)

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
      setLoading(false)
      setPage({ next, previous, count })
    } catch (e) {
      setError(e)
      return setLoading(false)
    }
  }, [])
  const getCancelToken = useCallback(() => {
    return axios.CancelToken.source()
  }, [])
  const resetData = useCallback((source) => {
    source.cancel()
    setAchievements(achievementsInitialState)
  }, [])

  return { fetchData, achievements, getCancelToken, resetData, page, loading, error }
}
