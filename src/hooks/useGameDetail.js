import { useState, useEffect } from 'react'
import axios from 'axios'
import { RAWGOptions } from 'utils/fetchingOptions'

const { url, key } = RAWGOptions
export const useGameDetail = (slug) => {
  const [data, setData] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get(`${url}/games/${slug}?key=${key}`)
      .then(({ data }) => setData(data))
      .catch(() => setError('Something went wrong'))
  }, [slug])
  return { data, error }
}
