import axios from 'axios'
import { useState, useCallback } from 'react'
import { actions } from 'utils/state/transitions'
const achievementsInitialState = []
const fetchingCancelMessage = 'cancel'
export const useAchievementsListData = () => {
  const [achievements, setAchievements] = useState([])
  const [page, setPage] = useState({})
  const [error, setError] = useState('')

  const fetchData = useCallback(async ({ url, source = null, updateState }) => {
    updateState(actions.fetch)
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
      updateState(actions.success)
      setPage({ next, previous, count })
    } catch (e) {
      if (e.message === fetchingCancelMessage) return
      setError('Something went wrong')
      updateState(actions.error)
    }
  }, [])
  const getCancelToken = useCallback(() => {
    return axios.CancelToken.source()
  }, [])
  const resetData = useCallback((source) => {
    source.cancel(fetchingCancelMessage)
    setAchievements(achievementsInitialState)
  }, [])

  return { fetchData, achievements, getCancelToken, resetData, page, error }
}
