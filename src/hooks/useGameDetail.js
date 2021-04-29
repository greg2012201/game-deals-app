import { useState, useEffect } from 'react'
import axios from 'axios'
import { RAWGOptions } from 'utils/fetchingOptions'

const { url, key } = RAWGOptions
export const useGameDetail = (slug) => {
  const [data, setData] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get(`${url}/games/${slug}?key=${key}`)
        return setData(data)
      } catch (e) {
        return setError('Something went wrong')
      }
    })()
  }, [slug])
  return { data, error }
}
