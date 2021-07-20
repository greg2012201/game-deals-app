import { useState, useCallback } from 'react'
import axios from 'axios'
import { actions } from 'utils/state/transitions'

export const useGameDetails = () => {
  const [data, setData] = useState({})
  const [error, setError] = useState('')
  const fetchData = useCallback(async (url, updateState) => {
    const { fetch, success, error: stateError } = actions
    updateState(fetch)
    try {
      const response = await axios.get(url)
      updateState(success)
      setData(response.data)
    } catch (e) {
      updateState(stateError)
      return setError('Something went wrong')
    }
  }, [])

  return { data, error, fetchData }
}
