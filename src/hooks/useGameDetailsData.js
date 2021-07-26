import { useState, useCallback } from 'react'
import axios from 'axios'
import { actions } from 'utils/state/transitions'
import { useStateMachine } from './useStateMachine'
const initialState = {}
const fetchingCancelMessage = 'cancel'
export const useGameDetailsData = () => {
  const { updateState, compareState } = useStateMachine()
  const [data, setData] = useState({})
  const [error, setError] = useState('')
  const fetchData = useCallback(
    async ({ url, source }) => {
      const { fetch, success, error: stateError } = actions
      updateState(fetch)
      try {
        const response = await axios.get(
          url,
          source
            ? {
                cancelToken: source.token,
              }
            : null
        )
        setData(response.data)
        updateState(success)
      } catch (e) {
        if (e.message === fetchingCancelMessage) return
        setError('Something went wrong')
        updateState(stateError)
      }
    },
    [updateState]
  )
  const getCancelToken = useCallback(() => {
    return axios.CancelToken.source()
  }, [])
  const resetData = useCallback((source) => {
    source.cancel(fetchingCancelMessage)
    setData(initialState)
  }, [])

  return { data, error, fetchData, resetData, getCancelToken, compareState }
}
