import { useState, useCallback } from 'react'
import axios from 'axios'
import { actions } from 'utils/state/transitions'
import { useStateMachine } from './useStateMachine'

const fetchingCancelMessage = 'cancel'
export const useFetchData = (setData) => {
  const { updateState, compareState } = useStateMachine()
  const [error, setError] = useState('')
  const fetchData = useCallback(
    async ({ url, source }) => {
      updateState(actions.fetch)
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
        updateState(actions.success)
      } catch (e) {
        if (e.message === fetchingCancelMessage) return
        setError('Something went wrong')
        updateState(actions.error)
      }
    },
    [updateState, setData]
  )
  const getCancelToken = useCallback(() => {
    return axios.CancelToken.source()
  }, [])
  const resetData = useCallback(
    (source, initialState) => {
      source.cancel(fetchingCancelMessage)
      setData(initialState)
    },
    [setData]
  )

  return { error, fetchData, resetData, getCancelToken, compareState }
}
